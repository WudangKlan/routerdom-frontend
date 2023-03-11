import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  //const params = useParams();
  const data = useLoaderData();
  console.log(data)
  return (
    // <>
    //   <h1>EventDetailPage</h1>
    //   <p>Event Id: {params.eventId}</p>
    // </>
    <EventItem event={data.eventt} />
  );
}
export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch detail for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
