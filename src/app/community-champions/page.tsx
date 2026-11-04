import Image from "next/image";
import React from "react";

interface IChampionItem {
  _id: string;
  name: string;
  image: string;
  totalEvents: number;
}
const CommunityChampions = async () => {
  const res = await fetch(`http://localhost:5000/community-champions`);
  const data = await res.json();
  console.log(data);
  return (
    <section className="bg-[#f5f0ea] px-4 py-14 text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Meet Our Community{" "}
            <span className="inline-block bg-[#1E2A56] px-2 text-[#f5f0ea] dark:bg-[#f5f0ea] dark:text-[#171923]">
              Champions.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#1E2A56]/80 dark:text-[#f5f0ea]/80">
            These people created the most events and brought our communities
            together. Thank you for leading the way.
          </p>
        </div>

        {data.length === 0 && (
          <p className="mt-10">
            No champions yet. Create an event to be the first!
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {data.map((d: IChampionItem, index: number) => (
            <div
              key={index}
              className={`flex flex-col border border-[#1E2A56] p-6 dark:border-[#f5f0ea]/30 ${
                index === 0
                  ? "bg-[#1E2A56] text-[#f5f0ea] dark:bg-[#f5f0ea] dark:text-[#171923]"
                  : "bg-white text-[#1E2A56] dark:bg-[#222630] dark:text-[#f5f0ea]"
              }`}
            >
              <div className="flex items-start justify-between">
                {d.image ? (
                  <Image
                    src={d.image}
                    alt={d.name}
                    width={112}
                    height={112}
                    className="h-24 w-24 rounded-full border-2 border-current object-cover"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-current text-3xl font-bold">
                    {d.name?.[0]}
                  </div>
                )}

                <p className="text-5xl font-bold opacity-30">#{index + 1}</p>
              </div>

              <h3 className="mt-5 text-xl font-bold sm:text-2xl">{d.name}</h3>

              <div className="my-5 h-px bg-current opacity-20" />

              <p className="text-4xl font-bold">{d.totalEvents}</p>
              <p className="text-sm opacity-80">Events Created</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityChampions;
