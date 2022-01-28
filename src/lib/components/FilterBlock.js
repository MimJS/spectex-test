import { SettingsIcon } from "../icons";
import { useState } from "react";
import Input from "./Input";

const FilterBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeState = () => {
    setIsOpen(!isOpen);
  };
  const filterRows = [
    ["Дата от", "Дата до", "Дата от", "Дата до"],
    ["Имя клиента", "Телефон", "Имя клиента", "Телефон"],
  ];
  return (
    <div className={`filterBlock ${isOpen ? "filterBlock--active" : null}`}>
      <div className="filterBlock--header">
        <span className="title">FILTER BLOCK</span>
        <SettingsIcon className="switchButton" onClick={() => changeState()} />
      </div>
      <div className="filterBlock--inputs">
        <div className="filterBlock--inputs-row">
          {filterRows[0].map((v, i) => (
            <Input key={i} placeholder={v} />
          ))}
        </div>
        <div className="filterBlock--inputs-row">
          {filterRows[1].map((v, i) => (
            <Input key={i} placeholder={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
