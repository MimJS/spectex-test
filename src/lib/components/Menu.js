import Avatar from "./Avatar";
import Cell from "./Cell";

const Menu = ({ menuItems = [] }) => {
  return (
    <div className={`Menu`}>
      <div className={`Menu--logo`}>
        <Cell active={false} before={<Avatar overlay={"LOGO"} />}>NAME COMPANY</Cell>
      </div>
      <div className={`Menu--items`}>
        {menuItems.length > 0
          ? menuItems.map((v, i) => (
              <Cell
                key={i}
                before={<Avatar src={v.imgSrc} overlay={v.avatarOverlay} />}
              >
                {v.name}
              </Cell>
            ))
          : null}
      </div>
    </div>
  );
};

export default Menu;
