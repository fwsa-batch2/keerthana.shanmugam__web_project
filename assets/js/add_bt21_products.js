let products = [];

function pageOnLoad() {
    const bt21Products = JSON.parse(localStorage.getItem("BT21_PRODUCTS"));
    if (bt21Products != null) {
        products = bt21Products;
    }
}
pageOnLoad()

// it is an onsubmit function
function addProducts(event) {
    event.preventDefault();

    //calling id from input fields from the form
    const nameOfTheProducts = document.getElementById("productName").value;
    const price = document.getElementById("priceValue").value;
    const imageLink = document.getElementById("imageLink").value

    const bt21Details = {
        "product": nameOfTheProducts,
        "price": price,
        "imageUrl": imageLink,
    };

    let thisImageUrlAlreadyExists = imageUrlValidation(imageLink);

    if(thisImageUrlAlreadyExists){
        alert("This Image Url already exists");
        return;
    }

    products.push(bt21Details);
    localStorage.setItem("BT21_PRODUCTS", JSON.stringify(products));
    
    //after submit page redirect to list_bt21_products.html
    window.location.href = "./../pages/list_bt21_products.html";

}

//checking the imageUrl is already exists
function imageUrlValidation(url) {
console.group("imageUrlValidation")
  let imageUrlExists = false;
  
    for (let i of products) {
      const image = i.imageUrl;
  
      if (url == image) {
        imageUrlExists = true;
        break;
      }
    }
    console.groupEnd("imageUrlValidation")
    return imageUrlExists;
  }