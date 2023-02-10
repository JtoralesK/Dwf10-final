import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
type Prop = {
  state: boolean;
};
function ButtonMenu(p: Prop) {
  const style = { fontSize: "30px", fill: "white" };
  return (
    <>
      {p.state ? (
        <AiOutlineClose style={style} />
      ) : (
        <AiOutlineMenu style={style} />
      )}
    </>
  );
}

export { ButtonMenu };
