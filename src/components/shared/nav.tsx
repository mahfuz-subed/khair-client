"use client";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Nav = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleLogout = () => {
    authClient.signOut();
  };
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
              <Link href="/">KHAIR</Link>
            </h2>
          </div>
          <div className="text-[12px] md:text-base">
            <div className="text-[12px] md:text-base">
              <Link
                href="/upcoming-events"
                className="text-[#1E2A56] font-medium transition-all duration-300 hover:font-bold hover:underline hover:underline-offset-4"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
        <div>
          {user ? (
            <div className="flex justify-between items-center gap-2">
              <Popover>
                <PopoverTrigger
                  render={
                    <Button className="group flex items-center  bg-transparent px-1 py-5 text-[#1E2A56] hover:shadow-sm hover:bg-transparent">
                      <div className="flex flex-col items-center mt-4">
                        <Avatar>
                          <AvatarImage
                            src={user.image as string}
                            alt="user image"
                          />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                          <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                        </Avatar>

                        <p className="opacity-0 group-hover:opacity-100">
                          {user.name}
                        </p>
                      </div>

                      <ChevronDown
                        size={18}
                        className=" transition-transform duration-300 group-hover:translate-y-0.5"
                      />
                    </Button>
                  }
                />

                <PopoverContent className="w-64 rounded-xl border border-[#1E2A56]/15 bg-[#f5f0ea] p-3 shadow-lg">
                  <div className="mb-3 border-b border-[#1E2A56]/15 px-3 pb-3">
                    <p className="font-semibold text-[#1E2A56]">{user.name}</p>
                    <p className="text-xs text-[#1E2A56]/60">
                      Welcome to Khair
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <Link
                      href="#"
                      className="rounded-lg px-3 py-2 text-sm font-medium text-[#1E2A56] transition-colors duration-200 hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                    >
                      Create event
                    </Link>

                    <Link
                      href="#"
                      className="rounded-lg px-3 py-2 text-sm font-medium text-[#1E2A56] transition-colors duration-200 hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                    >
                      Manage events
                    </Link>

                    <Link
                      href="#"
                      className="rounded-lg px-3 py-2 text-sm font-medium text-[#1E2A56] transition-colors duration-200 hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                    >
                      Joined events
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>

              <Link
                onClick={handleLogout}
                href="/sign-in"
                className="inline-block bg-[#1E2A56] text-[#f5f0ea] py-1 px-4 rounded-lg transition duration-300 hover:bg-[#f5f0ea] hover:text-[#1E2A56] hover:scale-105 hover:shadow-lg"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div>
              <Link
                href="/sign-in"
                className="inline-block bg-[#1E2A56] text-[#f5f0ea] py-1 px-4 rounded-lg transition duration-300 hover:bg-[#f5f0ea] hover:text-[#1E2A56] hover:scale-105 hover:shadow-lg"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
