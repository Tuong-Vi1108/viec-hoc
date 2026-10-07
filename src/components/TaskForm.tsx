"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./icons";

export const TASK_INPUT_ID = "task-title";
const TASK_ERROR_ID = "task-title-error";

type TaskFormProps = {
  onAdd: (title: string) => void;
};

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setError(true);
      document.getElementById(TASK_INPUT_ID)?.focus();
      return;
    }
    onAdd(trimmed);
    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-2xl bg-white p-4 shadow-card md:rounded-none md:bg-transparent md:p-0 md:shadow-none"
    >
      <label
        htmlFor={TASK_INPUT_ID}
        className="mb-2 flex items-center gap-2 text-sm font-medium md:sr-only"
      >
        <Icon name="plusCircle" className="size-5 text-primary" />
        Tạo nhiệm vụ học tập
      </label>
      <div className="flex flex-col gap-2 md:flex-row md:gap-3">
        <div className="flex h-[52px] min-w-0 shrink-0 items-center md:flex-1 gap-3 rounded-lg bg-field px-4 text-muted focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary md:border md:border-[#eef1f8] md:bg-white md:shadow-[0_1px_2px_rgb(25_28_32/0.05)]">
          <Icon name="pencil" className="hidden size-5 shrink-0 md:block" />
          <input
            id={TASK_INPUT_ID}
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              setError(false);
            }}
            aria-invalid={error}
            aria-describedby={error ? TASK_ERROR_ID : undefined}
            placeholder="Nhập tên bài tập hoặc công việc cần hoàn thành..."
            className="h-full min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-[#6f768a]"
          />
        </div>
        <button
          type="submit"
          className="flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-7 font-semibold text-white hover:bg-[#0046b3]"
        >
          <Icon name="plusCircle" />
          Thêm công việc
        </button>
      </div>
      {error && (
        <div
          id={TASK_ERROR_ID}
          role="alert"
          className="absolute inset-x-4 top-full z-10 -mt-2 flex items-center gap-3 rounded-xl border border-danger/20 bg-danger-soft px-4 py-3 text-sm font-medium text-danger shadow-card md:inset-x-0 md:mt-2 md:max-w-md"
        >
          <span className="flex-1">
            Vui lòng nhập tên công việc. Tên không được để trống hoặc chỉ có
            dấu cách.
          </span>
          <button
            type="button"
            onClick={() => setError(false)}
            className="shrink-0 rounded-md px-2 py-1 hover:bg-[#ffdad6]"
          >
            Đóng
          </button>
        </div>
      )}
    </form>
  );
}
