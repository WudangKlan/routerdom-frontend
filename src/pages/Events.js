// import { useEffect, useState } from 'react';
import { json, useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import EventsList from "../components/EventsList";

function EventsPage() {
  // karena defer useLoaderData akan mengeluarkan object
  const data = useLoaderData();
  const { events } = data;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // // hasil dari return response di loader maka ditambahakan
  // const events = data.events;

  // return <EventsList events={events} />;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>loading ...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvent() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    //return response;
    // karena menggunakan defer mesti diextract keluar data jsonnya
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvent(),
  });
}
