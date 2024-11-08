import { auth } from "@/auth";

const Dashboard = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      welcome back: <span>{session?.user?.name}</span>
    </div>
  );
};

export default Dashboard;
