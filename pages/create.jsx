import AdventureGrid from "../components/AdventureGrid";
import { createGrid, setNode, createNode } from "../shared/game-grid";

// const gridData = {
//   adjacenyList: { 0: [1, 9], 1: [9] },
//   0: { text: "This is the start" },
//   1: { text: "This is another node" },
//   9: { text: "A node way ahead." },
//   25: { text: "This is the end" },
// };

function createAdventureData() {
  let adventureData = createGrid(25);
  adventureData = setNode(0, adventureData, {
    text: "First Item",
    choices: [],
  });
  adventureData = setNode(14, adventureData, {
    text: "Item 14 is here",
    choices: [],
  });
  adventureData = setNode(6, adventureData, {
    text: "Item 6 is here",
    choices: [],
  });
  adventureData = setNode(9, adventureData, {
    text: "Item 9 is here",
    choices: [],
  });
  adventureData = setNode(23, adventureData, {
    text: "Item 23 is here",
    choices: [],
  });
  return adventureData;
}

export default function Create() {
  const gridData = createAdventureData();
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
