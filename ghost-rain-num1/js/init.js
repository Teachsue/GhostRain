const player = new Hero();
let ghost = [];

function init() {
  document.addEventListener(
    "keydown",
    function (e) {
      checkKey(e, true);
    },
    false
  );

  document.addEventListener(
    "keyup",
    function (e) {
      checkKey(e, false);
    },
    false
  );

  setInterval(function () {
    initGhost();
  }, 3000);

  window.requestAnimationFrame(updateAllghosts);
}

function checkKey(e, isMoving) {
  if (isMoving) {
    const keyID = e.keyCode || e.which;

    switch (keyID) {
      case 39: //right
        player.move("right");
        e.preventDefault();
        break;
      case 37: //left
        player.move("left");
        e.preventDefault();
        break;
    }
  } else {
    player.stop();
  }
}

function initGhost() {
  const ghost = new Ghost();
  ghosts.push(ghost);
}

function updateAllghosts() {
  ghosts.forEach((el, idx) => {
    if (!el.isDead) {
      el.move(player);
    } else {
      ghosts.splice(idx, 1);
    }
  });
  // initGhost 부분은 어려워서 답안을 참조 하였다.
  // 해당 부분에 대해서 다시 한번 읽어 볼 것.
  window.requestAnimationFrame(updateAllghosts);
}

init();

// document.addEventListener("keyup", function (e) {
//   heroElement.className = "stop";
// });

// document.addEventListener("keydown", function (e) {
//   console.log(e.keyCode);

//   //399 getComputedStyle은 아직 스타일이 없어서 사용한 명령어
//   const heroLeft = getComputedStyle(heroElement).left;
//   console.log("용사의 왼쪽 값 =>", heroLeft);

//   // split는 문자 변수에서 쓸 수 있는데 'px' 기준으로 나누고 배열을 만든다.
//   // heroLeft.split('px')[0] <- 문자열이라 숫자로 바꿔줘야 함 Number() 가 해당 역할
//   const heroLeftWithoutPx = Number(heroLeft.split("px")[0]);
//   console.log(
//     "heroLeftWithoutPx =>",
//     typeof heroLeftWithoutPx,
//     heroLeftWithoutPx
//   );

//   //화면에서 키 누르면 발생할 동작
//   //keycode left : 37 / right : 39
//   // 용사의 left가 0보다 작아지거나 or 765(BG_width_hero_width)보다 커질 때.

//   if (heroLeftWithoutPx - 10 < 0 && e.keyCode === 37) {
//     //return.. 함수를 종료
//     return;
//   }

//   if (heroLeftWithoutPx + 10 > BG_WIDTH - HERO_WIDTH && e.keyCode === 39) {
//     //return.. 함수를 종료
//     return;
//   }

//   if (e.keyCode === 37) {
//     //왼쪽키
//     //398
//     heroElement.style.left = heroLeftWithoutPx - 20 + "px";
//     heroElement.className = "left";

//     // console.log("용사의 왼쪽 값 -1 =>", heroLeftWithoutPx - 1);
//   } else if (e.keyCode === 39) {
//     // 오른쪽 키

//     //399
//     heroElement.style.left = heroLeftWithoutPx + 20 + "px";
//     // console.log("용사의 왼쪽 값 +1 =>", heroLeftWithoutPx + 1);
//     heroElement.className = "right";
//   }
// });
