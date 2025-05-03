import "./App.css";
import { Button, Link, Text } from "@components";
import { Navbar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Text as={"h1"} variant="heading1">
        heading1
      </Text>
      <Text as={"h1"} variant="heading2">
        heading2
      </Text>
      <Text as={"h1"} variant="body">
        body
      </Text>
      <Text as={"h1"} variant="button">
        button
      </Text>
      <Link onClick={() => console.log("Hello")}>Link</Link>
      <Text as={"h1"} variant="label1">
        label1
      </Text>
      <Text as={"h1"} variant="label2">
        label2
      </Text>
      <Button>Button</Button>
    </div>
  );
}

export default App;
