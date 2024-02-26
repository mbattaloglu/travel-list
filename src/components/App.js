import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((a) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
