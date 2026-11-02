"use client";
import { EventItem } from "@/app/upcoming-events/page";
import { Button } from "@base-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChangeEvent } from "react";
import CreateEventButtton from "../button/createEvent";

const UpcomingEventsList = ({ data }: { data: EventItem[] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [value, setValue] = useState(" ");
  const categories = ["All"];
  data.forEach((dt: EventItem) => {
    if (!categories.includes(dt.category)) {
      categories.push(dt.category);
    }
  });
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((dt: EventItem) => dt.category === selectedCategory);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };
  const searchedData = filteredData.filter(
    (sd: EventItem) =>
      sd.title.toLowerCase().includes(value.toLowerCase()) ||
      sd.category.toLowerCase().includes(value.toLowerCase()),
  );
  return (
    <div className="min-h-screen bg-[#f5f0ea] px-4 py-12 text-[#1E2A56] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-[#1E2A56]/20 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase">
            Be Part of Something Good
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Upcoming Events
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#1E2A56]/70 sm:text-base">
                Discover meaningful community events, connect with people, and
                make a positive difference together.
              </p>
            </div>

            <CreateEventButtton />
          </div>
        </div>

        <div className="mb-6">
          <input
            type="search"
            name="search"
            placeholder="Search events or categories..."
            onChange={handleSearch}
            className="h-12 w-full border border-[#1E2A56] bg-white px-4 text-sm text-[#1E2A56] outline-none focus:ring-1 focus:ring-[#1E2A56]"
          />
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`border border-[#1E2A56] px-5 py-2 text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-[#1E2A56] text-[#f5f0ea]"
                  : "bg-transparent text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {searchedData.map((fd: EventItem) => (
            <div
              key={fd._id}
              className="flex flex-col border border-[#1E2A56] bg-[#f5f0ea] p-4 sm:p-5"
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

              {fd.organizer && (
                <span className="mt-4 inline-block w-full bg-[#1E2A56] px-3 py-2 text-xs font-semibold text-[#f5f0ea]">
                  Organized by {fd.organizer}
                </span>
              )}

              <h2 className="mt-5 text-xl font-bold sm:text-2xl">{fd.title}</h2>

              <div className="mt-3 space-y-1 text-sm font-semibold">
                <p>
                  {new Date(fd.eventDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <p>{fd.location}</p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#1E2A56]/75">
                {fd.description}
              </p>

              <div className="mt-auto pt-8">
                <Link
                  href={`/eventDetails/${fd._id}`}
                  className="inline-block bg-[#1E2A56] px-7 py-4 font-semibold text-[#f5f0ea] transition-colors hover:bg-[#293b72]"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsList;
