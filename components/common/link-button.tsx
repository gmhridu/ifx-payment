"use client";

import Link from "next/link";
import { useState } from "react";

interface LinkButtonProps {
  href: string;
  buttonText: string;
}

export const LinkButton = ({ href, buttonText }: LinkButtonProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        alignSelf: "flex-start",
        padding: "1.5px",
        background: hovered
          ? "linear-gradient(to right, #39EFD2, #0A8AF7)"
          : "",
        textDecoration: "none",
        transition: "all 0.2s ease",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          border: "1.5px solid",
          borderImage: "linear-gradient(to right, #39EFD2, #0A8AF7) 1",
          borderRadius: "9999px",
          padding: "0.65rem 1.75rem",
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "#fff",
          background: "transparent",
          width: "100%",
        }}
      >
        {buttonText}
      </span>
    </Link>
  );
};
