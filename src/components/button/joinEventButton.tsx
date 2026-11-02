"use client";

import { EventItem } from "@/app/upcoming-events/page";
import { authClient } from "@/lib/auth-client";
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
    const res = await fetch(`http://localhost:5000/joined-events`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    });
    const joinedEventData = await res.json();
    console.log("joined", joinedEventData);
    if (joinedEventData.acknowledged) {
      toast.success("Your successfully joined the event.");
    }
    setJoined(true);
  };

  return (
    <div>
      <button
        onClick={handleJoin}
        disabled={joined}
        className="pointer-cursor w-full bg-[#f5f0ea] px-8 py-4 font-semibold text-[#1E2A56] hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {joined ? "Joined" : "Join Event"}
      </button>
    </div>
  );
};

export default JoinEventButton;
