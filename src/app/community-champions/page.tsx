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
  const topThree = data.slice(0, 3);
  const otherChampions = data.slice(3);
  console.log(otherChampions);
  return (
    <section className="bg-[#f5f0ea] px-4 py-14 text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1E2A56]/60 dark:text-[#f5f0ea]/60">
            The People Behind the Goodness
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Meet Our Community{" "}
            <span className="inline-block bg-[#1E2A56] px-2 text-[#f5f0ea] dark:bg-[#f5f0ea] dark:text-[#171923]">
              Champions.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1E2A56]/75 dark:text-[#f5f0ea]/75 sm:text-lg">
            Behind every meaningful event is someone who took the initiative. We
            celebrate the people bringing our communities together through
            kindness and action.
          </p>
        </div>

        {data.length === 0 && (
          <div className="mt-12 border border-[#1E2A56]/20 p-10 text-center dark:border-[#f5f0ea]/20">
            <h3 className="text-xl font-bold">The journey starts here.</h3>
            <p className="mt-3 text-sm opacity-70">
              No champions yet. Create an event and become one of the first!
            </p>
          </div>
        )}

        {topThree.length > 0 && (
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#1E2A56]/20 dark:bg-[#f5f0ea]/20" />
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Top Contributors
              </p>
              <div className="h-px flex-1 bg-[#1E2A56]/20 dark:bg-[#f5f0ea]/20" />
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 items-end gap-5 md:grid-cols-3">
              {topThree.map((d: IChampionItem, index: number) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center border p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                ${
                  index === 0
                    ? "order-1 border-[#c49a36] bg-[#1E2A56] text-[#f5f0ea] shadow-lg dark:bg-[#222630] md:order-2 md:py-12"
                    : index === 1
                      ? "order-2 border-[#A7A7A7] bg-white text-[#1E2A56] dark:bg-[#222630] dark:text-[#f5f0ea] md:order-1 md:py-9"
                      : "order-3 border-[#A66A45] bg-white text-[#1E2A56] dark:bg-[#222630] dark:text-[#f5f0ea] md:order-3 md:py-9"
                }`}
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white
                  ${
                    index === 0
                      ? "bg-[#c49a36]"
                      : index === 1
                        ? "bg-[#929292]"
                        : "bg-[#A66A45]"
                  }`}
                  >
                    {index + 1}
                  </div>

                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] opacity-70">
                    {index === 0
                      ? "Leading Champion"
                      : index === 1
                        ? "Second Champion"
                        : "Third Champion"}
                  </p>

                  <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border-4 border-current/20 p-1">
                    {d.image ? (
                      <Image
                        src={d.image}
                        alt={d.name}
                        width={112}
                        height={112}
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold">
                        {d.name?.[0]?.toUpperCase() || "?"}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold sm:text-2xl">{d.name}</h3>

                  <div className="my-6 h-px w-full bg-current opacity-20" />

                  <p className="text-4xl font-bold tabular-nums">
                    {d.totalEvents}
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider opacity-70">
                    {d.totalEvents === 1 ? "Event Created" : "Events Created"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {otherChampions.length > 0 && (
          <div className="mt-20">
            <div className="mb-8 border-b border-[#1E2A56]/20 pb-5 dark:border-[#f5f0ea]/20">
              <h3 className="text-2xl font-bold">More Community Champions</h3>
              <p className="mt-2 text-sm opacity-70">
                Every contribution deserves recognition.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherChampions.map((d: IChampionItem, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-5 border border-[#1E2A56]/20 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E2A56] hover:shadow-lg dark:border-[#f5f0ea]/20 dark:bg-[#222630] dark:hover:border-[#f5f0ea]/50"
                >
                  {d.image ? (
                    <Image
                      src={d.image}
                      alt={d.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-current text-xl font-bold">
                      {d.name?.[0]?.toUpperCase() || "?"}
                    </div>
                  )}

                  <div className="min-w-0">
                    <p className="truncate font-bold">{d.name}</p>
                    <p className="mt-1 text-sm opacity-70">
                      {d.totalEvents} {d.totalEvents === 1 ? "Event" : "Events"}{" "}
                      Created
                    </p>
                    <p className="mt-2 text-xs font-semibold opacity-50">
                      Rank #{index + 4}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunityChampions;
