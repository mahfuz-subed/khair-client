import { Skeleton } from "@/components/ui/skeleton";

export default function EventDetailsSkeleton() {
  return (
    <section className="bg-[#f5f0ea] px-6 py-14 dark:bg-[#171923] sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Main event content */}
          <div className="lg:col-span-2">
            <Skeleton className="h-56 w-full border border-[#1E2A56] bg-[#1E2A56]/10 dark:border-[#f5f0ea]/30 dark:bg-[#f5f0ea]/10 sm:h-96" />

            <Skeleton className="mt-6 h-10 w-3/4 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10 sm:h-14" />

            <div className="mt-6 space-y-3">
              <Skeleton className="h-5 w-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <Skeleton className="h-5 w-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <Skeleton className="h-5 w-4/5 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              <Skeleton className="h-5 w-2/3 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            </div>
          </div>

          {/* Event information card */}
          <div className="border border-[#1E2A56] bg-[#1E2A56] p-6 dark:border-[#f5f0ea]/30 dark:bg-[#222630]">
            <Skeleton className="h-7 w-40 bg-[#f5f0ea]/20" />

            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="mt-5 space-y-2">
                <Skeleton className="h-4 w-24 bg-[#f5f0ea]/20" />
                <Skeleton className="h-5 w-40 bg-[#f5f0ea]/20" />
              </div>
            ))}

            <Skeleton className="mt-8 h-11 w-full bg-[#f5f0ea]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
