import React from "react";
import classes from "./index.module.css";

export type Props = {
  className?: string;
};

export const BoardImg: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={classes.wrapper}>
        <img className={classes.board} src="/img/board.png" alt='temple phase'/>
      </div>
    </div>
  );
};

export default BoardImg;
