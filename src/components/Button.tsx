import { MouseEvent } from "react";

interface Props {
  text: String;
  color?: "primary" | "secondary" | "danger";
  onClick: (event: MouseEvent) => void;
}

const Button = ({ text, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
