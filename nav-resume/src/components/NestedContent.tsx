import React, { useState } from "react";

import NestedContentNavItem from "./NestedContentNavItem";
import NestedNestedContent from "./NestedNestedContent";
import { NestedNavItem } from "./NestedContentNavItem";

interface NestedContentProps {
  content: NestedNavItem[];
}

const NestedContent: React.FC<NestedContentProps> = ({ content }) => {
  const [focussedItem, setFocussedItem] = useState<NestedNavItem | null>(
    content.length > 0 ? content[0] : null
  );

  return (
    <div
      className={`group lg:absolute lg:top-full z-10 lg:hidden bg-white rounded-b-lg shadow-md group-hover:flex max-w-screen bg-opacity-[50%] border-secondary border-opacity-[30%] border-t lg:left-[-50%] xl:left-[-16px] 2xl:left-[-8px]
      }`}
    >
      <div>
        <ul>
          {content.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => setFocussedItem(item)}
              onMouseLeave={() => {
                setFocussedItem(content[0]);
              }}
            >
              <NestedContentNavItem
                content={item}
                focussed={focussedItem === item}
              />
            </li>
          ))}
        </ul>
      </div>
      {focussedItem && focussedItem.nested && (
        <NestedNestedContent
          content={focussedItem.nested}
          itemSize={focussedItem.nestedItemSize}
        />
      )}
    </div>
  );
};

export default NestedContent;
