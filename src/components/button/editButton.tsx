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
const EditButton = ({ fd }: { fd: IEvent }) => {
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

    const res = await fetch(`http://localhost:5000/my-events/${fd._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    });
    const newEventData = await res.json();
    if (newEventData.acknowledged) {
      toast.success("Updated data successfully");
      router.push("/upcoming-events");
    }
    console.log("result", newEventData);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="text-black">Edit</Button>
        </DialogTrigger>
        <DialogContent className="min-w-xl">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <FieldSet>
                    <FieldLegend>Payment Method</FieldLegend>
                    <FieldDescription>
                      All transactions are secure and encrypted
                    </FieldDescription>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="title">Event Title</FieldLabel>
                        <Input
                          id="title"
                          name="title"
                          placeholder="e.g. Free Iftaar Distribution."
                          defaultValue={fd.title}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="location">
                          Location / Venue
                        </FieldLabel>
                        <Input
                          id="location"
                          name="location"
                          placeholder="e.g. Sylhet"
                          defaultValue={fd.location}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="category">Event Type</FieldLabel>
                        <Select
                          items={eventTypes}
                          name="category"
                          defaultValue={fd?.category}
                        >
                          <SelectTrigger id="category">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {eventTypes.map((item) => (
                                <SelectItem
                                  key={item?.value}
                                  value={item.value}
                                  className="bg-amber-100 text-black"
                                >
                                  {item.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="imageUrl">Image (url)</FieldLabel>
                        <Input
                          id="imageUrl"
                          name="imageUrl"
                          type="url"
                          placeholder="paste the image url for thumbnail"
                          defaultValue={fd.imageUrl}
                        />
                      </Field>

                      <FieldLabel htmlFor="organizer">Organizer</FieldLabel>
                      <Input
                        id="organizer"
                        name="organizer"
                        type="text"
                        defaultValue={fd.organizer}
                        className=""
                      />

                      <div>
                        <FieldLabel htmlFor="eventDate">Event Date</FieldLabel>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          defaultValue={fd.eventDate.slice(0, 7)}
                          min={today}
                          color-scheme="dark"
                        />
                      </div>
                    </FieldGroup>
                  </FieldSet>
                  <FieldSeparator />
                  <FieldSet>
                    <Field>
                      <FieldLabel htmlFor="description">Description</FieldLabel>
                      <Textarea
                        id="description"
                        placeholder="Explain in details about the event."
                        name="description"
                        defaultValue={fd.description}
                        className="resize-none"
                      />
                    </Field>
                  </FieldSet>
                  <Field orientation="horizontal">
                    <button type="submit">Submit</button>
                    <button type="button">Cancel</button>
                  </Field>
                </FieldGroup>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditButton;
