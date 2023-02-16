import "./WordDescription.css";
export default function WordDescription() {
  return (
    <div className="WordDescription">
      <div className="type">
        Word type(ex:type)
        <hr />
      </div>
      <div className="definition">
        <h3>Meaning</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            suscipit porro dolor ut dicta illum quasi tempora fuga rerum. Eum,
            eveniet veritatis consequatur voluptas eligendi iste maiores aut ut
            voluptatibus.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            suscipit porro dolor ut dicta.
          </li>
        </ul>
        <div className="synonyms">
          <p>
            Synonyms:<span>blablabls</span>
          </p>
        </div>
      </div>
    </div>
  );
}
