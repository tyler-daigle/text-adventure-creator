import style from "../styles/components/AdventureSquare.module.css";

export default function AdventureSquare({ squareData }) {
  return (
    <div className={style.adventureSquare}>
      <span>{squareData ? squareData.text : "Empty"}</span>
    </div>
  );
}
