import React from "react";
import { Button } from "@base-ui/react";
import Link from "next/link";
Link;
const CreateEventButtton = () => {
  return (
    <div>
      <Link href="/create-event">
        <Button className="text-taupe-950">Create Event</Button>
      </Link>
    </div>
  );
};

export default CreateEventButtton;
