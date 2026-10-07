import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";
import { Icon, Logo, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Đăng nhập | Việc học của tôi",
};

const features: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "checkCircle",
    title: "Quản lý công việc học tập khoa học",
    text: "Phân loại môn học, sắp xếp mức độ ưu tiên theo thời gian thực.",
  },
  {
    icon: "trend",
    title: "Theo dõi tiến độ dễ dàng",
    text: "Quan sát sự kiên trì từng ngày với các chỉ báo tiến trình trực quan.",
  },
  {
    icon: "chevronRight",
    title: "Tập trung và hiệu quả",
    text: "Không gian tối giản loại bỏ xao nhãng, nâng cao khả năng ghi nhớ.",
  },
];

export default function LoginPage() {
  return (
    <div className="flex flex-1 flex-col bg-gradient-to-br from-surface via-surface to-[#e3f7f6]">
      <header className="mx-auto hidden w-full max-w-[1424px] items-center justify-between px-10 pt-14 pb-12 lg:flex">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-2xl leading-7 font-semibold text-primary">
              Việc học của tôi
            </p>
            <p className="text-sm tracking-wider text-muted">
              NỀN TẢNG HỌC TIẾNG VIỆT
            </p>
          </div>
        </div>
        <p className="flex items-center gap-2 text-muted">
          <Icon name="shield" className="size-6" />
          Hệ thống bảo mật
        </p>
      </header>

      <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-10 lg:grid lg:max-w-[1424px] lg:flex-none lg:grid-cols-2 lg:gap-[30px] lg:px-0 lg:py-0">
        {/* Cột giới thiệu: chỉ hiện trên máy tính */}
        <section className="hidden rounded-3xl bg-gradient-to-b from-[#e3ecff] via-[#eef2ff] to-[#d5f3f5] p-[50px] shadow-card lg:block">
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-white p-1 shadow-card">
              <Logo className="size-[50px]" />
            </span>
            <div>
              <p className="text-[26px] leading-8 font-semibold text-primary">
                Việc học của tôi
              </p>
              <p className="text-sm tracking-wider text-muted">
                HỌC TẬP THÔNG MINH MỖI NGÀY
              </p>
            </div>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1 font-medium text-primary">
            <Icon name="cap" />
            Không gian số cá nhân
          </p>
          <h1 className="mt-4 text-[42px] leading-[50px] font-semibold">
            Chào mừng bạn quay lại
            <br />
            <span className="text-primary">Việc học của tôi!</span>
          </h1>
          <p className="mt-4 text-xl leading-8 text-muted">
            Hành trình chinh phục tri thức trở nên đơn giản, tập trung và tràn
            đầy hứng khởi khi mọi nhiệm vụ đều được tổ chức mạch lạc.
          </p>

          <ul className="mt-12 space-y-5">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="flex gap-5 rounded-xl bg-white p-5 shadow-[0_1px_3px_rgb(25_28_32/0.06)]"
              >
                <span className="flex size-[50px] shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon name={feature.icon} className="size-7" />
                </span>
                <div>
                  <h2 className="text-lg font-medium">{feature.title}</h2>
                  <p className="leading-7 text-muted">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-12 flex items-center gap-3 text-lg text-muted italic">
            <Icon name="bulb" className="size-6 shrink-0 text-mint-ink" />
            “Mỗi ngày học thêm một điều hay, tương lai thêm phần vững bước.”
          </p>
        </section>

        <section>
          {/* Phần mở đầu: chỉ hiện trên điện thoại */}
          <div className="mb-9 flex flex-col items-center text-center lg:hidden">
            <span className="flex size-[116px] items-center justify-center rounded-full bg-primary-soft text-primary">
              <Icon name="book" className="size-14" strokeWidth={2} />
            </span>
            <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-1.5 font-semibold text-mint-ink">
              <Icon name="checkCircle" />
              Việc học của tôi
            </p>
            <h1 className="mt-5 text-[28px] leading-9 font-semibold">
              Chào mừng bạn trở lại!
            </h1>
            <p className="mt-3 max-w-[18rem] text-lg leading-8 text-muted">
              Đăng nhập để tiếp tục theo dõi công việc học tập của bạn
            </p>
          </div>

          <LoginForm />

          <p className="mt-8 flex items-center justify-center gap-3 px-4 text-center text-sm font-medium text-muted lg:hidden">
            <Icon name="shield" className="size-6 shrink-0 text-mint-ink" />
            Thông tin học tập của bạn luôn được bảo mật tuyệt đối
          </p>
        </section>
      </main>

      <footer className="mx-auto hidden w-full max-w-[1424px] items-center justify-between px-10 pt-20 pb-8 text-muted lg:flex">
        <p>© 2024 Việc học của tôi. Giữ trọn sự tinh tế của tiếng Việt.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary">
            Điều khoản &amp; Bảo mật
          </a>
          <a href="#" className="hover:text-primary">
            Hỗ trợ học tập
          </a>
        </div>
      </footer>
    </div>
  );
}
