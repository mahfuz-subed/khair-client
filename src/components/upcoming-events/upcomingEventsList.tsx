"use client";
import { EventItem } from "@/app/upcoming-events/page";
import { Button } from "@base-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChangeEvent } from "react";

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
    <div>
      <div className="flex justify-center items-center">
        <input
          type={"search"}
          name={"search"}
          placeholder={"Search events or categories"}
          className="mb-6 h-12 w-full border border-[#1E2A56] bg-white px-4 text-[#1E2A56]"
          onChange={handleSearch}
        />
      </div>
      <div>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`border border-[#1E2A56] px-4 py-2 text-sm font-semibold ${
              selectedCategory === category
                ? "bg-[#1E2A56] text-[#f5f0ea]"
                : "text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
      {searchedData.map((fd: EventItem) => (
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
        </div>
      ))}
    </div>
  );
};

export default UpcomingEventsList;
