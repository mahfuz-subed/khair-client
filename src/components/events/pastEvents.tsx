import { EventItem } from "@/app/upcoming-events/page";
import Image from "next/image";
import React from "react";

const pastEvents = ({ data }: { data: EventItem[] }) => {
  return (
    <section className="bg-[#1E2A56] px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-[#f5f0ea] sm:text-5xl">
            Events That Made a{" "}
            <span className="inline-block bg-[#f5f0ea] px-2 text-[#1E2A56]">
              Difference.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#f5f0ea]/80">
            Every event here is complete. See how our community came together,
            and get inspired to start the next one.
          </p>
        </div>

        {data.length === 0 && (
          <p className="mt-10 text-[#f5f0ea]">No past events to show yet.</p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.map((fd: EventItem) => (
            <div
              key={fd._id}
              className="flex flex-col bg-[#f5f0ea] text-[#1E2A56]"
            >
              {fd.imageUrl && (
                <Image
                  src={fd.imageUrl}
                  alt={fd.title}
                  width={800}
                  height={500}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-4 sm:p-5">
                <span className="inline-block bg-[#1E2A56] px-3 py-1 text-xs font-semibold text-[#f5f0ea]">
                  Completed
                </span>

                <h3 className="mt-3 text-lg font-bold sm:text-xl">
                  {fd.title}
                </h3>

                <p className="mt-2 text-sm font-semibold">
                  {new Date(fd.eventDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="text-sm font-semibold">{fd.location}</p>

                {fd.organizer && (
                  <p className="text-sm opacity-80">
                    Organized by {fd.organizer}
                  </p>
                )}

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed opacity-80">
                  {fd.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default pastEvents;
