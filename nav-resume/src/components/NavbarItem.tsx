import React from "react";
import { Link } from "react-router-dom";
import NestedContent from "./NestedContent";
import { NestedNavItem } from "./NestedContentNavItem";

export interface NavItemProps {
  content: {
    id: string;
    title: string;
    nested?: NestedNavItem[];
    url?: string;
    disabled?: boolean;
  };
}

const NavbarItem: React.FC<NavItemProps> = ({
  content: { id, title, nested, url = "", disabled = false },
}) => {
  const baseClass =
    "inline-flex items-center justify-center h-full px-6 text-black-100 font-normal border-secondary transition-all duration-200";
  const hoverClass =
    "group-hover:border-b-2 group-hover:font-semibold group-hover:transform";
  const disabledClass = "opacity-60 cursor-default";

  return (
    <li
      className={`relative group h-full inline-flex justify-center items-center ${
        disabled ? disabledClass : ""
      }`}
    >
      {url ? (
        <Link
          to={disabled ? "#" : url}
          className={`${baseClass} ${disabled ? "" : hoverClass}`}
          onClick={(e) => disabled && e.preventDefault()}
        >
          <span className="relative">
            {title}
            <span className="absolute left-0 font-semibold invisible">
              {title}
            </span>
          </span>
        </Link>
      ) : (
        <div className={`${baseClass} ${disabled ? "" : hoverClass}`}>
          <span className="relative">
            {title}
            <span className="absolute left-0 font-semibold invisible">
              {title}
            </span>
          </span>
          {nested && !disabled && (
            <svg
              className="w-4 h-4 ml-2 transition-transform transform group-hover:rotate-180 fill-secondary"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <g className="stroke-secondary stroke-0 group-hover:stroke-1 transition-all duration-200">
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          )}
        </div>
      )}
      {nested && !disabled && <NestedContent content={nested} />}
    </li>
  );
};

export default NavbarItem;
