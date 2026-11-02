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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

const DeleteButton = ({ fd }: { fd: IEvent }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/my-events/${fd._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      router.push("manage-events");
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger render={<button />}>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              event.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteButton;
