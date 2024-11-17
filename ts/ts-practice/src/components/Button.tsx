import React, { useState } from "react";
import { useCounter } from "../contexts/CounterContext";

interface MyButtonProps {
  text: string | number | boolean;
  onClick?: () => void;
}

interface Book {
  name: string;
  price: number;
}

// Functional Component !
export const Button: React.FC<MyButtonProps> = () => {
  //always give a type !
  const [value, setValue] = useState<Book>({
    name: "Yashraj",
    price: 10,
  });

  return (
    <button
      onClick={() =>
        setValue((value) => ({ ...value, price: value.price + 1 }))
      }
    >
      {value.name} {value.price}
    </button>
  );
};

export const Button1: React.FC<MyButtonProps> = () => {
  //always give a type !
  const [value, setValue] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="hey"
        type="text"
        onChange={handleChange}
        placeholder="Input your name..."
      />
      <p>{value}</p>
      <button>Submit</button>
    </form>
  );
};

export const Button2: React.FC = () => {
  const counter = useCounter();
  return (
    <h1 onClick={() => counter?.setVal((val: number) => val + 1)}>
      {counter?.val}
    </h1>
  );
};
