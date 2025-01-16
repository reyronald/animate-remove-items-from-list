import { useState } from "react";
import { flushSync } from "react-dom";

import "./styles.css";

export default function App() {
  const [items, setItems] = useState<string[]>([]);

  const add = () => {
    const id = Math.random().toString(36).slice(2);
    document.startViewTransition(() => {
      setItems((prevItems) => prevItems.slice().concat(id));
    });
  };

  return (
    <div className="App">
      <button onClick={add}>Add item</button>

      {items.map((item) => (
        <Item
          key={item}
          label={item}
          onRemove={() =>
            document.startViewTransition(() => {
              flushSync(() => {
                setItems((prevItems) =>
                  prevItems.filter((thisItem) => thisItem !== item)
                );
              });
            })
          }
        />
      ))}
    </div>
  );
}

function Item({ label, onRemove }: { label: string; onRemove: VoidFunction }) {
  return (
    <div className="item" style={{ viewTransitionName: `_${label}` }}>
      Item {label}
      <button onClick={onRemove}>X</button>
    </div>
  );
}
