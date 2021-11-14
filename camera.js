
        var video = document.querySelector("video");
        function startWebCam() {
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function (stream) {
                        video.srcObject = stream;
                    })
                    .catch(function (err0r) {
                        console.log("Something went wrong!");
                    });
            }
        }
        startWebCam();
    
    // drag and drop
let image = document.getElementById('image');
let img = document.createElement('img');
    img.setAttribute('src','/Users/admin/Desktop/hackathon/sunglasses/rayb4.png');
    image.appendChild(img);

let left =0;
for(var i=0;i<img.length;i++){
    let div = document.createElement('div');
    div.classList.add('box');
    div.setAttribute('draggable','true');
    div.innerText =img[i];
    div.style.left = left + "px";
    left = left + 51;
    image.appendChild(div);
    div.addEventListener('dragend',function(e){
        let x = e.clientX;  //set coordinate
        let y = e.clientY;
        div.style.left = x +'px';
        div.style.top = y + 'px';
    })  
}
