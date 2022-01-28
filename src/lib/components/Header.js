import Avatar from "./Avatar";
import Cell from "./Cell";
import Input from "./Input";

const Header = () => {
  return (
    <div className={`Header`}>
      <div className="Header--left">
        <Input placeholder={"Поиск..."} />
      </div>
      <div className="Header--right">
        <Cell after={<Avatar overlay={"В.А."} />} active={false}>
          Петров В. А.
        </Cell>
      </div>
    </div>
  );
};

export default Header;
