function searchbar(){
  let  searchItem = document.getElementById("search").value;
     if ("lightsticks" == searchItem){
         window.open("/pages/bts lightsticks.html");
     }
     else if ("bt21" == searchItem){
         window.open("/pages/list bt21 products.html")
     }
     else if ("albums" == searchItem){
         window.open("/pages/album list.html")
     }
     else if ("weverse" == searchItem){
         window.open("/pages/weverse.html")
     }
     else if ("vlive" == searchItem){
         window.open("/pages/vlive.html")
     }
     else {
         alert("page not found");
         console.error("page not found")
     }
}