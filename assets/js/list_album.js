let albums = "";
const DetailsOfAlbum = JSON.parse(localStorage.getItem("ALBUM_DETAILS"));
for (let i of DetailsOfAlbum) {
    const albumName = i.album;
    const priceOfTheAlbum = i.price;
    const artistName = i.artist;
    const imageLink = i.imageUrl;
    console.log(imageLink)
    albums +=

        `<div id="albumInfo">
            <div class="imgInfo">
                <img src=\"${imageLink}\" alt="images" width=250px; height=200px;>

                <div class="info">
                    <p><strong> Album Name : </strong> ${albumName} </p>
                    <p><strong> Price : </strong> &#8377;${priceOfTheAlbum} </p>
                    <p><strong> Artists Name : </strong> ${artistName} </p>
                </div>
                <div class="buttonInfo">
                    <button type="button">Add To Cart</button><br>
                </div>
            </div>
        </div>`

}

let div = document.getElementById("albumInfo");
div.innerHTML = albums;