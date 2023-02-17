export default function WordDefinition({definition}) {
  return (
    <>
      <li>{definition.definition}</li>
      <p>{definition.example ? `"${definition.example}"` : ""}</p>
    </>
  );
}
