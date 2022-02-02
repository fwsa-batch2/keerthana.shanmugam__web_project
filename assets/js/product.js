function searchbar(){
  let  searchItem = document.getElementById("search").value;
     if ("lightsticks" == searchItem){
         window.open("./bts_lightsticks.html");
     }
     else if ("bt21" == searchItem){
         window.open("./list_bt21_products.html")
     }
     else if ("albums" == searchItem){
         window.open("./album_list.html")
     }
     else if ("weverse" == searchItem){
         window.open("./weverse.html")
     }
     else if ("vlive" == searchItem){
         window.open("./vlive.html")
     }
     else {
         alert("page not found");
         console.error("page not found")
     }
}