import { nanoid } from "nanoid";

const Paragraphs = ({ paragraphs }) => {
  return (
    <>
      <div id="paragraphs-container" className="p-5 px-1 px-md-3 px-lg-5 mx-1 mx-md-3 mx-lg-5">
        {
          paragraphs.map((item, index) => {
            const newId = nanoid();
            return (
              <div key={newId} className="d-flex single-paragraph">
                <span className="me-2 me-md-3 me-lg-5 fs-3 paragraph-index">{index + 1}</span>
                <p className="d-block lh-lg mb-5">{item}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
export default Paragraphs;