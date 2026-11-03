"use client";

import { EventItem } from "@/app/upcoming-events/page";
import { authClient } from "@/lib/auth-client";
import GetTokenFromClient from "@/lib/getTokenFromClient";
import { useState } from "react";
import toast from "react-hot-toast";

const JoinEventButton = ({ event }: { event: EventItem }) => {
  const [joined, setJoined] = useState(false);
  const { data: session } = authClient.useSession();
  const email = session?.user?.email;
  console.log(email);
  const eventData = {
    ...event,
    createdBy: email,
  };
  console.log(eventData);

  const handleJoin = async () => {
    const token = await GetTokenFromClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/joined-events`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      },
    );
    const joinedEventData = await res.json();
    console.log("joined", joinedEventData);
    if (joinedEventData.acknowledged) {
      toast.success("Your successfully joined the event.");
    }
    setJoined(true);
  };

  return (
    <div>
      {!session?.user ? (
        <div>
          <button
            disabled={true}
            className="pointer-cursor w-full bg-[#f5f0ea] px-8 py-4 font-semibold text-[#1E2A56] cursor-not-allowed opacity-60"
          >
            Join Event <small> (Log in to join this event)</small>
          </button>
        </div>
      ) : (
        <button
          onClick={handleJoin}
          disabled={joined}
          className="pointer-cursor w-full bg-[#f5f0ea] px-8 py-4 font-semibold text-[#1E2A56] hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {joined ? "Joined" : "Join Event"}
        </button>
      )}
    </div>
  );
};

export default JoinEventButton;
