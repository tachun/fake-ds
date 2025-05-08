import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello, this is the fake ds</h1>
      <Button asChild>
        <a href="/registry.json">Get Registry</a>
      </Button>
    </>
  );
}

export default App;
