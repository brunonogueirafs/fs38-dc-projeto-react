
import "./Home.css";
function Home() {
  return (
    <>
    <div className="hightlights gap-3 d-flex justify-content-between">
      <div className="card w-100">
        <div className="card-bory d-flex">
          <img className="icon-dollar" src={DollarIcon} alt="" />
          <div className="info">
          <p className="fw-light">Total De vendas</p>
          <p className="fs-2">R$ 2.549,78</p>
        </div>
      </div>
    </div>
    </div>
  </>
  );
}

export default Home;
