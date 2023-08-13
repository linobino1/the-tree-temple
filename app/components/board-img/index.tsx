import React from "react";
import classes from "./index.module.css";

export type Props = {
  className?: string;
};

export const BoardImg: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={classes.wrapper}>
        <img
          className={classes.board}
          alt='temple phase'
          src="/img/board.webp"
          srcSet='/img/board_300p.webp 300w, /img/board_600p.webp 600w'
        />
      </div>
    </div>
  );
};

export default BoardImg;
