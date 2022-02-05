import style from "../styles/components/AdventureGrid.module.css";
import AdventureSquare from "./AdventureSquare";

export default function AdventureGrid({ adventureData }) {
  const adventureSquares = adventureData.nodes.map((node) => (
    <AdventureSquare squareData={node} />
  ));

  return <div className={style.adventureGrid}>{adventureSquares}</div>;
}
