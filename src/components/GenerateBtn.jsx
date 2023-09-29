const GenerateBtn = ({ generate, setGenerate, setShow }) => {

  const handleGenerate = () => {
    setGenerate(!generate);
    setShow(true);
  };

  return (
    <button
      id="generate-btn"
      className="py-1 px-3 mx-2 border-0 rounded"
      onClick={handleGenerate}
      type="button"
    >
      Generate
    </button>
  )
}
export default GenerateBtn;