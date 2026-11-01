import React from "react";
import Image from "next/image";
const Features = () => {
  const features = [
    {
      title: "Discover Meaningful Events",
      description:
        "Explore community events around Bangladesh, from food distribution to Eid clothing campaigns.",
      image: "/feature/meaningful.jpg",
      alt: "Volunteers handing out iftar packets",
      background: "bg-[#1E2A56]", // navy
      textColor: "text-[#f5f0ea]", // cream
      width: "lg:col-span-2", // takes 2 of 6 columns (3 cards per row)
    },
    {
      title: "Create Your Own Event",
      description:
        "Have an idea to help your community? Create an event, share your mission, and invite others to participate.",
      image: "/feature/create.jpg",
      alt: "A young organizer planning an event",
      background: "bg-white",
      textColor: "text-[#1E2A56]", // navy
      width: "lg:col-span-2",
    },
    {
      title: "Join as a Volunteer",
      description:
        "Find events that match your interests and become part of something meaningful.",
      image: "/feature/volunteer.jpg",
      alt: "Smiling volunteers packing donation boxes",
      background: "bg-[#1E2A56]",
      textColor: "text-[#f5f0ea]",
      width: "lg:col-span-2",
    },
    {
      title: "Bring Communities Together",
      description:
        "Connect with local youth clubs, volunteer groups, and people who share the same passion for helping others.",
      image: "/feature/community.jpg",
      alt: "Members of a youth club standing together",
      background: "bg-white",
      textColor: "text-[#1E2A56]",
      width: "lg:col-span-3",
    },
    {
      title: "Celebrate Every Good Deed",
      description:
        "Share completed events and their impact to inspire more people to get involved.",
      image: "/feature/iftar.jpg",
      alt: "Children smiling with their new Eid clothes",
      background: "bg-[#1E2A56]",
      textColor: "text-[#f5f0ea]",
      width: "lg:col-span-3",
    },
  ];
  return (
    <div>
      <section className="bg-[#f5f0ea] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-[#1E2A56] sm:text-5xl">
              Make This Ramadan Count
              <span className="inline-block bg-[#1E2A56] px-2 text-[#f5f0ea]">
                Together.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#1E2A56]/80">
              From iftar tables to Eid clothes drives, find a cause near you,
              start one of your own, and join the people across Bangladesh who
              turn good intentions into shared good deeds.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.background} ${feature.textColor} ${feature.width} border border-[#1E2A56] p-6`}
              >
                <h3 className="text-lg font-bold sm:text-xl lg:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {feature.description}
                </p>

                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={100}
                  height={100}
                  className="mt-4 h-40 w-full object-cover sm:mt-6 sm:h-56"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
