let BT21Products = [];

function pageOnLoad() {
    const bt21Products = JSON.parse(localStorage.getItem("BT21_PRODUCTS"));
    if (bt21Products != null) {
        BT21Products = bt21Products;
    }
}

// it is an onsubmit function
function addProducts(event) {
    event.preventDefault();

    let nameOfTheProducts = document.getElementById("productName").value;
    let price = document.getElementById("priceValue").value;
    let imageLink = document.getElementById("imageLink").value

    const bt21Details = {
        "ProductName": nameOfTheProducts,
        "Price": price,
        "ImageLink": imageLink,
    };

    BT21Products.push(bt21Details);
    localStorage.setItem("BT21_PRODUCTS", JSON.stringify(BT21Products));

    window.location.href = "./../pages/list_bt21_products.html";

}

pageOnLoad()