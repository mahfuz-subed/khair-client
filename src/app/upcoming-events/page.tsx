import UpcomingEventsList from "@/components/upcoming-events/upcomingEventsList";
export interface EventItem {
  _id: string;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  imageUrl: string;
  organizer: string;
  category: string;
}
const UpcomingEvents = async () => {
  const res = await fetch(`https://khair-server.vercel.app/upcoming-events`);
  const data = await res.json();

  return (
    <div>
      <UpcomingEventsList data={data} />
    </div>
  );
};

export default UpcomingEvents;
