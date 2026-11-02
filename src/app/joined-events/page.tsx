import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IEvent {
  _id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  organizer: string;
  eventDate: string;
  imageUrl: string;
  createdBy: string;
}
const JoinedEventsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;
  const res = await fetch(
    `https://khair-server.vercel.app/my-joined-events/${email}`,
  );
  const data = await res.json();
  return (
    <div className="min-h-screen bg-[#f5f0ea] px-4 py-12 text-[#1E2A56] sm:px-8">
      <div className="mx-auto mb-10 w-[90%] text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">My Joined Events</h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed opacity-75 sm:text-base">
          Every act of kindness starts with participation. Explore the community
          events you've joined and get ready to make a difference.
        </p>
      </div>

      <div className="mx-auto grid w-[90%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((event: IEvent) => (
          <div
            key={event._id}
            className="flex flex-col border border-[#1E2A56] bg-[#f5f0ea] p-3"
          >
            {event.imageUrl && (
              <Image
                src={event.imageUrl}
                alt={event.title}
                width={800}
                height={500}
                className="h-40 w-full object-cover"
              />
            )}

            <h2 className="mt-4 text-lg font-bold">{event.title}</h2>

            <div className="mt-2 space-y-1 text-sm font-semibold">
              <p>
                {new Date(event.eventDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p>{event.location}</p>
            </div>

            <p className="mt-3 line-clamp-2 text-sm leading-relaxed opacity-80">
              {event.description}
            </p>

            <div className="mt-5">
              <Link
                href={`/eventDetails/${event._id}`}
                className="inline-block bg-[#1E2A56] px-4 py-2.5 text-sm font-semibold text-[#f5f0ea] transition-colors hover:bg-[#293b72]"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <p className="mt-12 text-center text-[#1E2A56]/70">
          You haven't joined any events yet. Explore upcoming events and become
          part of something meaningful!
        </p>
      )}
    </div>
  );
};

export default JoinedEventsPage;
