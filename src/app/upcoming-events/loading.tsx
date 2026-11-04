export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f5f0ea] px-4 py-12 text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-[#1E2A56]/20 pb-8 dark:border-[#f5f0ea]/20">
          <div className="mb-3 h-4 w-48 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1">
              <div className="h-10 w-64 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

              <div className="mt-4 h-4 max-w-xl animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <div className="mt-2 h-4 max-w-md animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            </div>

            <div className="h-12 w-40 animate-pulse bg-[#1E2A56]/15 dark:bg-[#f5f0ea]/15" />
          </div>
        </div>

        <div className="mb-6 h-12 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

        <div className="mb-10 flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="h-10 w-28 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col border border-[#1E2A56]/20 bg-[#f5f0ea] p-4 dark:border-[#f5f0ea]/20 dark:bg-[#222630] sm:p-5"
            >
              <div className="h-48 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

              <div className="mt-4 h-8 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

              <div className="mt-5 h-7 w-4/5 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

              <div className="mt-4 h-4 w-2/3 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <div className="mt-2 h-4 w-1/2 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

              <div className="mt-5 h-4 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <div className="mt-2 h-4 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <div className="mt-2 h-4 w-4/5 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

              <div className="mt-auto pt-8">
                <div className="h-12 w-36 animate-pulse bg-[#1E2A56]/15 dark:bg-[#f5f0ea]/15" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
