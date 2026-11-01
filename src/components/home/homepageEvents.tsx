import Link from "next/link";
import Image from "next/image";
interface EventItem {
  _id: string;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  imageUrl: string;
  organizer: string;
}

const HomepageEvents = async () => {
  const res = await fetch(`http://localhost:5000/events`);
  const data = await res.json();

  const events: EventItem[] = data;
  return (
    <div>
      <section className="bg-white px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-[#1E2A56] sm:text-5xl">
              Upcoming Events Waiting for{" "}
              <span className="inline-block bg-[#1E2A56] px-2 text-[#f5f0ea]">
                You.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#1E2A56]/80">
              Browse the latest community events across Bangladesh, from iftar
              drives to Eid campaigns, and find one where your help makes a
              difference.
            </p>
          </div>

          {events.length === 0 ? (
            <p className="mt-10 text-[#1E2A56]">
              No upcoming events right now. Please check back soon!
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="flex flex-col border border-[#1E2A56] bg-[#f5f0ea] p-4 text-[#1E2A56] sm:p-6"
                >
                  {event.imageUrl && (
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      width="150"
                      height="150"
                      className="h-40 w-full object-cover sm:h-48"
                    />
                  )}

                  {event.organizer && (
                    <span className="mt-4 inline-block bg-[#1E2A56] px-3 py-1 text-xs font-semibold text-[#f5f0ea]">
                      Organized by {event.organizer}
                    </span>
                  )}

                  <h3 className="mt-4 text-lg font-bold sm:text-xl">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold">
                    {new Date(event.eventDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm font-semibold">{event.location}</p>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed opacity-80">
                    {event.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <Link
                      href={`/eventDetails/${event._id}`}
                      className="inline-block bg-[#1E2A56] px-6 py-3 font-semibold text-[#f5f0ea] hover:bg-[#16204a]"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10">
            <Link
              href="/events"
              className="inline-block border border-[#1E2A56] px-8 py-4 font-semibold text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageEvents;
