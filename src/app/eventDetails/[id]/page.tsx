import JoinEventButton from "@/components/button/joinEventButton";

import Image from "next/image";

type EventItem = {
  _id: string;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  imageUrl: string;
  organizer: string;
  category: string;
};

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`);
  const data = await res.json();
  const event: EventItem = data;
  return (
    <section className="bg-[#f5f0ea] px-6 py-14 dark:bg-[#171923] sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            {event.imageUrl && (
              <Image
                src={event.imageUrl}
                alt={event.title}
                width="150"
                height="150"
                className="h-56 w-full border border-[#1E2A56] object-cover dark:border-[#f5f0ea]/30 sm:h-96"
              />
            )}

            <h1 className="mt-6 text-3xl font-bold text-[#1E2A56] dark:text-[#f5f0ea] sm:text-5xl">
              {event.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#1E2A56]/80 dark:text-[#f5f0ea]/80">
              {event.description}
            </p>
          </div>

          <div className="border border-[#1E2A56] bg-[#1E2A56] p-6 text-[#f5f0ea] dark:border-[#f5f0ea]/30 dark:bg-[#222630]">
            <h2 className="text-xl font-bold">Event Details</h2>

            <div className="mt-5">
              <p className="text-sm opacity-80">Date</p>
              <p className="font-semibold">
                {new Date(event.eventDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-sm opacity-80">Location</p>
              <p className="font-semibold">{event.location}</p>
            </div>

            {event.organizer && (
              <div className="mt-4">
                <p className="text-sm opacity-80">Organized by</p>
                <p className="font-semibold">{event.organizer}</p>
              </div>
            )}

            <div className="mt-8">
              <JoinEventButton event={event} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsPage;
