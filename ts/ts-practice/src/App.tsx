import { Button, Button1, Button2 } from "./components/Button";
import CounterContext from "./contexts/CounterContext";

export default function App() {
  return (
    <CounterContext>
      <div>
        <Button text={true} />
        <Button1 text={true} />
        <Button2 />
      </div>
    </CounterContext>
  );
}
