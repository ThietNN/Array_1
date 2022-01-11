let x = 0;
let array = Array ();
function add(){
    array[x] = document.getElementById("input").value;
    alert("Element " + array[x] + " is added to index " + x);
    x++;
    document.getElementById("input").value = "";
}
function display(){
    let z = "<hr>";
    for (let i=0;i<array.length;i++){
        z += "Element " + i + " = " + array[i] + "</br>";
    }
    document.getElementById("result").innerHTML = z;
}