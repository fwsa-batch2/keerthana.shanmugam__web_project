function searchbar(){
  let  searchItems = document.getElementById("search").value;
     if ("lightsticks" == searchItems){
         window.open("/pages/bts lightsticks.html");
     }
     else if ("bt21" == searchItems){
         window.open("/pages/list bt21 products.html")
     }
     else if ("albums" == searchItems){
         window.open("/pages/album list.html")
     }
     else if ("weverse" == searchItems){
         window.open("/pages/weverse.html")
     }
     else if ("vlive" == searchItems){
         window.open("/pages/vlive.html")
     }
     else {
         console.error("page not found")
     }
}