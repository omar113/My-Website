import "./Portofolio.css";
import Product from "./Product";
import {products} from "./data";

const Portofolio = () => {
  return (
    <div className="Port">
      <div className="Port-text">
        <h1 className="Port-title">Hello, This is my work.</h1>
        <p className="Port-desc">
          This is where my work has been waiting for a beautiful home & i have
          got lot more inside of me just waiting to get out there.
        </p>
      </div>
      <div className="Port-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />    
          ))}
      </div>
    </div>
  );
};

export default Portofolio;
