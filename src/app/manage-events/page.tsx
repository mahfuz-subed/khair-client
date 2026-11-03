import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { EventItem } from "../upcoming-events/page";
import Image from "next/image";
import Link from "next/link";
import EditButton from "@/components/button/editButton";
import DeleteButton from "@/components/button/deleteButton";

const ManageEvents = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const email = session?.user?.email;
  console.log("email", email);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/my-events/${email}`,
  );
  const eventData = await res.json();
  console.log(eventData);
  return (
    <div className="min-h-screen bg-[#f5f0ea] pb-12 dark:bg-[#171923]">
      <div className="mx-auto mt-12 w-[90%] text-center text-[#1E2A56] dark:text-[#f5f0ea]">
        <h1 className="text-3xl font-bold sm:text-4xl">Manage Your Events</h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed opacity-75 sm:text-base">
          Every meaningful initiative starts with an idea. Manage the events
          you've created, update their details, and continue spreading goodness.
        </p>
      </div>

      <div className="mx-auto mt-10 grid w-[90%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {eventData.map((fd: EventItem) => (
          <div
            key={fd._id}
            className="flex flex-col border border-[#1E2A56] bg-[#f5f0ea] p-3 text-[#1E2A56] dark:border-[#f5f0ea]/30 dark:bg-[#222630] dark:text-[#f5f0ea]"
          >
            {fd.imageUrl && (
              <Image
                src={fd.imageUrl}
                alt={fd.title}
                width={800}
                height={500}
                className="h-40 w-full object-cover"
              />
            )}

            {fd.organizer && (
              <span className="mt-3 inline-block self-start bg-[#1E2A56] px-3 py-1.5 text-xs font-semibold text-[#f5f0ea] dark:bg-[#f5f0ea] dark:text-[#1E2A56]">
                Organized by {fd.organizer}
              </span>
            )}

            <h3 className="mt-3 text-lg font-bold">{fd.title}</h3>

            <div className="mt-2 space-y-1 text-sm font-semibold">
              <p>
                {new Date(fd.eventDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p>{fd.location}</p>
            </div>

            <p className="mt-3 line-clamp-2 text-sm leading-relaxed opacity-80">
              {fd.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Link
                href={`/eventDetails/${fd._id}`}
                className="bg-[#1E2A56] px-4 py-2.5 text-sm font-semibold text-[#f5f0ea] transition-colors hover:bg-[#293b72] dark:bg-[#f5f0ea] dark:text-[#1E2A56] dark:hover:bg-[#ded8d0]"
              >
                View Details
              </Link>

              <EditButton fd={fd} />
              <DeleteButton fd={fd} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
