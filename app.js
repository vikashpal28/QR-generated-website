let text = document.getElementById("text");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrimage");


function generatorQr(){
    if(text.value.length>0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
    imgBox.classList.add("show-img");
    }
    else{
        text.classList.add("error");
        setTimeout(()=>{
            text.classList.remove("error");
        },1000);
    }
}