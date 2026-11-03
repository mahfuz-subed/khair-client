import { Skeleton } from "@/components/ui/skeleton";

export default function JoinedEventsSkeleton() {
  return (
    <div className="min-h-screen bg-[#f5f0ea] px-4 py-12 text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea] sm:px-8">
      <div className="mx-auto mb-10 w-[90%] text-center">
        <Skeleton className="mx-auto h-10 w-64 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10 sm:h-11" />

        <Skeleton className="mx-auto mt-3 h-4 w-full max-w-2xl bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
        <Skeleton className="mx-auto mt-2 h-4 w-4/5 max-w-xl bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
      </div>

      <div className="mx-auto grid w-[90%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col border border-[#1E2A56] bg-[#f5f0ea] p-3 dark:border-[#f5f0ea]/30 dark:bg-[#222630]"
          >
            {/* Event image */}
            <Skeleton className="h-40 w-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

            {/* Event title */}
            <Skeleton className="mt-4 h-6 w-3/4 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

            {/* Date and location */}
            <div className="mt-3 space-y-2">
              <Skeleton className="h-4 w-36 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <Skeleton className="h-4 w-28 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            </div>

            {/* Description */}
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <Skeleton className="h-4 w-4/5 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            </div>

            {/* View details button */}
            <Skeleton className="mt-5 h-10 w-32 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
