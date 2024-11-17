import React, { createContext, useContext, useState } from "react";

interface counterContextProps {
  val: number;
  setVal: React.Dispatch<React.SetStateAction<number>>;
}

const counterContext = createContext<counterContextProps | null>(null);

interface counterContextInterface {
  children: React.ReactNode;
}

// export default function CounterContext() {
//   const [value1, setValue1] = useState<number>(0);

//   <counterContext.Provider value={{ value1 }}>
//     {children}
//   </counterContext.Provider>;
// }

// export const CounterContext: React.FC<counterContextInterface> = ({
//   children,
// }) => {
//   return <div>{children}</div>;
// };

// export default function CounterContext({
//   children,
// }: counterContextInterface): React.ReactNode {
//   const [value1, setValue1] = useState<number>(0);

//   return (
//     <counterContext.Provider value={{ value1 }}>
//       {children}
//     </counterContext.Provider>
//   );
// }

export default function CounterContext({ children }: counterContextInterface) {
  const [val, setVal] = useState<number>(0);
  return (
    <counterContext.Provider value={{ val, setVal }}>
      {children}
    </counterContext.Provider>
  );
}

function useCounter(): counterContextProps | null {
  const value = useContext(counterContext);
  if (value === undefined) {
    throw new Error("Context is Used Outside !");
  }
  return value;
}

export { useCounter };
