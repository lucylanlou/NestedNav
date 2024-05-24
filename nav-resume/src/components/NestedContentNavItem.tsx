import React from "react";
import { Link } from "react-router-dom";
import { NestedNestedNavItem } from "./NestedNestedContentNavItem";

interface NestedNavItemProps {
  content: NestedNavItem;
  focussed: boolean;
}

export interface NestedNavItem {
  id: string;
  title: string;
  icon?: string;
  url?: string;
  nestedItemSize?: string;
  nested?: NestedNestedNavItem[];
}

const NestedContentNavItem: React.FC<NestedNavItemProps> = ({
  content,
  focussed,
}) => {
  const { id, title, icon, url = "", nested } = content;

  return (
    <div className={`text-sm relative text-left ${focussed ? "bg-white" : ""}`}>
      {url ? (
        <Link
          to={url}
          className={`w-72 inline-flex items-center justify-between h-full text-black-100 border-secondary transition-all duration-200 p-6 ${
            focussed ? "font-semibold " : ""
          }  ${focussed && nested ? "border-r-2 " : ""}`}
        >
          <div className="flex">
            {icon && <img src={icon} alt={title} className="w-7 h-7 mr-2" />}
            <span className="w-full">
              {title}
              <span className="absolute left-0 font-semibold invisible">
                {title}
              </span>
            </span>
          </div>
        </Link>
      ) : (
        <div
          className={`w-72 inline-flex items-center justify-between h-full text-black-100 border-secondary transition-all duration-200 p-6 ${
            focussed ? "font-semibold " : ""
          }  ${focussed && nested ? "border-r-2 " : ""}`}
        >
          <div className="flex">
            {icon && <img src={icon} alt={title} className="w-7 h-7 mr-4" />}
            <span className="relative">
              {title}
              <span className="absolute left-0 font-semibold invisible">
                {title}
              </span>
            </span>
          </div>
          {nested && (
            <svg
              className={`ml-2 transition-transform transform fill-secondary -rotate-90`}
              width="24"
              height="24"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <g
                className={`stroke-secondary stroke-0 transition-all duration-200 ${
                  focussed ? "stroke-1" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default NestedContentNavItem;
