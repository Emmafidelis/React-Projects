import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["New York", "Dubai", "Sweden", "Paris"];

  const handleSelect = (item: string) => console.log(item);

  return (
    <>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelect} />
    </>
  );
}

export default App;
