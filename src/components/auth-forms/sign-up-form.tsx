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
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const handleSignUp = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get("password") as string;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include a lowercase letter.");
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include an uppercase letter.");
    }
    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...userData,
    });
    if (data) {
      toast.success("Your registration was successful.");
      router.push("/");
    }
    if (error) {
      toast.error(
        "Unable to create your account. Please check your information and try again.",
      );
    }
  };
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card {...props} className="border-[#1E2A56] shadow-lg">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold text-[#1E2A56]">
          Create an account
        </CardTitle>
        <CardDescription className="text-[#1E2A56]">
          Join Khair and be part of something meaningful.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSignUp}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name" className="text-[#1E2A56]">
                Full Name
              </FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="border-[#1E2A56] text-[#1E2A56] placeholder:text-[#1E2A56]/50"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email" className="text-[#1E2A56]">
                Email
              </FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-[#1E2A56] text-[#1E2A56] placeholder:text-[#1E2A56]/50"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="image" className="text-[#1E2A56]">
                Profile Image URL
              </FieldLabel>
              <Input
                id="image"
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                required
                className="border-[#1E2A56] text-[#1E2A56] placeholder:text-[#1E2A56]/50 focus-visible:ring-[#1E2A56]"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="password" className="text-[#1E2A56]">
                Password
              </FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                minLength={6}
                className="border-[#1E2A56] text-[#1E2A56] placeholder:text-[#1E2A56]/50 focus-visible:ring-[#1E2A56]"
              />
              <FieldDescription className="text-[#1E2A56]/75">
                Must be at least 6 characters, with one uppercase and one
                lowercase letter.
              </FieldDescription>
            </Field>

            <Field>
              <Button
                type="submit"
                className="w-full bg-[#1E2A56] text-[#f5f0ea] transition duration-300 hover:bg-[#1E2A56]/90 hover:scale-[1.02]"
              >
                Create Account
              </Button>

              <Field>
                <FieldSeparator className="text-[#1E2A56] my-1">
                  Or
                </FieldSeparator>

                <Button
                  onClick={handleGoogleSignIn}
                  variant="outline"
                  type="button"
                  className="w-full border-[#1E2A56] text-[#1E2A56] transition duration-300 hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                >
                  Sign up with Google
                </Button>
              </Field>

              <FieldDescription className="text-center text-[#1E2A56]">
                Already have an account?
                <Link
                  href="/sign-in"
                  className="ml-1 font-semibold text-[#1E2A56] underline underline-offset-4 hover:opacity-70"
                >
                  Sign in
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
