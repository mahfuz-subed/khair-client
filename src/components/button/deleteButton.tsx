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
import { useRouter } from "next/navigation";
import GetTokenFromClient from "@/lib/getTokenFromClient";

const DeleteButton = ({ fd }: { fd: IEvent }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const token = await GetTokenFromClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/my-events/${fd._id}`,
      {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      },
    );
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      router.push("manage-events");
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <button className="border border-red-700 bg-transparent px-5 py-3 text-sm font-semibold text-red-700 transition-colors hover:bg-red-700 hover:text-white" />
          }
        >
          Delete
        </AlertDialogTrigger>

        <AlertDialogContent className="border border-[#1E2A56] bg-[#f5f0ea] text-[#1E2A56]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold">
              Are you sure you want to delete this?
            </AlertDialogTitle>

            <AlertDialogDescription className="text-[#1E2A56]/70">
              This action cannot be undone. This will permanently delete your
              event.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="border border-[#1E2A56] bg-transparent text-[#1E2A56] hover:bg-[#1E2A56] hover:text-[#f5f0ea]">
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-700 text-white hover:bg-red-800"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteButton;
