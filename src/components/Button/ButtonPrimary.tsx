"use client";

import { useHoverSupport } from "@/hooks/useHoverSupport";
interface ButtonPrimaryProps {
  label: string;
  isLink?: boolean;
  href?: string;
}

export function ButtonPrimary({
  label,
  isLink = false,
  href,
}: ButtonPrimaryProps) {
  const hasHoverSupport = useHoverSupport();
  if (isLink && !href) {
    throw new Error("href prop is required when isLink is true");
  }

  const className = `button-primary ${hasHoverSupport ? "hasHover" : ""}`;

  return isLink ? (
    <a className={className} href={href}>
      <div className="wrapper">{label}</div>
      <div className="back"></div>
    </a>
  ) : (
    <button className={className} type="button">
      <div className="wrapper">{label}</div>
      <div className="back"></div>
    </button>
  );
}
