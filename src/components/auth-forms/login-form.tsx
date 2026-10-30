import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const handleLogin = (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-[#1E2A56]/15 shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-[#1E2A56]">
            Welcome back!
          </CardTitle>
          <CardDescription>
            Sign in to continue making a difference with Khair.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border-[#1E2A56]/20 focus-visible:ring-[#1E2A56]"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="border-[#1E2A56]"
                />
              </Field>

              <Field>
                <Button
                  type="submit"
                  className="w-full bg-[#1E2A56] text-[#f5f0ea] transition duration-300 hover:bg-[#1E2A56]/90 hover:scale-[1.02]"
                >
                  Login
                </Button>

                <Field>
                  <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card my-1">
                    Or continue with
                  </FieldSeparator>

                  <Button
                    variant="outline"
                    type="button"
                    className="w-full border-[#1E2A56]/25 text-[#1E2A56] transition duration-300 hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-4"
                    >
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Login with Google
                  </Button>
                </Field>

                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <a
                    href="/sign-up"
                    className="font-semibold text-[#1E2A56] underline underline-offset-4 hover:opacity-70"
                  >
                    Sign up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
