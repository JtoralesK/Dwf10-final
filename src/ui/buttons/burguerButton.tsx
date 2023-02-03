import css from "./burguerButton.module.css";
type Prop = {
  state: boolean;
};
function ButtonMenu(p: Prop) {
  return (
    <span className={p.state ? css.cruz : css.menu}>
      <div></div>
      <div></div>
      <div></div>
    </span>
  );
}

export { ButtonMenu };
