let bt21Products = ""
const bt21ProductDetails = JSON.parse(localStorage.getItem("BT21_PRODUCTS"));
for (let i of bt21ProductDetails) {
    const productName = i.product;
    const priceOfTheProduct = i.price;
    const imageLink = i.imageUrl;
    console.log(imageLink)
     bt21Products +=

        `<div id="productInfo">
            <div class="imgInfo">
                <img src=\"${imageLink}\" alt="images" width=300px; height=250px;>
            
            <div class="info">
                <p><strong> Product Name:</strong> ${productName} </p>
                <p><strong> Price:</strong> &#8377;${priceOfTheProduct} </p>
            </div>
            <div class="buttonInfo">
                <button type="button">Add To Cart</button><br>
            </div>
            </div>
        </div>`
    

}

let div = document.getElementById("productInfo");
div.innerHTML = bt21Products;