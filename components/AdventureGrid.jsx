import style from "../styles/components/AdventureGrid.module.css";
import AdventureSquare from "./AdventureSquare";

export default function AdventureGrid({ adventureData }) {
  // const numSquares = 25;
  // const adventureSquares = [];

  // for (let squareNum = 0; squareNum < numSquares; squareNum++) {
  //   if (adventureData[squareNum]) {
  //     adventureSquares.push(
  //       <AdventureSquare squareData={adventureData[squareNum]} />
  //     );
  //   } else {
  //     adventureSquares.push(<AdventureSquare />);
  //   }
  // }

  const adventureSquares = adventureData.nodes.map((node) => (
    <AdventureSquare squareData={node} />
  ));

  return <div className={style.adventureGrid}>{adventureSquares}</div>;
}
