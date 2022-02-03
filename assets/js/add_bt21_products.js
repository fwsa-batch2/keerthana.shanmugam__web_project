let products = [];

function pageOnLoad() {
    const bt21Products = JSON.parse(localStorage.getItem("BT21_PRODUCTS"));
    if (bt21Products != null) {
        products = bt21Products;
    }
}

// it is an onsubmit function
function addProducts(event) {
    event.preventDefault();

    const nameOfTheProducts = document.getElementById("productName").value;
    const price = document.getElementById("priceValue").value;
    const imageLink = document.getElementById("imageLink").value

    const bt21Details = {
        "product": nameOfTheProducts,
        "price": price,
        "imageUrl": imageLink,
    };

    products.push(bt21Details);
    localStorage.setItem("BT21_PRODUCTS", JSON.stringify(products));
    
    //after submit page redirect to list_bt21_products.html
    window.location.href = "./../pages/list_bt21_products.html";

}

pageOnLoad()