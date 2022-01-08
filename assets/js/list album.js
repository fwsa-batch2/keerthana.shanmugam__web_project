let albums = "";
let btsAlbumDetails = JSON.parse(localStorage.getItem("AlbumDetails"));
for (let i of btsAlbumDetails) {
    let albumNames = i.AlbumName;
    let price = i.Price;
    let artists = i.ArtistName;
    let imageLink = i.ImageLink;
    console.log(imageLink)
    albums +=
//         `<div class="right" id="songsLists">
//     <div  id="albumInfo">
//     <div class="imgInfo">
//     <img src=\"${imageLink}\" alt="images" width=250px; height=200px;>
//     </div>
//     <div class="info">
//     <p> Album Name : <span class="place">${albumNames}</span></p><br>
//     <p> Price : <span class="price">&#8377;${price}</span></p><br>
//     <p> Artists Name:<span class="guide">${artists}</span></p><br>
//     </div>
//     <div class="buttonInfo">
//     <button type="button">Add To Cart</button>
//     </div>
//     </div>
// </div>`

`<div class="right" id="songsLists">
        <div id="albumInfo">
            <div class="imgInfo">
                <img src=\"${imageLink}\" alt="images" width=250px; height=200px;>
            </div>
            <div class="info">
                <p><strong> Album Name : </strong><span class="place">${albumNames}</span></p>
                <p><strong> Price : </strong><span class="price"> &#8377;${price}</span></p>
                <p><strong> Artists Name: </strong><span class="guide">${artists}</span></p><br>
            </div>
            <div class="buttonInfo">
                <button type="button">Add To Cart</button>
            </div>
        </div>
    </div>`

}

let div = document.getElementById("albumInfo");
div.innerHTML = albums;