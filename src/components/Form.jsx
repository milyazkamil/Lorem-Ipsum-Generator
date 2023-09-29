import GenerateBtn from "./GenerateBtn";

const Form = ({ count, setCount, generate, setGenerate, setShow }) => {
  return (
    <form id="form">
      <label htmlFor="amount" className="me-3 mb-3 fs-5">
        Paragraphs
      </label>
      <input
        className="py-1 px-2 mx-2 border border-0 rounded"
        type="number"
        id="amount"
        name="amount"
        min={1}
        max={100}
        step={1}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <GenerateBtn
        generate={generate}
        setGenerate={setGenerate}
        setShow={setShow}
      />
    </form>
  )
}
export default Form;