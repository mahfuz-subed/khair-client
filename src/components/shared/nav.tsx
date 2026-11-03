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
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname } from "next/navigation";
import ThemeButton from "../button/themeButton";

const navLinks = [
  { label: "Upcoming Events", href: "/upcoming-events" },
  { label: "Past Events", href: "/past-events" },
];

const Nav = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = () => {
    authClient.signOut();
  };
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-[#1E2A56] bg-[#f5f0ea] dark:border-[#f5f0ea]/20 dark:bg-[#171923]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/mainlogo.png"
              alt="khair logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-[#1E2A56] dark:text-[#f5f0ea] md:text-2xl">
              KHAIR
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 font-semibold text-[#1E2A56] dark:text-[#f5f0ea] ${
                  pathname === link.href
                    ? "border-[#1E2A56] dark:border-[#f5f0ea]"
                    : "border-transparent hover:border-[#1E2A56]/50 dark:hover:border-[#f5f0ea]/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <ThemeButton />
        </div>

        <div>
          {user ? (
            <div className="flex justify-between items-center gap-2">
              <Popover>
                <PopoverTrigger
                  render={
                    <Button className="group py-5 rounded-none flex items-center gap-1 bg-transparent px-1 border border-[#f5f0ea]/30 text-[#1E2A56] hover:bg-transparent dark:text-[#f5f0ea] dark:hover:bg-transparent">
                      <Avatar>
                        <AvatarImage
                          src={user.image as string}
                          alt="user image"
                        />
                        <AvatarFallback>{user.name?.[0]}</AvatarFallback>
                        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                      </Avatar>
                      <span className="opacity-0 group-hover:opacity-90">
                        {user.name}
                      </span>
                      <ChevronDown size={18} />
                    </Button>
                  }
                />

                <PopoverContent className="w-64 rounded-none bg-[#f5f0ea] p-3 shadow-none dark:border-[#f5f0ea]/30 dark:bg-[#222630]">
                  <div className="mb-3 border-b border-[#1E2A56]/20 px-3 pb-3 dark:border-[#f5f0ea]/20">
                    <p className="font-semibold text-[#1E2A56] dark:text-[#f5f0ea]">
                      {user.name}
                    </p>
                    <p className="text-xs text-[#1E2A56]/70 dark:text-[#f5f0ea]/70">
                      Welcome to Khair
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <Link
                      href="/create-event"
                      className="px-3 py-2 text-sm font-medium text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea] dark:text-[#f5f0ea] dark:hover:bg-[#f5f0ea] dark:hover:text-[#171923]"
                    >
                      Create event
                    </Link>

                    <Link
                      href="/manage-events"
                      className="px-3 py-2 text-sm font-medium text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea] dark:text-[#f5f0ea] dark:hover:bg-[#f5f0ea] dark:hover:text-[#171923]"
                    >
                      Manage events
                    </Link>

                    <Link
                      href="/joined-events"
                      className="px-3 py-2 text-sm font-medium text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea] dark:text-[#f5f0ea] dark:hover:bg-[#f5f0ea] dark:hover:text-[#171923]"
                    >
                      Joined events
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
              <div className="my-2 border py-2 px-2 border-[#1E2A56]/20  dark:border-[#f5f0ea]/20">
                <Link
                  onClick={handleLogout}
                  href="/sign-in"
                  className="px-3 py-2 text-sm font-semibold text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea] dark:text-[#f5f0ea] dark:hover:bg-[#f5f0ea] dark:hover:text-[#171923]"
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="inline-block bg-[#1E2A56] px-5 py-2 text-sm font-semibold text-[#f5f0ea] hover:bg-[#16204a] dark:border dark:border-[#f5f0ea]/30 dark:bg-[#f5f0ea] dark:text-[#171923] dark:hover:bg-[#ded8d0]"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <div className="border-t border-[#1E2A56]/20 dark:border-[#f5f0ea]/20 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b-2 pb-1 text-sm font-semibold text-[#1E2A56] dark:text-[#f5f0ea] ${
                pathname === link.href
                  ? "border-[#1E2A56] dark:border-[#f5f0ea]"
                  : "border-transparent hover:border-[#1E2A56]/50 dark:hover:border-[#f5f0ea]/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Nav;
