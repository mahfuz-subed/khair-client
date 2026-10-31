"use client";

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
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export function LoginForm({}: React.ComponentProps<"div">) {
  const router = useRouter();
  const handleLogin = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const result = await authClient.signIn.email({
      ...userData,
    });
    const { data, error } = result;

    if (data) {
      toast.success("Your registration was successful.");
      router.push("/");
    }
    if (error) {
      toast.error("Invalid email or password.");
    }
  };
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="flex flex-col gap-6">
      <Card className="border-[#1E2A56] shadow-lg bg-[#f5f0ea] text-[#1E2A56]">
        <CardHeader className="text-center space-y-2 text-[#1E2A56]">
          <CardTitle className="text-2xl font-bold text-[#1E2A56]">
            Welcome back!
          </CardTitle>

          <CardDescription className="text-[#1E2A56]">
            Sign in to continue making a difference with Khair.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-[#1E2A56]">
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <Field className="text-[#1E2A56]">
                <FieldLabel htmlFor="email" className="text-[#1E2A56]">
                  Email
                </FieldLabel>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border-[#1E2A56] bg-[#f5f0ea] text-[#1E2A56] placeholder:text-[#1E2A56]/60 focus-visible:ring-[#1E2A56]"
                />
              </Field>

              <Field className="text-[#1E2A56]">
                <FieldLabel htmlFor="password" className="text-[#1E2A56]">
                  Password
                </FieldLabel>

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="border-[#1E2A56] bg-[#f5f0ea] text-[#1E2A56] placeholder:text-[#1E2A56]/60 focus-visible:ring-[#1E2A56]"
                />
              </Field>

              {/* Keep your existing Login button and Google button here */}

              <Field>
                <Button
                  type="submit"
                  className="w-full bg-[#1E2A56] text-[#f5f0ea] transition duration-300 hover:bg-[#1E2A56]/90 hover:scale-[1.02]"
                >
                  Login
                </Button>

                <Button
                  onClick={handleGoogleSignIn}
                  variant="outline"
                  type="button"
                  className="w-full border-[#1E2A56] text-[#1E2A56] transition duration-300 hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                >
                  Login with Google
                </Button>
              </Field>

              <FieldDescription className="text-center text-[#1E2A56]">
                Don&apos;t have an account?{" "}
                <a
                  href="/sign-up"
                  className="font-semibold text-[#1E2A56] underline underline-offset-4 hover:opacity-70"
                >
                  Sign up
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
