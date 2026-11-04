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
import { usePathname } from "next/navigation";
import ThemeButton from "../button/themeButton";

const navLinks = [
  { label: "Upcoming Events", href: "/upcoming-events" },
  { label: "Past Events", href: "/past-events" },
  { label: "Community Champions", href: "/community-champions" },
];

const Nav = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = () => {
    authClient.signOut();
  };
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-[#1E2A56]/20 bg-[#f5f0ea] dark:border-[#f5f0ea]/20 dark:bg-[#171923]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex shrink-0 flex-col items-start gap-0">
          <span className="text-2xl font-bold tracking-tight text-[#1E2A56] dark:text-[#f5f0ea] md:text-3xl">
            KHAIR
          </span>

          <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#1E2A56]/65 dark:text-[#f5f0ea]/65 sm:text-[9px]">
            Ramadan. Community. Goodness.
          </span>
        </Link>

        <div className="flex items-center gap-0 bg-[#1E2A56] p-1 dark:bg-[#222630]">
          <div className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-[#f5f0ea] after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-1.5 after:-translate-x-1/2 after:bg-[#f5f0ea] dark:text-[#f5f0ea]"
                    : "text-[#f5f0ea]/70 hover:text-[#f5f0ea]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center border-l border-[#f5f0ea]/20 px-3 text-[#f5f0ea] [&_button]:!text-[#f5f0ea] [&_svg]:!text-[#f5f0ea]">
            <ThemeButton />
          </div>

          {user ? (
            <div className="flex items-center gap-1">
              <Popover>
                <PopoverTrigger
                  render={
                    <Button className="group flex items-center gap-2 rounded-none border border-[#f5f0ea]/30 bg-[#f5f0ea] px-3 py-5 text-[#1E2A56] hover:bg-[#ded8d0] dark:border-[#f5f0ea]/30 dark:bg-[#f5f0ea] dark:text-[#1E2A56] dark:hover:bg-[#ded8d0]">
                      <Avatar>
                        <AvatarImage
                          src={user.image as string}
                          alt="user image"
                        />
                        <AvatarFallback>{user.name?.[0]}</AvatarFallback>
                        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                      </Avatar>

                      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold opacity-0 transition-all duration-300 group-hover:max-w-40 group-hover:opacity-100">
                        {user.name}
                      </span>

                      <ChevronDown size={18} />
                    </Button>
                  }
                />

                <PopoverContent className="w-64 rounded-none border border-[#1E2A56]/20 bg-[#f5f0ea] p-3 shadow-none dark:border-[#f5f0ea]/30 dark:bg-[#222630]">
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
                      href="/profile"
                      className="px-3 py-2 text-sm font-medium text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea] dark:text-[#f5f0ea] dark:hover:bg-[#f5f0ea] dark:hover:text-[#171923]"
                    >
                      Profile
                    </Link>
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
                    <Link
                      onClick={handleLogout}
                      href="/sign-in"
                      className="px-3 py-2 text-sm font-medium text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea] dark:text-[#f5f0ea] dark:hover:bg-[#f5f0ea] dark:hover:text-[#171923]"
                    >
                      Logout
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>

              <div className="border border-[#f5f0ea]/30 px-2 py-2.5">
                <Link
                  onClick={handleLogout}
                  href="/sign-in"
                  className="px-3 py-2 text-sm font-bold uppercase text-[#f5f0ea] transition-colors hover:bg-[#f5f0ea] hover:text-[#1E2A56]"
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="inline-block bg-[#f5f0ea] px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#1E2A56] transition-colors hover:bg-[#ded8d0]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <div className="border-t border-[#1E2A56]/20 dark:border-[#f5f0ea]/20 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-6 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`shrink-0 border-b-2 pb-1 text-sm font-semibold text-[#1E2A56] dark:text-[#f5f0ea] ${
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
