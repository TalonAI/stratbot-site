import React from "react";

export function Button({
  children,
  size = "md",
  variant = "primary",
  className = "",
  ...props
}) {
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  };
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant] || variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
