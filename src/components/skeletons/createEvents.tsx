import { Skeleton } from "@/components/ui/skeleton";

export default function CreateEventSkeleton() {
  return (
    <div className="min-h-screen bg-[#f5f0ea] px-4 py-12 text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea] sm:px-8">
      <div className="mx-auto w-full max-w-2xl">
        {/* Page heading */}
        <div className="mb-8 border-b border-[#1E2A56]/20 pb-6 dark:border-[#f5f0ea]/20">
          <Skeleton className="mb-3 h-4 w-56 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
          <Skeleton className="h-10 w-64 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
          <Skeleton className="mt-3 h-4 w-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
          <Skeleton className="mt-2 h-4 w-4/5 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
        </div>

        {/* Form */}
        <div className="border border-[#1E2A56] bg-[#f5f0ea] p-5 dark:border-[#f5f0ea]/30 dark:bg-[#222630] sm:p-8">
          <Skeleton className="mb-3 h-7 w-48 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
          <Skeleton className="mb-6 h-4 w-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

          {/* Form fields */}
          <div className="space-y-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-4 w-32 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
                <Skeleton className="h-10 w-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
              </div>
            ))}
          </div>

          <div className="my-7 border-t border-[#1E2A56]/20 dark:border-[#f5f0ea]/20" />

          {/* Description section */}
          <Skeleton className="mb-3 h-7 w-40 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
          <Skeleton className="mb-6 h-4 w-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

          <Skeleton className="mb-2 h-4 w-36 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
          <Skeleton className="h-32 w-full bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <Skeleton className="h-11 w-32 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
            <Skeleton className="h-11 w-28 bg-[#1E2A56]/10 dark:bg-[#f5f0ea]/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
