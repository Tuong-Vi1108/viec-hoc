import { Icon } from "./icons";
import TaskItem, { type Task } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  status?: "ready" | "loading" | "error";
  emptyMessage?: string;
  onToggle: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  onAddNew?: () => void;
  onRetry?: () => void;
};

export default function TaskList({
  tasks,
  status = "ready",
  emptyMessage,
  onToggle,
  onEdit,
  onDelete,
  onAddNew,
  onRetry,
}: TaskListProps) {
  if (status === "loading") return <TaskListLoading />;
  if (status === "error") return <TaskListError onRetry={onRetry} />;
  if (tasks.length === 0) {
    return <TaskListEmpty message={emptyMessage} onAddNew={onAddNew} />;
  }

  return (
    <ul className="space-y-3 md:space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

const stateClass =
  "flex h-full flex-col items-center justify-center rounded-2xl bg-white px-8 py-7 text-center shadow-card";

export function TaskListEmpty({
  message = "Tuyệt vời! Bạn đã hoàn thành toàn bộ mục tiêu học tập ngày hôm nay.",
  onAddNew,
}: {
  message?: string;
  onAddNew?: () => void;
}) {
  return (
    <div className={stateClass}>
      <span className="flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary">
        <Icon name="checkCircle" className="size-9" />
      </span>
      <p className="mt-4 font-medium">Không có bài tập nào</p>
      <p className="mt-2 max-w-60 text-sm leading-6 text-muted">{message}</p>
      <button
        type="button"
        onClick={onAddNew}
        className="mt-4 h-9 rounded-lg bg-field px-4 text-sm font-medium text-primary hover:bg-primary-soft"
      >
        Thêm bài tập mới
      </button>
    </div>
  );
}

export function TaskListLoading() {
  return (
    <div
      role="status"
      className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-card"
    >
      <div className="animate-pulse space-y-5">
        <div className="flex justify-between">
          <div className="h-4 w-1/2 rounded-full bg-primary-soft" />
          <div className="h-4 w-14 rounded-full bg-primary-soft" />
        </div>
        {[0, 1].map((row) => (
          <div key={row} className="flex gap-3 pt-6 first:pt-0">
            <div className="size-6 rounded-md bg-primary-soft" />
            <div className="flex-1 space-y-2">
              <div className="h-4 rounded-full bg-primary-soft" />
              <div className="h-3 w-1/2 rounded-full bg-primary-soft" />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-auto flex items-center gap-2 pt-8 text-xs text-muted">
        <Icon name="refresh" className="size-4 animate-spin text-primary" />
        Đang tải danh sách bài tập...
      </p>
    </div>
  );
}

export function TaskListError({ onRetry }: { onRetry?: () => void }) {
  return (
    <div role="alert" className={stateClass}>
      <span className="flex size-16 items-center justify-center rounded-full bg-danger-soft text-danger">
        <Icon name="wifiOff" className="size-8" />
      </span>
      <p className="mt-4 font-medium">Không thể tải dữ liệu</p>
      <p className="mt-2 max-w-60 text-sm leading-6 text-muted">
        Kết nối mạng gặp sự cố hoặc máy chủ bài học đang bận.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 flex h-9 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-white hover:bg-[#0046b3]"
      >
        <Icon name="refresh" className="size-4" />
        Thử lại
      </button>
    </div>
  );
}
