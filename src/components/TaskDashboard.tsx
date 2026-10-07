"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { Icon, Logo, type IconName } from "./icons";
import TaskForm, { TASK_INPUT_ID } from "./TaskForm";
import type { Task } from "./TaskItem";
import TaskList from "./TaskList";

// Dữ liệu mẫu, chỉ sống trong bộ nhớ trình duyệt (chưa có Supabase/API).
const initialTasks: Task[] = [
  {
    id: "1",
    title: "Phân tích nghệ thuật bài thơ \"Việt Bắc\" - Tố Hữu",
    subject: "Ngữ văn 11",
    note: "Hạn nộp: 17:00 chiều nay",
    done: false,
  },
  {
    id: "2",
    title: "Luyện tập câu bị động và câu phức trong đoạn văn bản luận điểm",
    subject: "Ngữ pháp",
    note: "Bài tập 4, 5 (SGK trang 84)",
    done: false,
  },
  {
    id: "3",
    title: "Học 15 thành ngữ Việt Nam chỉ tính cách con người",
    subject: "Sổ từ vựng",
    note: "Đã hoàn thành 09:30",
    done: true,
  },
  {
    id: "4",
    title: "Lập dàn ý chi tiết bài văn nghị luận xã hội về \"Lòng tự trọng\"",
    subject: "Tập làm văn",
    note: "Đính kèm tài liệu đọc",
    done: false,
  },
  {
    id: "5",
    title: "Rà soát lỗi chính tả d/gi/r trong bài văn mẫu tuần 8",
    subject: "Chính tả",
    note: "Đã hoàn thành sáng nay",
    done: true,
  },
];

type Filter = "all" | "todo" | "done";

const filters: { key: Filter; label: string; empty?: string }[] = [
  { key: "all", label: "Tất cả", empty: "Hãy thêm công việc đầu tiên của bạn." },
  { key: "todo", label: "Chưa xong" },
  { key: "done", label: "Đã xong", empty: "Chưa có công việc nào hoàn thành." },
];

const menu = ["Bài học", "Luyện tập", "Sổ từ vựng", "Ngữ pháp"];

const mobileNav: { icon: IconName; label: string }[] = [
  { icon: "cap", label: "Khóa học" },
  { icon: "book", label: "Từ vựng" },
  { icon: "pencil", label: "Luyện tập" },
  { icon: "user", label: "Hồ sơ" },
];

const user = { name: "Lan Anh", role: "Học sinh Lớp 11" };

const logoutClass =
  "flex h-10 items-center gap-2 rounded-lg bg-danger-soft px-4 font-medium text-danger hover:bg-[#ffdad6]";

// Ngày chỉ tính ở trình duyệt để không lệch với HTML dựng sẵn trên máy chủ.
const subscribeNever = () => () => {};
function getTodayLabel() {
  const now = new Date();
  return `Hôm nay, ${now.getDate()} Tháng ${now.getMonth() + 1}`;
}

function focusTaskInput() {
  document.getElementById(TASK_INPUT_ID)?.focus();
}

function Avatar() {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
      <Icon name="user" />
    </span>
  );
}

export default function TaskDashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState<Filter>("all");
  const today = useSyncExternalStore(
    subscribeNever,
    getTodayLabel,
    () => "Hôm nay",
  );

  const doneCount = tasks.filter((task) => task.done).length;
  const counts: Record<Filter, number> = {
    all: tasks.length,
    todo: tasks.length - doneCount,
    done: doneCount,
  };
  const visibleTasks = tasks.filter(
    (task) => filter === "all" || task.done === (filter === "done"),
  );

  function addTask(title: string) {
    setTasks((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        title,
        subject: "Việc học",
        note: "Vừa thêm",
        done: false,
      },
    ]);
  }

  function toggleTask(id: string) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function editTask(id: string, title: string) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, title } : task)),
    );
  }

  function deleteTask(id: string) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return (
    <div className="flex flex-1 flex-col">
      <header className="bg-white shadow-[0_1px_2px_rgb(25_28_32/0.06)]">
        <div className="mx-auto flex h-[70px] max-w-[1240px] items-center gap-3 px-4 md:px-6">
          <Logo className="size-9" />
          <div className="min-w-0">
            <p className="truncate font-semibold text-primary md:text-2xl">
              Việc học của tôi
            </p>
            <p className="text-xs text-muted md:hidden">Trang Chủ</p>
          </div>
          <nav aria-label="Menu chính" className="ml-8 hidden gap-10 lg:flex">
            {menu.map((item) => (
              <a key={item} href="#" className="text-muted hover:text-primary">
                {item}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <Avatar />
            <div className="hidden md:block">
              <p className="text-sm leading-5 font-medium">{user.name}</p>
              <p className="text-xs text-muted">{user.role}</p>
            </div>
            <Link href="/login" className={`${logoutClass} hidden md:flex`}>
              <Icon name="logout" />
              Đăng xuất
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1040px] flex-1 px-4 pt-5 pb-28 md:px-6 md:pt-7 md:pb-16">
        {/* Tiêu đề bản điện thoại */}
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-3">
            <h1 className="flex items-center gap-2 text-2xl font-semibold whitespace-nowrap">
              <Icon name="listCheck" className="size-7 text-primary" />
              Kế hoạch hôm nay
            </h1>
            <span className="shrink-0 rounded-full bg-mint px-3 py-1 text-xs font-medium text-mint-ink">
              Học kỳ II
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">
            Từng bước nhỏ mỗi ngày để chinh phục mục tiêu học tập bền vững.
          </p>
        </div>

        {/* Thẻ tiêu đề bản máy tính */}
        <section className="hidden items-center gap-5 rounded-2xl bg-white p-7 shadow-card md:flex">
          <span className="flex size-[52px] shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
            <Icon name="clipboard" className="size-7" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm tracking-wider text-muted">
              KẾ HOẠCH HỌC TẬP
            </p>
            <h1 className="text-4xl leading-[46px] font-semibold">
              Danh sách công việc học tập hôm nay
            </h1>
          </div>
          <p className="flex shrink-0 items-center gap-2 rounded-lg bg-field px-5 py-3 text-sm text-muted">
            <Icon name="calendar" />
            {today}
          </p>
        </section>

        <section className="mt-4 md:mt-11 md:rounded-2xl md:bg-white md:p-7 md:shadow-card">
          <TaskForm onAdd={addTask} />

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 md:mt-7">
            <div
              role="group"
              aria-label="Lọc công việc"
              className="flex w-full gap-1 rounded-xl bg-primary-soft/70 p-1 md:w-auto"
            >
              {filters.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={filter === key}
                  onClick={() => setFilter(key)}
                  className={`flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg px-1 text-sm whitespace-nowrap md:flex-none md:gap-2 md:px-5 ${
                    filter === key
                      ? "bg-white font-semibold text-primary shadow-sm"
                      : "text-muted hover:bg-white/50"
                  }`}
                >
                  {label}
                  <span className="rounded-full bg-primary-soft px-2 text-xs leading-5">
                    {counts[key]}
                  </span>
                </button>
              ))}
            </div>
            <p className="flex items-center gap-2 text-sm text-muted">
              <Icon name="listCheck" className="size-5 text-mint-ink" />
              Đã hoàn thành {doneCount}/{tasks.length} mục
            </p>
          </div>

          <div className="mt-4 md:mt-10">
            <TaskList
              tasks={visibleTasks}
              emptyMessage={filters.find(({ key }) => key === filter)?.empty}
              onToggle={toggleTask}
              onEdit={editTask}
              onDelete={deleteTask}
              onAddNew={focusTaskInput}
            />
          </div>
        </section>

        {/* Khối người dùng ở cuối trang: chỉ hiện trên điện thoại */}
        <section className="mt-10 flex items-center gap-3 rounded-2xl bg-field p-4 md:hidden">
          <Avatar />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{user.name}</p>
            <p className="truncate text-xs text-muted">{user.role}</p>
          </div>
          <Link href="/login" className={logoutClass}>
            <Icon name="logout" />
            Đăng xuất
          </Link>
        </section>
      </main>

      <footer className="hidden bg-field md:block">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-10 gap-y-3 px-6 py-12 text-muted">
          <p className="text-2xl font-semibold text-primary">
            Việc học của tôi
          </p>
          <p>• Nền tảng trau dồi tiếng Việt</p>
          <a href="#" className="hover:text-primary">
            Hướng dẫn học tập
          </a>
          <a href="#" className="hover:text-primary">
            Quy định sử dụng
          </a>
          <a href="#" className="hover:text-primary">
            Hỗ trợ
          </a>
          <p className="lg:ml-auto">
            © 2025 Việc học của tôi. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </footer>

      <nav
        aria-label="Điều hướng nhanh"
        className="fixed inset-x-0 bottom-0 flex justify-around bg-white pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-1px_4px_rgb(25_28_32/0.08)] md:hidden"
      >
        {mobileNav.map(({ icon, label }) => (
          <a
            key={label}
            href="#"
            className="flex flex-col items-center gap-1 rounded-lg px-3 py-1 text-xs font-medium"
          >
            <Icon name={icon} className="size-6" />
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
