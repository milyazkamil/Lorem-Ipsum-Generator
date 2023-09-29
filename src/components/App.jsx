import { useEffect, useState } from "react";
import Paragraphs from "./Paragraphs";
import Form from "./Form";
import Title from "./Title";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState(1);
  const [generate, setGenerate] = useState(false);
  const [show, setShow] = useState(false);
  
  // hipsum api
  const url = `https://hipsum.co/api/?type=hipster-centric&paras=${count}`;
  
  useEffect(() => {
    const getParagraphs = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error("There is an error!");
        }
        const data = await resp.json();
        setParagraphs(data);
      } catch (error) {
        console.log(error);
      }
    }
    getParagraphs();
  }, [generate]);
  return (
    <>
      <main id="main-container" className="text-center p-2 p-md-3 p-lg-5">
        <Title />
        <div
          id="form-container"
          className="d-flex align-items-center justify-content-center"
        >
          <Form
            count={count}
            setCount={setCount}
            generate={generate}
            setGenerate={setGenerate}
            setShow={setShow}
          />
        </div>
        {
          show === false ? (<></>) : (
            <Paragraphs paragraphs={paragraphs} />
          )
        }
      </main>
    </>
  )
}
export default App;
