function o(i){
    console.log(i)
    document.getElementById("input").value = document.getElementById("input").value + i 

}
console.log("working....")
function AC(){
    document.getElementById("input").value=""
}
function equal(){
    var x= document.getElementById("input").value
    var r =eval(x)
    document.getElementById("input").value=r

}