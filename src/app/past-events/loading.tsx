export default function Loading() {
  return (
    <section className="min-h-screen bg-[#1E2A56] px-6 py-14 dark:bg-[#171923] sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="h-12 w-3/4 animate-pulse bg-[#f5f0ea]/15 sm:h-14" />

          <div className="mt-6 h-5 w-full animate-pulse bg-[#f5f0ea]/15" />
          <div className="mt-2 h-5 w-4/5 animate-pulse bg-[#f5f0ea]/15" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col bg-[#f5f0ea] dark:bg-[#222630]"
            >
              <div className="h-48 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

              <div className="p-4 sm:p-5">
                <div className="h-6 w-24 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

                <div className="mt-4 h-6 w-4/5 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

                <div className="mt-4 h-4 w-2/3 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
                <div className="mt-2 h-4 w-1/2 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

                <div className="mt-3 h-4 w-3/4 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

                <div className="mt-5 h-4 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
                <div className="mt-2 h-4 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
                <div className="mt-2 h-4 w-4/5 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
