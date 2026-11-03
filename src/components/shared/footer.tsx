import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1E2A56] px-6 py-14 text-[#f5f0ea]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-[#f5f0ea] p-1">
                <Image
                  src="/mainlogo.png"
                  alt="khair logo"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-2xl font-bold">KHAIR</span>
            </div>

            <p className="mt-4 max-w-sm leading-relaxed text-[#f5f0ea]/80">
              Khair brings people across Bangladesh together through community
              events, from iftar drives to Eid campaigns.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Explore</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-[#f5f0ea]/80 underline-offset-4 hover:text-[#f5f0ea] hover:underline"
              >
                Home
              </Link>
              <Link
                href="/upcoming-events"
                className="text-[#f5f0ea]/80 underline-offset-4 hover:text-[#f5f0ea] hover:underline"
              >
                Upcoming Events
              </Link>
              <Link
                href="/create-event"
                className="text-[#f5f0ea]/80 underline-offset-4 hover:text-[#f5f0ea] hover:underline"
              >
                Create an Event
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Your Account</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/manage-events"
                className="text-[#f5f0ea]/80 underline-offset-4 hover:text-[#f5f0ea] hover:underline"
              >
                Manage Events
              </Link>
              <Link
                href="/joined-events"
                className="text-[#f5f0ea]/80 underline-offset-4 hover:text-[#f5f0ea] hover:underline"
              >
                Joined Events
              </Link>
              <Link
                href="/sign-in"
                className="text-[#f5f0ea]/80 underline-offset-4 hover:text-[#f5f0ea] hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#f5f0ea]/30 pt-6 text-sm text-[#f5f0ea]/70">
          <p>© {new Date().getFullYear()} Khair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
