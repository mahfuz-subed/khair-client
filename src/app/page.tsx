import Banner from "@/components/home/banner";
import Features from "@/components/home/features";
import Gallery from "@/components/home/gallery";
import HomepageEvents from "@/components/home/homepageEvents";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <HomepageEvents />
      <Gallery />
    </div>
  );
}
