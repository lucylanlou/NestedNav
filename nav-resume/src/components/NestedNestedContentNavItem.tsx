import React from "react";
import { Link } from "react-router-dom";

export interface NestedNestedNavItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  url?: string;
}

interface NestedNestedContentNavItemProps {
  content: NestedNestedNavItem;
  size: string;
}

const NestedNestedContentNavItem: React.FC<NestedNestedContentNavItemProps> = ({
  content,
  size = "short",
}) => {
  const { id, title, description, url = "#" } = content;

  return (
    <Link
      key={id}
      to={url}
      className={`hover:underline flex flex-col text-sm text-black-100 px-2 pb-2  ${
        size === "long" ? "w-full" : "w-[50%]"
      }`}
    >
      <span className="font-semibold ">{title}</span>
      {/* i feel like i tried everything and that dang description still keeps getting underlined. i put hover in the parent link div bc i want it to underline the title when hovering over any part of the div */}
      <span
        className="text-xs text-black-100 underline-transparent no-underline underline-none text-decoration-none hover:underline-transparent hover:no-underline hover:underline-none hover:text-decoration-none"
        style={{
          textDecoration: "none !important",
          textDecorationColor: "transparent",
        }}
      >
        {description}
      </span>
    </Link>
  );
};

export default NestedNestedContentNavItem;
