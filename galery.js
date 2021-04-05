var image = document.querySelectorAll(".small");

for (var i = 0; i < image.length; i++) {
  image[i].onclick = showBigPicture;
}

function showBigPicture(event) {
  var addImg = document.querySelector("div");
  addImg.innerHTML = "";
  var src = "img/big/" + event.target.alt + ".jpg";
  var bigImages = document.createElement("img");
  bigImages.src = src;
  addImg.append(bigImages);
  bigImages.onclick = function () {
    addImg.innerHTML = "";
  };
  bigImages.onerror = function () {
    addImg.innerText = "Изображение не найдено";
  };
}
