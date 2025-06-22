// menu toggle 
var toggle = document.getElementsByClassName("mobile-phone")[0]
function show(){
    toggle.style.left = "0%"
}
function hide(){
    toggle.style.left = "-60%"
}
var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(event){
    var enteredValue = event.target.value.toUpperCase()
    for(var i = 0 ; i < productlist.length ; i ++){
        var productName = productlist[i].querySelector("p").textContent

        if(productName.toUpperCase().indexOf(enteredValue) < 0){
            productlist[i].style.display = "none"
        }
        else{
            productlist[i].style.display = "block"
        }
    }
})
