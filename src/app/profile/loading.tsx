export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f5f0ea] px-4 py-12 text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea] sm:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 h-4 w-32 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

          <div className="mx-auto h-10 w-64 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

          <div className="mx-auto mt-4 h-4 max-w-md animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
          <div className="mx-auto mt-2 h-4 max-w-sm animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
        </div>

        <div className="border border-[#1E2A56]/20 bg-white p-6 shadow-sm dark:border-[#f5f0ea]/20 dark:bg-[#222630] sm:p-9">
          <div className="mb-7 flex items-center gap-4 border-b border-[#1E2A56]/15 pb-6 dark:border-[#f5f0ea]/15">
            <div className="h-14 w-14 shrink-0 animate-pulse rounded-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

            <div className="flex-1">
              <div className="h-5 w-40 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <div className="mt-2 h-4 w-32 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-3 h-4 w-24 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <div className="h-11 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            </div>

            <div>
              <div className="mb-3 h-4 w-36 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <div className="h-11 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <div className="mt-2 h-3 w-3/4 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            </div>

            <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <div className="h-11 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10 sm:w-28" />
              <div className="h-11 w-full animate-pulse bg-[#1E2A56]/15 dark:bg-[#f5f0ea]/15 sm:w-36" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 h-3 w-64 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
      </div>
    </main>
  );
}
