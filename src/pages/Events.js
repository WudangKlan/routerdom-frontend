// import { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  // hasil dari return response di loader maka ditambahakan
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return {isError:true, message:'could not fetch event.'}
    //throw new Error({ message: "could not fetch event" });
    //throw { message: `could not fetch event` };
    throw new Error()
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
}
