let bt21Products = "";
let bt21ProductDetails = JSON.parse(localStorage.getItem("BT21ProductDetails"));
for (let i of bt21ProductDetails) {
    let productNames = i.ProductName;
    let price = i.Price;
    let imageLink = i.ImageLink;
    console.log(imageLink)
    bt21Products +=

        `<div class="right" id="productLists">
        
        <div id="productInfo">
            <div class="imgInfo">
                <img src=\"${imageLink}\" alt="images" width=300px; height=250px;>
            
            <div class="info">
                <p><strong> Product Name : </strong><span class="place"> ${productNames} </span></p>
                <p><strong> Price : </strong><span class="price"> &#8377;${price} </span></p>
            </div>
            <div class="buttonInfo">
                <button type="button">Add To Cart</button><br>
            </div>
            </div>
        </div>
    </div>`

}

let div = document.getElementById("productInfo");
div.innerHTML = bt21Products;