// Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  size = "md",
  className = "",
  disabled = false,
  isLoading = false,
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    focus:ring-blue-500 focus:ring-opacity-50
  `;

  // Size variants
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Variant styles
  const variantStyles = {
    default: `
      bg-blue-500 text-white hover:bg-blue-600
      border border-blue-500 rounded-md
      shadow-sm hover:shadow-md
    `,
    outline: `
      bg-transparent text-blue-500
      border border-blue-500 rounded-md
      hover:bg-blue-500 hover:text-white
    `,
    ghost: `
      bg-transparent text-blue-500
      hover:bg-blue-500/10
    `,
  };

  // Loading indicator
  const loadingIndicator = isLoading ? (
    <svg
      className="animate-spin h-4 w-4 mr-2"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle
        className="opacity:75"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  ) : null;

  return (
    <button
      onClick={disabled || isLoading ? undefined : onClick}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${isLoading ? "cursor-wait" : ""}
        ${className}
      `}
      disabled={disabled}
      aria-disabled={disabled}
      aria-busy={isLoading}
    >
      {loadingIndicator}
      {children}
    </button>
  );
};
