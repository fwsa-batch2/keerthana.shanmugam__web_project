let bt21Products = "";
const bt21ProductDetails = JSON.parse(localStorage.getItem("ALBUM DETAILS"));
for (let i of bt21ProductDetails) {
    let albumNames = i.AlbumName;
    let price = i.Price;
    let artists = i.ArtistName;
    let imageLink = i.ImageLink;
    console.log(imageLink)
    bt21Products +=

        `<div id="albumInfo">
            <div class="imgInfo">
                <img src=\"${imageLink}\" alt="images" width=250px; height=200px;>

                <div class="info">
                    <p><strong> Album Name : </strong> ${albumNames} </p>
                    <p><strong> Price : </strong> &#8377;${price} </p>
                    <p><strong> Artists Name : </strong> ${artists} </p>
                </div>
                <div class="buttonInfo">
                    <button type="button">Add To Cart</button><br>
                </div>
            </div>
        </div>`

}

let div = document.getElementById("albumInfo");
div.innerHTML = bt21Products;