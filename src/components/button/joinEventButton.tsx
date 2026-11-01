// JoinEventButton.tsx
// "use client" tells Next.js: this component runs in the visitor's browser.
// We need that here because the button must react to clicks, and
// server components (like your details page) cannot do that.
"use client";

import { useState } from "react";

const JoinEventButton = ({ eventId }: { eventId: string }) => {
  // useState = a value the component remembers. When it changes,
  // the screen updates automatically.
  const [loading, setLoading] = useState(false); // true while we wait for the server
  const [joined, setJoined] = useState(false); // true after a successful join
  const [message, setMessage] = useState(""); // text shown under the button

  // This function runs when the button is clicked.
  const handleJoin = async () => {
    setLoading(true);
    setMessage("");

    try {
      // IMPORTANT: this URL is my guess. Change it to match the
      // "join" route in your backend.
      const res = await fetch(`http://localhost:5000/event/${eventId}/join`, {
        method: "POST",
      });

      if (res.ok) {
        setJoined(true);
        setMessage("You have joined this event. Thank you!");
      } else {
        setMessage("Sorry, we could not add you. Please try again.");
      }
    } catch (error) {
      // This runs if the server could not be reached at all
      setMessage("Something went wrong. Please check your connection.");
    }

    setLoading(false);
  };

  return (
    <div>
      {/* This button is styled for a navy background:
          cream button with navy text, like "Explore Events" in your banner */}
      <button
        onClick={handleJoin}
        disabled={loading || joined}
        className="w-full bg-[#f5f0ea] px-8 py-4 font-semibold text-[#1E2A56] hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Joining..." : joined ? "Joined" : "Join Event"}
      </button>

      {/* Only show the message when there is one */}
      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
};

export default JoinEventButton;
