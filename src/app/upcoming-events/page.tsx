import UpcomingEventsList from "@/components/events/upcomingEventsList";
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upcoming-events`);
  const data = await res.json();

  return (
    <div>
      <UpcomingEventsList data={data} />
    </div>
  );
};

export default UpcomingEvents;
