"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./icons";

export type Task = {
  id: string;
  title: string;
  subject: string;
  note: string;
  done: boolean;
};

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
};

const actionClass =
  "flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium";

export default function TaskItem({
  task,
  onToggle,
  onEdit,
  onDelete,
}: TaskItemProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(task.title);

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = draft.trim();
    if (trimmed) onEdit(task.id, trimmed);
    setEditing(false);
  }

  return (
    <li className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-card md:flex-row md:items-center md:gap-4 md:rounded-xl md:border md:border-[#eef1f8] md:shadow-[0_1px_2px_rgb(25_28_32/0.04)]">
      <div className="flex min-w-0 flex-1 items-start gap-4">
        <label className="mt-0.5 flex cursor-pointer md:mt-2">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggle(task.id)}
            className="peer sr-only"
          />
          <span className="flex size-7 items-center justify-center rounded-md bg-primary-soft text-transparent peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary">
            <Icon name="check" className="size-4" strokeWidth={3} />
          </span>
          <span className="sr-only">Đánh dấu đã xong: {task.title}</span>
        </label>

        <div className="min-w-0 flex-1">
          {editing ? (
            <form onSubmit={handleSave} className="flex flex-wrap gap-2">
              <input
                type="text"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                aria-label="Tên công việc"
                autoFocus
                className="h-9 min-w-0 flex-1 rounded-lg bg-field px-3"
              />
              <button
                type="submit"
                className={`${actionClass} bg-primary text-white`}
              >
                Lưu
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className={`${actionClass} bg-field`}
              >
                Hủy
              </button>
            </form>
          ) : (
            <p
              className={`text-lg leading-7 break-words ${
                task.done ? "text-[#8b90a0] line-through" : ""
              }`}
            >
              {task.title}
            </p>
          )}
          <p
            className={`mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted ${
              task.done ? "opacity-60" : ""
            }`}
          >
            <span className="rounded-md bg-mint px-2 py-0.5 text-mint-ink">
              {task.subject}
            </span>
            {task.note && <span>• {task.note}</span>}
          </p>
        </div>
      </div>

      {!editing && (
        <div className="flex shrink-0 justify-end gap-2">
          <button
            type="button"
            onClick={() => {
              setDraft(task.title);
              setEditing(true);
            }}
            className={`${actionClass} bg-primary-soft/60 text-ink hover:bg-primary-soft`}
          >
            <Icon name="pencil" className="size-4" />
            Sửa
            <span className="sr-only">: {task.title}</span>
          </button>
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className={`${actionClass} bg-danger-soft text-danger hover:bg-[#ffdad6]`}
          >
            <Icon name="trash" className="size-4" />
            Xóa
            <span className="sr-only">: {task.title}</span>
          </button>
        </div>
      )}
    </li>
  );
}
