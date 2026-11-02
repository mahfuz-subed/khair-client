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
    <header className="sticky top-0 z-50 border-b border-[#1E2A56] bg-[#f5f0ea]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/mainlogo.png"
              alt="khair logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-[#1E2A56] md:text-2xl">
              KHAIR
            </span>
          </Link>

          <Link
            href="/upcoming-events"
            className="text-sm font-medium text-[#1E2A56] underline-offset-4 hover:underline md:text-base"
          >
            Upcoming Events
          </Link>
        </div>

        <div>
          {user ? (
            <Popover>
              <PopoverTrigger
                render={
                  <Button className="flex items-center gap-1 bg-transparent px-1 text-[#1E2A56] hover:bg-transparent">
                    <Avatar>
                      <AvatarImage
                        src={user.image as string}
                        alt="user image"
                      />
                      <AvatarFallback>{user.name?.[0]}</AvatarFallback>
                      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                    </Avatar>

                    <ChevronDown size={18} />
                  </Button>
                }
              />

              <PopoverContent className="w-64 rounded-none border border-[#1E2A56] bg-[#f5f0ea] p-3 shadow-none">
                <div className="mb-3 border-b border-[#1E2A56]/20 px-3 pb-3">
                  <p className="font-semibold text-[#1E2A56]">{user.name}</p>
                  <p className="text-xs text-[#1E2A56]/70">Welcome to Khair</p>
                </div>

                <div className="flex flex-col">
                  <Link
                    href="/create-event"
                    className="px-3 py-2 text-sm font-medium text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                  >
                    Create event
                  </Link>

                  <Link
                    href="/manage-events"
                    className="px-3 py-2 text-sm font-medium text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                  >
                    Manage events
                  </Link>

                  <Link
                    href="/joined-events"
                    className="px-3 py-2 text-sm font-medium text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                  >
                    Joined events
                  </Link>

                  <div className="my-2 border-t border-[#1E2A56]/20" />

                  <Link
                    onClick={handleLogout}
                    href="/sign-in"
                    className="px-3 py-2 text-sm font-semibold text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                  >
                    Logout
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Link
              href="/sign-in"
              className="inline-block bg-[#1E2A56] px-5 py-2 text-sm font-semibold text-[#f5f0ea] hover:bg-[#16204a]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
