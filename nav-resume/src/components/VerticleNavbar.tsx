import React, { useState } from "react";

import VerticleNavbarItem from "./VerticleNavbarItem";
import { VerticleNavItem } from "./VerticleNavbarItem";
import NestedContent from "./NestedContent";
import { navigation, navigationRight } from "../constants";

const VerticleNavbar: React.FC = () => {
  const [focussedItem, setFocussedItem] = useState<VerticleNavItem | null>(
    null
  );

  const handleMouseEnter = (item: VerticleNavItem) => {
    setFocussedItem(item);
  };

  const handleMouseLeave = () => {
    setFocussedItem(null);
  };

  return (
    <div
      className={`absolute group top-full z-10 bg-white rounded-b-lg shadow-md flex flex-row bg-opacity-[50%] border-secondary border-opacity-[30%] border-t left-[0px] max-w-screen 
        
    }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sm:w-48 ">
        <ul>
          {navigation.map((item) => (
            <li key={item.id} onMouseEnter={() => handleMouseEnter(item)}>
              <VerticleNavbarItem
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
          <NestedContent content={focussedItem.nested} />
        </div>
      )}
    </div>
  );
};

export default VerticleNavbar;
