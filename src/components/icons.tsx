import type { SVGProps } from "react";

const CIRCLE = "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z";
const EYE = [
  "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z",
  "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
];

const paths = {
  mail: [
    "M4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11A1.5 1.5 0 0 1 4.5 5Z",
    "m3.5 7 8.5 6 8.5-6",
  ],
  lock: [
    "M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z",
    "M8 11V7a4 4 0 0 1 8 0v4",
    "M12 15v2",
  ],
  eye: EYE,
  eyeOff: [...EYE, "m4 4 16 16"],
  arrowRight: ["M5 12h14", "m13 6 6 6-6 6"],
  shield: [
    "M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z",
    "m9 12 2 2 4-4",
  ],
  checkCircle: [CIRCLE, "m8.5 12 2.5 2.5 4.5-5"],
  trend: ["m3 17 6-6 4 4 8-8", "M15 7h6v6"],
  chevronRight: ["m9 6 6 6-6 6"],
  bulb: [
    "M9 18h6",
    "M10 21h4",
    "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z",
  ],
  cap: [
    "m2 9 10-5 10 5-10 5L2 9Z",
    "M6 11.5V16c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4.5",
  ],
  book: [
    "M12 6.5C10.5 5.5 8 5 4 5v13c4 0 6.5.5 8 1.5 1.5-1 4-1.5 8-1.5V5c-4 0-6.5.5-8 1.5Z",
    "M12 6.5v13",
  ],
  calendar: [
    "M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
    "M4 10h16",
    "M8 3v4",
    "M16 3v4",
  ],
  plus: ["M12 5v14", "M5 12h14"],
  plusCircle: [CIRCLE, "M12 8v8", "M8 12h8"],
  pencil: ["M4 20h4L19 9l-4-4L4 16v4Z", "m13.5 6.5 4 4"],
  trash: ["M4 7h16", "M9 7V4h6v3", "m6 7 1 13h10l1-13", "M10 11v5", "M14 11v5"],
  check: ["m5 12.5 4.5 4.5L19 7.5"],
  logout: [
    "M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5",
    "m15 8 4 4-4 4",
    "M19 12H9",
  ],
  clipboard: [
    "M8 5H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2",
    "M9 3h6v4H9V3Z",
    "m9 13 2 2 4-4",
  ],
  refresh: ["M20 12a8 8 0 1 1-2.3-5.6", "M20 4v4h-4"],
  wifiOff: [
    "m3 3 18 18",
    "M2 9a15 15 0 0 1 4.5-3",
    "M10.5 5.1A15 15 0 0 1 22 9",
    "M5 12.5a10 10 0 0 1 4-2.6",
    "M15.5 10.3a10 10 0 0 1 3.5 2.2",
    "M8.5 16a5 5 0 0 1 7 0",
    "M12 19.5h.01",
  ],
  user: [
    "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    "M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5",
  ],
  listCheck: [
    "M3 6h9",
    "M3 12h9",
    "M3 18h7",
    "m15 7 2 2 4-4",
    "m15 15 2 2 4-4",
  ],
} satisfies Record<string, string[]>;

export type IconName = keyof typeof paths;

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, className = "size-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function Logo({ className = "size-10" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-primary text-white ${className}`}
    >
      <Icon name="listCheck" className="size-[55%]" strokeWidth={2.2} />
    </span>
  );
}
