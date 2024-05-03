let contImgs = document.querySelectorAll(".card-portfolio");
let lastOpened;

contImgs.forEach((contImg, index) => {
    contImg.onclick = function () { 

        let img = contImg.firstElementChild;
        let imgSrcData = img.getAttribute("data-src");

        lastOpened = index;

        let container = document.body;
        let imgWindow = document.createElement("div");
        imgWindow.className = "img-window";

        let contImgBig = document.createElement("div");
        contImgBig.className = "cont-img";
        let imgBig = document.createElement("img");
        imgBig.setAttribute("src", imgSrcData);
        imgBig.setAttribute("id", "opened-img");

        
        imgBig.onload = function () {
          

            let prev = document.createElement("a");
            prev.className = "prev";
            prev.onclick = function(){scorri("prev")};
            let prevIcon = document.createElement("i");
            prevIcon.className = "fa-solid fa-circle-chevron-left";
            imgWindow.prepend(prev);
            prev.append(prevIcon);

            let next = document.createElement("a");
            next.className = "next";
            next.onclick = function(){scorri("next")};           
            let nextIcon = document.createElement("i");
            nextIcon.className = "fa-solid fa-circle-chevron-right";
            imgWindow.appendChild(next);
            next.append(nextIcon);

            let close = document.createElement("a");
            close.className = "close";
            let closeIcon = document.createElement("i");
            closeIcon.className = "fa-solid fa-xmark";
            close.onclick = function(){closeGallery()};
            imgWindow.append(close);
            close.append(closeIcon);

         }
        

        container.appendChild(imgWindow);
        imgWindow.appendChild(contImgBig);
        contImgBig.appendChild(imgBig);
    }
    
});

function closeGallery() {
    document.querySelector(".img-window").remove(); 
}
function scorri(direzione) {
    document.querySelector("#opened-img").remove();
    

    let contImg = document.querySelector(".cont-img");
    let nuovaImg = document.createElement("img");
    contImg.appendChild(nuovaImg);

    let actualImg
    let tempImg; 
    let newImgSrc; 

    if (direzione === "prev") {
        console.log(lastOpened);
        actualImg = contImgs[lastOpened - 1]
        if (lastOpened <= 0) {
            lastOpened = contImgs.length - 1;
            actualImg = contImgs[lastOpened];
        }
        lastOpened--;
    }
    else if (direzione === "next") {
        console.log(lastOpened);
        actualImg = contImgs[lastOpened + 1]
        if (lastOpened >= contImgs.length - 1) {
            lastOpened = 0;
            actualImg = contImgs[lastOpened];
        }
        lastOpened++;
    }
    tempImg = actualImg.firstElementChild;
    newImgSrc = tempImg.getAttribute("data-src");
    // console.log(lastOpened);
    // console.log(actualImg);
    // console.log(tempImg);



    nuovaImg.setAttribute("src", newImgSrc);
    nuovaImg.setAttribute("id", "opened-img");

}