import "./Product.css"

const Product = ({img, link}) => {
    return (
        <div className="Prod">
            <div className="Prod-browser">
                <div className="Prod-browser-btn-1"></div>
                <div className="Prod-browser-btn-2"></div>
                <div className="Prod-browser-btn-3"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="Prod-img" />
            </a>
        </div>
    );
};

export default Product;