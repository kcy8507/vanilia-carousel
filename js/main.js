let imgBtn1 = document.querySelector(".img--1");
let imgBtn2 = document.querySelector(".img--2");
let imgBtn3 = document.querySelector(".img--3");
let prevBtn = document.querySelector(".slide-nav__prev");
let nextBtn = document.querySelector(".slide-nav__next");
const container = document.querySelector(".slide-container");
//버튼1을 클릭하면 슬라이드 컨테이너가 트랜스폼 0
//버튼2을 클릭하면 슬라이드 컨테이너가 트랜스폼 -100
//버튼3을 클릭하면 슬라이드 컨테이너가 트랜스폼 -200
let imgIndex = 0;
imgBtn1.addEventListener("click", function () {
  container.style.transform = `translateX(${0}vw)`;
  imgIndex = 0;
  console.log(imgIndex);
});
imgBtn2.addEventListener("click", function () {
  container.style.transform = `translateX(${-100}vw)`;
  imgIndex = 1;
  console.log(imgIndex);
});
imgBtn3.addEventListener("click", function () {
  container.style.transform = `translateX(${-200}vw)`;
  imgIndex = 2;
  console.log(imgIndex);
});

prevBtn.addEventListener("click", function () {
  //prevBtn누르면 그림 인덱스에 따라서 트렌슬레이트 값을 준다.
  //0 :0
  //1: -100
  //2: -100
  console.log("click");
  if (imgIndex == 2) {
    container.style.transform = `translateX(${-100}vw)`;
    imgIndex -= 1;
    console.log("2페이지로 가겠습니다");
  } else if (imgIndex == 1) {
    container.style.transform = `translateX(${0}vw)`;
    imgIndex -= 1;
    console.log("1페이지로 가겠습니다");
  } else {
    container.style.transform = `translateX(${0}vw)`;
    imgIndex = 0;
    console.log("0페이지입니다");
  }

  console.log(imgIndex);
});
nextBtn.addEventListener("click", function () {
  console.log("click");
  if (imgIndex == 2) {
    container.style.transform = `translateX(${-100}vw)`;
    imgIndex += 1;
    console.log("2페이지로 가겠습니다");
  } else if (imgIndex == 1) {
    container.style.transform = `translateX(${0}vw)`;
    imgIndex += 1;
    console.log("1페이지로 가겠습니다");
  } else {
    container.style.transform = `translateX(${0}vw)`;
    imgIndex = 0;
    console.log("0페이지입니다");
  }

  console.log(imgIndex);
});
