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
  const res = await fetch(`http://localhost:5000/my-events/${email}`);
  const eventData = await res.json();
  console.log(eventData);
  return (
    <div>
      <div>
        {eventData.map((fd: EventItem) => (
          <div
            key={fd._id}
            className="flex flex-col border border-[#1E2A56] bg-[#f5f0ea] p-4 text-[#1E2A56] sm:p-6"
          >
            {fd.imageUrl && (
              <Image
                src={fd.imageUrl}
                alt={fd.title}
                width={800}
                height={500}
                className="h-40 w-full object-cover sm:h-48"
              />
            )}

            {fd.organizer && (
              <span className="mt-4 inline-block self-start bg-[#1E2A56] px-3 py-1 text-xs font-semibold text-[#f5f0ea]">
                Organized by {fd.organizer}
              </span>
            )}

            <h3 className="mt-3 text-lg font-bold sm:text-xl">{fd.title}</h3>

            <p className="mt-2 text-sm font-semibold">
              {new Date(fd.eventDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-sm font-semibold">{fd.location}</p>

            <p className="mt-3 line-clamp-3 text-sm leading-relaxed opacity-80">
              {fd.description}
            </p>

            <div className="mt-auto pt-6">
              <Link
                href={`/eventDetails/${fd._id}`}
                className="inline-block bg-[#1E2A56] px-6 py-3 font-semibold text-[#f5f0ea] hover:bg-[#16204a]"
              >
                View Details
              </Link>
            </div>

            <EditButton fd={fd} />
            <DeleteButton fd={fd} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
