"use client";
import React from "react";

interface IEvent {
  _id: string;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  imageUrl: string;
  organizer: string;
  category: string;
}
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Field,
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
import { AlertDialogCancel } from "../ui/alert-dialog";
import GetTokenFromClient from "@/lib/getTokenFromClient";

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
const EditButton = ({ fd }: { fd: IEvent }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

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
    const token = await GetTokenFromClient();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/my-events/${fd._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      },
    );
    const newEventData = await res.json();
    if (newEventData.acknowledged) {
      toast.success("Updated data successfully");
      router.push("/manage-events");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="border border-[#1E2A56] bg-[#f5f0ea] px-4 py-2 text-sm font-semibold text-[#1E2A56] transition-colors hover:bg-[#1E2A56] hover:text-[#f5f0ea]">
          Edit
        </DialogTrigger>

        <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto border border-[#1E2A56] bg-[#f5f0ea] text-[#1E2A56]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#1E2A56]">
              Edit Event
            </DialogTitle>

            <DialogDescription className="text-sm text-[#1E2A56]/70">
              Update your event information below.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <FieldSet>
                <FieldLegend className="text-base font-semibold text-[#1E2A56]">
                  Event Information
                </FieldLegend>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="title">Event Title</FieldLabel>
                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g. Free Iftaar Distribution"
                      defaultValue={fd.title}
                      className="border-[#1E2A56]/40 bg-white text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56]"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="location">Location / Venue</FieldLabel>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g. Sylhet"
                      defaultValue={fd.location}
                      className="border-[#1E2A56]/40 bg-white text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56]"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="category">Event Type</FieldLabel>
                    <Select
                      items={eventTypes}
                      name="category"
                      defaultValue={fd?.category}
                    >
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
                    <FieldLabel htmlFor="imageUrl">Image URL</FieldLabel>
                    <Input
                      id="imageUrl"
                      name="imageUrl"
                      type="url"
                      placeholder="Paste the image URL"
                      defaultValue={fd.imageUrl}
                      className="border-[#1E2A56]/40 bg-white text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56]"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="organizer">Organizer</FieldLabel>
                    <Input
                      id="organizer"
                      name="organizer"
                      type="text"
                      defaultValue={fd.organizer}
                      className="border-[#1E2A56]/40 bg-white text-[#1E2A56] focus-visible:ring-[#1E2A56]"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="eventDate">Event Date</FieldLabel>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      defaultValue={fd.eventDate.slice(0, 10)}
                      min={today}
                      className="border-[#1E2A56]/40 bg-white text-[#1E2A56] [color-scheme:light] focus-visible:ring-[#1E2A56]"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSeparator />

              <FieldSet>
                <Field>
                  <FieldLabel htmlFor="description">Description</FieldLabel>
                  <Textarea
                    id="description"
                    placeholder="Explain the details of the event."
                    name="description"
                    defaultValue={fd.description}
                    className="min-h-32 resize-none border-[#1E2A56]/40 bg-white text-[#1E2A56] placeholder:text-[#1E2A56]/40 focus-visible:ring-[#1E2A56]"
                  />
                </Field>
              </FieldSet>

              <Field orientation="horizontal" className="justify-end gap-3">
                <AlertDialogCancel className="border border-[#1E2A56] bg-transparent text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]">
                  Cancel
                </AlertDialogCancel>

                <button
                  type="submit"
                  className="bg-[#1E2A56] px-5 py-2.5 text-sm font-semibold text-[#f5f0ea] transition-colors hover:bg-[#293b72]"
                >
                  Save Changes
                </button>
              </Field>
            </FieldGroup>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditButton;
