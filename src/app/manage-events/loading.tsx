export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f5f0ea] pb-12 dark:bg-[#171923]">
      <div className="mx-auto mt-12 w-[90%] text-center">
        <div className="mx-auto h-10 w-64 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
        <div className="mx-auto mt-4 h-4 max-w-2xl animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
        <div className="mx-auto mt-2 h-4 max-w-xl animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
      </div>

      <div className="mx-auto mt-10 grid w-[90%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex flex-col border border-[#1E2A56]/20 bg-[#f5f0ea] p-3 dark:border-[#f5f0ea]/20 dark:bg-[#222630]"
          >
            <div className="h-40 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

            <div className="mt-3 h-7 w-3/4 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

            <div className="mt-4 h-5 w-2/3 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            <div className="mt-2 h-5 w-1/2 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

            <div className="mt-4 h-4 w-full animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            <div className="mt-2 h-4 w-5/6 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

            <div className="mt-5 flex gap-2">
              <div className="h-10 w-28 animate-pulse bg-[#1E2A56]/15 dark:bg-[#f5f0ea]/15" />
              <div className="h-10 w-16 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <div className="h-10 w-16 animate-pulse bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
