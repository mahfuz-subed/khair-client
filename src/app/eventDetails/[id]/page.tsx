import JoinEventButton from "@/components/button/joinEventButton";
import Image from "next/image";
import Link from "next/link";
type EventItem = {
  _id: string;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  imageUrl: string;
  organizer: string;
};

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/event/${id}`);
  const data = await res.json();
  const event: EventItem = data;
  return (
    <section className="bg-[#f5f0ea] px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/events"
          className="inline-block border border-[#1E2A56] px-6 py-3 font-semibold text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
        >
          Back to Events
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            {event.imageUrl && (
              <Image
                src={event.imageUrl}
                alt={event.title}
                width="150"
                height="150"
                className="h-56 w-full border border-[#1E2A56] object-cover sm:h-96"
              />
            )}

            <h1 className="mt-6 text-3xl font-bold text-[#1E2A56] sm:text-5xl">
              {event.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#1E2A56]/80">
              {event.description}
            </p>
          </div>
          <div className=" border border-[#1E2A56] bg-[#1E2A56] p-6 text-[#f5f0ea]">
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
              <JoinEventButton eventId={event._id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsPage;
