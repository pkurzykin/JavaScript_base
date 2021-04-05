var imgArr = ["car_1.jpg", "car_2.jpg", "car_3.jpg", "car_4.jpg"];

var arrIndex = 0;

function forward() {
  var img = document.querySelector("img");
  if (arrIndex == imgArr.length - 1) {
    arrIndex = 0;
  } else {
    arrIndex++;
  }
  img.src = "img/small/" + imgArr[arrIndex];
}

function backward() {
  var img = document.querySelector("img");
  if (arrIndex == 0) {
    arrIndex = imgArr.length - 1;
  } else {
    arrIndex--;
  }
  img.src = "img/small/" + imgArr[arrIndex];
}
