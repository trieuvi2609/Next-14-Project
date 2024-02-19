"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useState } from "react";

const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot password",
    href: "/forgot-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        style={{ border: "1px solid black" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        console.log(pathname.startsWith(link.href));
        return (
          <Link
            className={isActive ? "font-bold" : ""}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
