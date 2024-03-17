import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

function ListGroup({ items, selectedIndex, setSelectedIndex }: Props) {
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
