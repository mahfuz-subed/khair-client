import React from "react";
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
const PastEvents = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/past-events`);
  const data = await res.json();
  return (
    <div>
      <PastEvents data={data} />
    </div>
  );
};

export default PastEvents;
