import "./App.css";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <>
      <ExpandableText maxChar={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ex!
        Sed delectus molestias aliquid iure numquam voluptatum, obcaecati
        cupiditate similique explicabo iste culpa nesciunt illum earum debitis
        quae nam dolorem rerum. Repellat sed assumenda dolorem, quidem non nihil
        ut corporis velit esse quae voluptate ab, expedita provident aspernatur
        amet eum.
      </ExpandableText>
    </>
  );
}

export default App;
