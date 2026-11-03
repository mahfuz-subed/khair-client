import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="border-t-2 border-[#1E2A56] bg-[#f5f0ea] text-[#1E2A56] dark:border-[#f5f0ea]/30 dark:bg-[#171923] dark:text-[#f5f0ea]">
      <div className="mx-auto max-w-6xl border-x border-t border-[#1E2A56]/20 px-6 pt-14 pb-8 dark:border-[#f5f0ea]/15 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-[#1E2A56] p-1 dark:bg-transparent">
                <Image
                  src="/mainlogo.png"
                  alt="Khair logo"
                  width={42}
                  height={42}
                  className="dark:invert"
                />
              </div>

              <span className="text-2xl font-bold tracking-wide">KHAIR</span>
            </Link>

            <p className="mt-6 max-w-sm text-base leading-relaxed opacity-80">
              Bringing people together through community events, from iftar
              drives to Eid campaigns. Every small act of kindness matters.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center bg-[#1E2A56] text-[#f5f0ea] transition-colors hover:bg-[#293b72] dark:bg-[#f5f0ea] dark:text-[#171923] dark:hover:bg-[#ded8d0]"
              >
                <FaFacebookF size={19} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center bg-[#1E2A56] text-[#f5f0ea] transition-colors hover:bg-[#293b72] dark:bg-[#f5f0ea] dark:text-[#171923] dark:hover:bg-[#ded8d0]"
              >
                <FaInstagram size={19} />
              </Link>

              <Link
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center bg-[#1E2A56] text-[#f5f0ea] transition-colors hover:bg-[#293b72] dark:bg-[#f5f0ea] dark:text-[#171923] dark:hover:bg-[#ded8d0]"
              >
                <FaYoutube size={19} />
              </Link>
            </div>
          </div>

          <div className="md:border-l md:border-[#1E2A56]/20 md:pl-10 dark:md:border-[#f5f0ea]/20">
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "Upcoming Events", href: "/upcoming-events" },
                { label: "Create an Event", href: "/create-event" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm opacity-80 transition-all hover:opacity-100"
                >
                  {link.label}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-48 flex-col justify-between overflow-hidden md:border-l md:border-[#1E2A56]/20 md:pl-10 dark:md:border-[#f5f0ea]/20">
            <div>
              <p className="max-w-sm text-3xl font-semibold leading-snug sm:text-4xl">
                Together for a kinder
                <span className="text-[#1E2A56]/60 dark:text-[#f5f0ea]/60">
                  Bangladesh.
                </span>
              </p>

              <p className="mt-5 text-sm leading-relaxed opacity-70">
                Goodness begins when we come together.
              </p>
            </div>

            <p className="mt-8 text-sm font-semibold tracking-widest opacity-60">
              SPREAD KINDNESS. SHARE KHAIR.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1E2A56]/20 dark:border-[#f5f0ea]/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Khair. All rights reserved.</p>

          <p>Made with care for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
