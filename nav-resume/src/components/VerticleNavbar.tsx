import React, { useState } from "react";

import VerticleNavbarItem from "./VerticleNavbarItem";
import { VerticleNavItem } from "./VerticleNavbarItem";
import NestedContent from "./NestedContent";
import { navigation, navigationRight } from "../constants";

const VerticleNavbar: React.FC = () => {
  const [focussedItem, setFocussedItem] = useState<VerticleNavItem | null>(
    null
  );

  return (
    <div
      className={`absolute group top-full z-10 bg-white rounded-b-lg shadow-md group-hover:flex flex-row bg-opacity-[50%] border-secondary border-opacity-[30%] border-t left-[8px]
      }`}
    >
      <div>
        <ul>
          {navigation.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => setFocussedItem(item)}
              onMouseLeave={() => {
                setFocussedItem(null);
              }}
            >
              <VerticleNavbarItem
                content={item}
                focussed={focussedItem === item}
              />
            </li>
          ))}
        </ul>
      </div>
      {focussedItem && focussedItem.nested && (
        <NestedContent content={focussedItem.nested} />
      )}
    </div>
  );
};

export default VerticleNavbar;
