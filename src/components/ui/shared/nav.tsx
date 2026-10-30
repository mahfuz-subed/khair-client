import { Button } from "@base-ui/react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto flex justify-between items-center my-3">
        <div className="flex justify-between items-center w-[50%]">
          <div className="flex justify-center items-center">
            <Image
              src="/mainlogo.png"
              alt="khair logo"
              width={50}
              height={50}
            ></Image>
            <h2 className="font-bold sm:text-md md:text-2xl text-[#1E2A56]">
              KHAIR
            </h2>
          </div>
          <div className="text-[12px] md:text-base">
            <div className="text-[12px] md:text-base">
              <Link
                href="/upcoming-events"
                className="font-medium transition-all duration-300 hover:font-bold hover:underline hover:underline-offset-4"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link
            href="/sign-in"
            className="inline-block bg-[#1E2A56] text-[#f5f0ea] py-1 px-4 rounded-lg transition duration-300 hover:bg-[#f5f0ea] hover:text-[#1E2A56] hover:scale-105 hover:shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
