import React, { useState } from "react";

import NestedContentNavItem from "./NestedContentNavItem";
import NestedNestedContent from "./NestedNestedContent";
import { NestedNavItem } from "./NestedContentNavItem";

interface NestedContentProps {
  content: NestedNavItem[];
}

const NestedContent: React.FC<NestedContentProps> = ({ content }) => {
  const [focussedItem, setFocussedItem] = useState<NestedNavItem | null>(
    content.length > 0 && content[0].nested ? content[0] : null
  );

  const handleMouseEnter = (item: NestedNavItem) => {
    setFocussedItem(item);
  };

  const handleMouseLeave = () => {
    setFocussedItem(content[0].nested ? content[0] : null);
  };

  return (
    <div
      className={`relative lg:absolute lg:top-full z-10 lg:hidden bg-white lg:rounded-b-lg lg:shadow-md group-hover:flex max-w-screen bg-opacity-[50%] border-secondary border-opacity-[30%] border-l lg:border-l-0 lg:border-t lg:left-[-50%] xl:left-[-16px] 2xl:left-[-8px]
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <ul>
          {content.map((item) => (
            <li key={item.id} onMouseEnter={() => handleMouseEnter(item)}>
              <NestedContentNavItem
                content={item}
                focussed={focussedItem === item}
              />
            </li>
          ))}
        </ul>
      </div>
      {focussedItem && focussedItem.nested && (
        <div
          onMouseEnter={() => handleMouseEnter(focussedItem)}
          className="flex grow justify-stretch justify-items-stretch justify-self-stretch content-stretch items-stretch self-stretch"
        >
          <NestedNestedContent
            content={focussedItem.nested}
            itemSize={focussedItem.nestedItemSize}
          />
        </div>
      )}
    </div>
  );
};

export default NestedContent;
