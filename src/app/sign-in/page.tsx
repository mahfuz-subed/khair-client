import { LoginForm } from "@/components/auth-forms/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-[#f5f0ea] px-4 py-12 text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea] sm:px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1E2A56]/60 dark:text-[#f5f0ea]/60">
            Welcome Back
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sign in to{" "}
            <span className="bg-[#1E2A56] px-2 text-[#f5f0ea] dark:bg-[#f5f0ea] dark:text-[#1E2A56]">
              Khair
            </span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[#1E2A56]/70 dark:text-[#f5f0ea]/70">
            Welcome back! Sign in to continue spreading goodness.
          </p>
        </div>

        <div className="border border-[#1E2A56]/20 bg-white p-6 shadow-sm dark:border-[#f5f0ea]/20 dark:bg-[#222630] sm:p-9">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-[#1E2A56]/50 dark:text-[#f5f0ea]/50">
          Goodness Begins When We Come Together.
        </p>
      </div>
    </main>
  );
}