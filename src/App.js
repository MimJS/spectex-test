import FilterBlock from "./lib/components/FilterBlock";
import Header from "./lib/components/Header";
import Menu from "./lib/components/Menu";
import "./lib/styles/index.scss";

const App = () => {
  const menuItems = [
    {
      name: "Главная",
    },
    {
      name: "Клиенты",
    },
    {
      name: "Сотрудники",
    },
    {
      name: "Аналитика",
    },
  ];
  return (
    <div className="page page--n-main">
      <div className="page--left">
        <Menu menuItems={menuItems} />
      </div>
      <div className="page--content">
        <div className="page--content-header">
          <Header />
          <FilterBlock />
        </div>
        <div className="page--content-in">
          <div className="mainContent">
           <span className="testText">
              MAIN CONTENT - основной блок.
              <br />
              При скроллинге прокручивается данный блок
            </span> 
            <div style={{ height:10000, width:2000 }} />
            <div>Made with love</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
