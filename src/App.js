import "./App.css";
import Info from "./Card.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hospital from "./Pages/Hospital";
function App() {
  console.log(Info);
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
                <a href={Info.CardLink} className="CardLink" key={Info.id}>
                  <div className="Card">
                    <i className={Info.FontawsomeIcon}></i>
                    <h2>{Info.CardName}</h2>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      {/* <Hospital /> */}
    </div>
  );
}

export default App;
