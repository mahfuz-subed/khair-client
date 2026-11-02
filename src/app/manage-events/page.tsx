import Cancel from "@/components/button/cancel";
import SaveChanges from "@/components/button/saveChanges";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ManageEvents = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const email = session?.user?.email;
  console.log("email", email);
  const res = await fetch(`http://localhost:5000/my-events/${email}`);
  const eventData = await res.json();
  console.log(eventData);
  return (
    <div>
      <h2 className="text-black">{eventData.length}</h2>
      <div>
        <Cancel />
        <SaveChanges />
      </div>
    </div>
  );
};

export default ManageEvents;
