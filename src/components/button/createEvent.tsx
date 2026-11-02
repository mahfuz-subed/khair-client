import React from "react";
import { Button } from "@base-ui/react";
import Link from "next/link";

const CreateEventButtton = () => {
  return (
    <div>
      <Link href="/create-event">
        <Button className="border border-[#1E2A56] bg-[#1E2A56] px-6 py-3 font-semibold text-[#f5f0ea] transition-colors hover:bg-[#293b72]">
          + Create Event
        </Button>
      </Link>
    </div>
  );
};

export default CreateEventButtton;
