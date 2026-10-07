import type { Metadata } from "next";
import TaskDashboard from "@/components/TaskDashboard";

export const metadata: Metadata = {
  title: "Công việc hôm nay | Việc học của tôi",
};

export default function TasksPage() {
  return <TaskDashboard />;
}
