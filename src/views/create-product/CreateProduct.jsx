import { useNavigate } from "react-router";
import"./CreateProduct.css";
import { productListDashboard } from "../../../../router/dashboard/dashboard-routes-config";

function Home() {
    const navigate = useNavigate();
    const addProduct = () => {
        const formProduct = document.forms[0];
        const formData = new FormData(formProduct);
        const product = Object.fromEntries(FormData);
        createProduct (product);
    };

    const createProduct = (product) => {
        fetch("http://localhost:3000/product", {
            method:"post",
            body: JSON.stringify(product),
            headers:{
                "Content-type":"application/json",
            },
        }).then((response) => {
            navigate(productListDashboard);
        });
    };

    return (
        <>
        <form id= "form-product">
            <div className="form-controller row">
                <label htmlFor="product_name"> Nome do produto</label>
                <input type="text" name="name" />
            </div>
            <div className="form-controller row">
                <label htmlFor="product_name"> marca</label>
                <input type="text" name="brand" />
            </div>
            <div className="form-controller row">
                <label htmlFor="product_name"> descriçao</label>
                <input type="text" name="brand" />
            </div>
            <button className="btm btn-success" type="button" onClick={addProduct}>Cadastar</button>
        </form>
        </>

    );
}
export default Home;