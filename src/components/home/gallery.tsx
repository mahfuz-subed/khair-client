import React from "react";
import Image from "next/image";
import Link from "next/link";
const Gallery = async () => {
  const photos = [
    {
      image: "/gallery/iftar2.jpg",
      alt: "People sharing iftar together in Old Dhaka",
      caption: "Community Iftar",
      place: "Old Dhaka",
    },
    {
      image: "/gallery/foodPack.jpg",
      alt: "Volunteers packing Ramadan food packages",
      caption: "Food Packages Ready",
      place: "Sylhet",
    },
    {
      image: "/gallery/Mosque.jpg",
      alt: "Volunteers cleaning a mosque before Ramadan",
      caption: "Mosque Cleaning Day",
      place: "Chattogram",
    },
    {
      image: "/gallery/eid.jpg",
      alt: "Children holding new Eid clothes",
      caption: "Eid Clothes for Children",
      place: "Dhaka",
    },
    {
      image: "/gallery/warmth.jpg",
      alt: "Volunteers serving warm meals in the evening",
      caption: "Warm Meals for Everyone",
      place: "Khulna",
    },
    {
      image: "/gallery/quran.jpg",
      alt: "Copies of the Quran being given to families",
      caption: "Quran Distribution",
      place: "Rajshahi",
    },
  ];
  return (
    <section className="bg-[#1E2A56] px-6 py-14 dark:bg-[#222630] sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-[#f5f0ea] sm:text-5xl">
            Ramadan Moments from Across{" "}
            <span className="inline-block bg-[#f5f0ea] px-2 text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea]">
              Bangladesh.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#f5f0ea]/80">
            Iftar tables, food drives and Eid smiles. A look at the small acts
            of kindness that bring our communities together.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.image}
              className="bg-[#f5f0ea] text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea]"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                width={150}
                height={150}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-bold">{photo.caption}</h3>
                <p className="text-sm opacity-80">{photo.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
