import "./App.css";
import Info from "./Card.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="ParentDiv">
      <section className="NavbarSection">
        <Navbar />
      </section>
      <section className="CardSection">
        <div className="Container">
          <div className="Cards">
            {Info.map((Info) => {
              return (
                <a href="#" className="CardLink">
                  <div className="Card" key={Info.id}>
                    <i className={Info.FontawsomeIcon}></i>
                    <h2>{Info.CardName}</h2>
                    {/* <p>amazing food</p> */}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
