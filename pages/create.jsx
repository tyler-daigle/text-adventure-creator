import AdventureGrid from "../components/AdventureGrid";
import { createGrid } from "../shared/adventure-grid";

// const gridData = {
//   adjacenyList: { 0: [1, 9], 1: [9] },
//   0: { text: "This is the start" },
//   1: { text: "This is another node" },
//   9: { text: "A node way ahead." },
//   25: { text: "This is the end" },
// };

function createAdventureData() {
  const adventureData = createGrid(25);
  return adventureData;
}

export default function Create() {
  const gridData = createAdventureData();
  gridData.nodes[0].text = "";
  return (
    <div>
      <h1>Create Your Adventure</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae a
        quibusdam porro modi aliquid alias. Id iusto laborum ad.
      </p>

      <AdventureGrid adventureData={gridData} />
    </div>
  );
}
