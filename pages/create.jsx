import AdventureGrid from "../components/AdventureGrid";

const gridData = {
  adjacenyList: { 0: [1, 9], 1: [9] },
  0: { text: "This is the start" },
  1: { text: "This is another node" },
  9: { text: "A node way ahead." },
  25: { text: "This is the end" },
};

export default function Create() {
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
