"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  console.log(session?.user);
  const name = session?.user?.name;
  const image = session?.user?.image;

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const resData = await authClient.updateUser({
      name: userData.name as string,
      image: userData.image as string,
    });
    if (resData?.data?.status) {
      toast.success("User information updated successfully.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f0ea] px-4 py-12 text-[#1E2A56] dark:bg-[#171923] dark:text-[#f5f0ea] sm:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1E2A56]/60 dark:text-[#f5f0ea]/60">
            Your Account
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Profile{" "}
            <span className="bg-[#1E2A56] px-2 text-[#f5f0ea] dark:bg-[#f5f0ea] dark:text-[#1E2A56]">
              Settings
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#1E2A56]/70 dark:text-[#f5f0ea]/70 sm:text-base">
            Keep your personal information up to date and let the community know
            a little more about you.
          </p>
        </div>

        <div className="border border-[#1E2A56]/20 bg-white p-6 shadow-sm dark:border-[#f5f0ea]/20 dark:bg-[#222630] sm:p-9">
          <div className="mb-7 flex items-center gap-4 border-b border-[#1E2A56]/15 pb-6 dark:border-[#f5f0ea]/15">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E2A56]/20 bg-[#f5f0ea] text-xl font-bold text-[#1E2A56] dark:border-[#f5f0ea]/30 dark:bg-[#171923] dark:text-[#f5f0ea]">
              {image ? (
                <Image
                  src={image}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                name?.charAt(0).toUpperCase() || "U"
              )}
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-lg font-semibold">
                {name || "Your Profile"}
              </h2>
              <p className="text-sm text-[#1E2A56]/60 dark:text-[#f5f0ea]/60">
                Personal information
              </p>
            </div>
          </div>

          <form onSubmit={handleUpdate}>
            <FieldGroup className="gap-6">
              <Field>
                <FieldLabel
                  htmlFor="fieldgroup-name"
                  className="font-semibold text-[#1E2A56] dark:text-[#f5f0ea]"
                >
                  Full Name
                </FieldLabel>
                <Input
                  id="fieldgroup-name"
                  name="name"
                  defaultValue={name}
                  className="h-11 border-[#1E2A56]/25 bg-[#f5f0ea]/50 text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56] dark:border-[#f5f0ea]/25 dark:bg-[#171923] dark:text-[#f5f0ea] dark:placeholder:text-[#f5f0ea]/40 dark:focus-visible:ring-[#f5f0ea]"
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="fieldgroup-email"
                  className="font-semibold text-[#1E2A56] dark:text-[#f5f0ea]"
                >
                  Profile Image URL
                </FieldLabel>
                <Input
                  id="fieldgroup-email"
                  name="image"
                  type="url"
                  defaultValue={image ?? " "}
                  placeholder="https://example.com/profile.jpg"
                  className="h-11 border-[#1E2A56]/25 bg-[#f5f0ea]/50 text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56] dark:border-[#f5f0ea]/25 dark:bg-[#171923] dark:text-[#f5f0ea] dark:placeholder:text-[#f5f0ea]/40 dark:focus-visible:ring-[#f5f0ea]"
                />
                <p className="text-xs text-[#1E2A56]/55 dark:text-[#f5f0ea]/55">
                  Add a direct image URL to update your profile picture.
                </p>
              </Field>

              <Field
                orientation="horizontal"
                className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"
              >
                <Button
                  type="reset"
                  variant="outline"
                  className="h-11 border-[#1E2A56] bg-transparent px-7 text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea] dark:border-[#f5f0ea] dark:text-[#f5f0ea] dark:hover:bg-[#f5f0ea] dark:hover:text-[#1E2A56]"
                >
                  Reset
                </Button>

                <Button
                  type="submit"
                  className="h-11 bg-[#1E2A56] px-8 text-[#f5f0ea] hover:bg-[#1E2A56]/85 dark:bg-[#f5f0ea] dark:text-[#1E2A56] dark:hover:bg-[#f5f0ea]/85"
                >
                  Save Changes
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-[#1E2A56]/50 dark:text-[#f5f0ea]/50">
          Your profile helps build a more connected Khair community.
        </p>
      </div>
    </main>
  );
};

export default ProfilePage;
