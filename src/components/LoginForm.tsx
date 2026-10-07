"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Icon } from "./icons";

const fieldClass =
  "flex h-14 items-center gap-3 rounded-xl bg-field px-4 text-muted focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary lg:border lg:border-[#e9edf7] lg:bg-white lg:shadow-[0_1px_2px_rgb(25_28_32/0.04)]";
const inputClass =
  "h-full min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-[#a9b1c7]";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form mẫu: chặn gửi đi, không đọc và không lưu giá trị đã nhập.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-card sm:p-9 lg:flex lg:h-full lg:flex-col lg:justify-center lg:px-[74px] lg:py-16">
      <div className="hidden lg:block">
        <span className="inline-block rounded-full bg-primary-soft px-3 py-0.5 text-sm font-semibold tracking-wider text-primary">
          CỔNG HỌC VIÊN
        </span>
        <h2 className="mt-2 text-[40px] leading-tight font-bold">
          Đăng nhập tài khoản
        </h2>
        <p className="mt-2 text-muted">
          Điền tài khoản học sinh, sinh viên hoặc giáo viên để tiếp tục.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="lg:mt-9" noValidate>
        <div className="flex items-baseline justify-between">
          <label htmlFor="email" className="text-lg font-medium">
            Email học tập
          </label>
          <span className="hidden text-xs text-muted lg:inline">Bắt buộc</span>
        </div>
        <div className={`${fieldClass} mt-3`}>
          <Icon name="mail" className="size-6 shrink-0" />
          <input
            id="email"
            type="email"
            autoComplete="off"
            placeholder="vidu@hocsinh.edu.vn"
            className={inputClass}
          />
        </div>

        <label htmlFor="password" className="mt-7 block text-lg font-medium">
          Mật khẩu
        </label>
        <div className={`${fieldClass} mt-3`}>
          <Icon name="lock" className="size-6 shrink-0" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            placeholder="Nhập mật khẩu an toàn"
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            aria-pressed={showPassword}
            className="-mr-2 flex size-10 shrink-0 items-center justify-center rounded-lg hover:bg-primary-soft"
          >
            <Icon name={showPassword ? "eyeOff" : "eye"} className="size-6" />
          </button>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-sm sm:text-base">
          <label className="flex cursor-pointer items-center gap-2 text-muted sm:gap-3">
            <input type="checkbox" className="peer sr-only" />
            <span className="flex size-6 items-center justify-center rounded-md bg-primary-soft text-transparent peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary lg:size-5 lg:rounded">
              <Icon name="check" className="size-4" strokeWidth={3} />
            </span>
            Ghi nhớ đăng nhập
          </label>
          <a href="#" className="font-medium text-primary hover:underline">
            Quên mật khẩu?
          </a>
        </div>

        <button
          type="submit"
          className="mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-primary text-lg font-semibold text-white shadow-[0_4px_10px_rgb(0_80_203/0.25)] hover:bg-[#0046b3] lg:text-2xl"
        >
          Đăng nhập
          <Icon name="arrowRight" className="size-6" />
        </button>

        <p role="status" className="mt-3 min-h-5 text-center text-sm text-muted">
          {submitted &&
            "Đây là form mẫu: chưa có đăng nhập thật, thông tin bạn nhập không được lưu hay gửi đi."}
        </p>

        <Link
          href="/tasks"
          className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-soft font-medium text-primary hover:bg-[#cddaff]"
        >
          <Icon name="clipboard" />
          Xem giao diện công việc
        </Link>
      </form>

      <p className="mt-9 hidden items-center gap-3 rounded-xl bg-field px-4 py-3 text-muted lg:flex">
        <Icon name="shield" className="size-6 shrink-0 text-mint-ink" />
        Thông tin học tập của bạn luôn được bảo mật tuyệt đối theo tiêu chuẩn
        giáo dục.
      </p>
    </div>
  );
}
