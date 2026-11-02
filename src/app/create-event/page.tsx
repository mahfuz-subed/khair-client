"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const eventTypes = [
  { label: "Select Type", value: null },
  { label: "Cleanup", value: "Cleanup" },

  { label: "Donation", value: "Donation" },
  { label: "Food Distribution", value: "Food Distribution" },
  { label: "Clothes Distribution", value: "Clothes Distribution" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Education Support", value: "Education Support" },
  { label: "Islamic Programs", value: "Islamic Programs" },
  { label: "Community Gathering", value: "Community Gathering" },
];

const CreateEventsPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log("user from create", user?.email);
  const router = useRouter();
  const today = new Date().toLocaleDateString("en-CA");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const eventData = {
      ...data,
      createdBy: user?.email,
    };
    const res = await fetch(`http://localhost:5000/add-event`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(eventData),
      cache: "no-store",
    });
    console.log("event", eventData);
    const newEventData = await res.json();
    if (newEventData.acknowledged) {
      toast.success("Your event has been successfully created.");
      router.push("/upcoming-events");
    } else {
      toast.error("Submit the form correctly.");
    }

    console.log("result", newEventData);
  };
  return (
    <div>
      <div className="min-h-screen bg-[#f5f0ea] px-4 py-12 text-[#1E2A56] sm:px-8">
        <div className="mx-auto w-full max-w-2xl">
          <div className="mb-8 border-b border-[#1E2A56]/20 pb-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1E2A56]/70">
              Turn Good Intentions Into Action
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl">Create an Event</h1>

            <p className="mt-3 text-sm leading-relaxed text-[#1E2A56]/70 sm:text-base">
              Have an idea to help your community? Share it with others and
              bring people together to make a difference.
            </p>
          </div>

          <div className="border border-[#1E2A56] bg-[#f5f0ea] p-5 sm:p-8">
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <FieldSet>
                  <FieldLegend className="text-xl font-bold text-[#1E2A56]">
                    Event Information
                  </FieldLegend>

                  <FieldDescription className="mb-4 text-sm text-[#1E2A56]/65">
                    Fill in the details below to introduce your event to the
                    Khair community.
                  </FieldDescription>

                  <FieldGroup>
                    <Field>
                      <FieldLabel
                        htmlFor="title"
                        className="font-semibold text-[#1E2A56]"
                      >
                        Event Title
                      </FieldLabel>
                      <Input
                        id="title"
                        name="title"
                        placeholder="e.g. Free Iftaar Distribution"
                        required
                        className="border-[#1E2A56]/40 bg-white text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56]"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="location"
                        className="font-semibold text-[#1E2A56]"
                      >
                        Location / Venue
                      </FieldLabel>
                      <Input
                        id="location"
                        name="location"
                        placeholder="e.g. Sylhet"
                        required
                        className="border-[#1E2A56]/40 bg-white text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56]"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="category"
                        className="font-semibold text-[#1E2A56]"
                      >
                        Event Type
                      </FieldLabel>

                      <Select items={eventTypes} name="category">
                        <SelectTrigger
                          id="category"
                          className="border-[#1E2A56]/40 bg-white text-[#1E2A56]"
                        >
                          <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectGroup>
                            {eventTypes.map((item) => (
                              <SelectItem
                                key={item.value}
                                value={item.value}
                                className="bg-[#f5f0ea] text-[#1E2A56]"
                              >
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="imageUrl"
                        className="font-semibold text-[#1E2A56]"
                      >
                        Thumbnail Image URL
                      </FieldLabel>
                      <Input
                        id="imageUrl"
                        name="imageUrl"
                        type="url"
                        placeholder="Paste your image URL"
                        required
                        className="border-[#1E2A56]/40 bg-white text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56]"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="organizer"
                        className="font-semibold text-[#1E2A56]"
                      >
                        Organizer
                      </FieldLabel>
                      <Input
                        id="organizer"
                        name="organizer"
                        type="text"
                        required
                        placeholder="e.g. Sylhet Youth Club"
                        className="border-[#1E2A56]/40 bg-white text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56]"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="eventDate"
                        className="font-semibold text-[#1E2A56]"
                      >
                        Event Date
                      </FieldLabel>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        min={today}
                        required
                        className="border-[#1E2A56]/40 bg-white text-[#1E2A56] [color-scheme:light] focus-visible:ring-[#1E2A56]"
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>

                <FieldSeparator className="bg-[#1E2A56]/20" />

                <FieldSet>
                  <FieldLegend className="text-xl font-bold text-[#1E2A56]">
                    Tell Us More
                  </FieldLegend>

                  <FieldDescription className="mb-4 text-sm text-[#1E2A56]/65">
                    Help people understand what your event is about.
                  </FieldDescription>

                  <Field>
                    <FieldLabel
                      htmlFor="description"
                      className="font-semibold text-[#1E2A56]"
                    >
                      Event Description
                    </FieldLabel>
                    <Textarea
                      id="description"
                      placeholder="Explain the purpose and details of your event..."
                      name="description"
                      className="min-h-32 resize-none border-[#1E2A56]/40 bg-white text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56]"
                    />
                  </Field>
                </FieldSet>

                <Field
                  orientation="horizontal"
                  className="flex flex-wrap gap-3 pt-4"
                >
                  <Button
                    type="submit"
                    className="border border-[#1E2A56] bg-[#1E2A56] px-7 py-3 font-semibold text-[#f5f0ea] hover:bg-[#293b72]"
                  >
                    Create Event
                  </Button>

                  <Button
                    variant="outline"
                    type="button"
                    className="border border-[#1E2A56] bg-transparent px-7 py-3 font-semibold text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]"
                  >
                    Cancel
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventsPage;
