import React from "react";
import { Link } from "react-router-dom";
import NestedNestedContentNavItem, {
  NestedNestedNavItem,
} from "./NestedNestedContentNavItem";

interface NestedNestedContentProps {
  content: NestedNestedNavItem[];
  itemSize?: string;
}

const NestedNestedContent: React.FC<NestedNestedContentProps> = ({
  content,
  itemSize = "short",
}) => {
  return (
    <div
      className={`border-secondary border-opacity-[30%] border-l bg-white lg:w-[400px] rounded-br-lg flex content-stretch grow	 ${
        itemSize === "long"
          ? "flex-col"
          : "lg:flex-wrap lg:flex-row flex-col lg:justify-between" //less than large treat all as long
      }  justify-start py-6 px-5`}
    >
      {content.map((item) => (
        <NestedNestedContentNavItem
          key={item.id}
          content={item}
          size={itemSize}
        />
      ))}
    </div>
  );
};

export default NestedNestedContent;
