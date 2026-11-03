const Newsletter = () => {
  return (
    <section className="bg-[#f5f0ea] px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="border border-[#1E2A56] bg-white p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1E2A56] sm:text-4xl">
                Get Ramadan Updates Straight to Your{" "}
                <span className="inline-block bg-[#1E2A56] px-2 text-[#f5f0ea]">
                  Inbox.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-[#1E2A56]/80">
                Be the first to know about new food drives, Eid campaigns and
                volunteer calls near you.
              </p>
            </div>

            <div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="h-12 w-full border border-[#1E2A56] bg-[#f5f0ea] px-4 text-[#1E2A56] placeholder:text-[#1E2A56]/60"
                />

                <button className="h-12 bg-[#1E2A56] px-8 font-semibold text-[#f5f0ea] hover:bg-[#16204a]">
                  Subscribe
                </button>
              </div>

              <p className="mt-3 text-sm text-[#1E2A56]/70">
                We only send updates about new events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
