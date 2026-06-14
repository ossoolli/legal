import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "outline" | "white-outline";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 font-cairo font-semibold text-sm rounded transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-burgundy text-cream hover:bg-burgundy-hover shadow-sm border border-burgundy",
    outline:
      "bg-transparent text-burgundy border border-burgundy hover:bg-burgundy hover:text-cream",
    "white-outline":
      "bg-transparent text-cream border border-cream hover:bg-cream hover:text-burgundy",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
