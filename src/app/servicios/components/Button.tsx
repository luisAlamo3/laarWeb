import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${className}`} {...props}>
      {children}
    </button>
  );
}
