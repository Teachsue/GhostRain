function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

class Ghost {
  constructor() {
    this.isDead = false;
    this.create();
  }

  create() {
    this.ghostElement = document.createElement("div");
    this.Top = 0;

    this.ghostElement.style.position = "absolute";
    this.ghostElement.style.top = this.Top + "px";
    this.ghostElement.style.left =
      randomRange(0, BG_WIDTH - GHOST_WIDTH) + "px";

    this.ghostElement.style.width = GHOST_WIDTH + "px";
    this.ghostElement.style.height = GHOST_HEIGHT + "px";
    this.ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

    bg.appendChild(this.ghostElement);

    window.requestAnimationFrame(() => {
      this.move(this.Top, this.ghostElement);
    });
  }

  move() {
    this.Top++;

    if (this.Top > BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
      const ghostLeft = Number(this.ghostElement.style.left.split("px")[0]);
      // const heroLeft = Number(player.heroElement.style.left.split("px")[0]);

      if (
        hero.Left < ghostLeft + GHOST_WIDTH &&
        hero.Left + HERO_WIDTH > ghostLeft
      ) {
        this.isDead = true;
        this.die();
        return;
      }

      if (this.Top > BG_HEIGHT - GHOST_HEIGHT) {
        this.isDead = true;
        this.remove();
        return;
      }
    }

    this.ghostElement.style.top = this.Top + "px";

    // window.requestAnimationFrame(() => {
    //   this.move();
    // });
  }

  remove() {
    this.ghostElement.remove();
  }

  die() {
    this.ghostElement.style.backgroundPosition = "-45px";

    const soundEffect = new Audio("./audio/dying.wav");
    soundEffect.play();

    setTimeout(() => {
      this.remove(this.ghostElement);
    }, 3000);
  }
}

//   setInterval(function () {
//     // 1. 고스트 요소 접근
//     // 2. top 가져온다,   // 3. 2번에서 숫자 추출, 1 + px
//     let ghostTopNum = Number(ghostElement.style.top.split("px")[0]) + 10;
//     let ghostLeftNum = Number(ghostElement.style.left.split("px")[0]);
//     let heroLeftNum = Number(heroElement.style.left.split("px")[0]);

//     // ghostElement.style.top  top의 값
//     if (ghostTopNum > BG_HEIGHT - (GHOST_HEIGHT + HERO_HEIGHT)) {
//       if (
//         ghostLeftNum < heroLeftNum &&
//         heroLeftNum < ghostLeftNum + GHOST_HEIGHT
//       ) {
//         killghost(ghostElement);
//         return;
//       }
//     }

//     if (ghostTopNum > BG_HEIGHT - GHOST_HEIGHT) {
//       ghostElement.remove();
//       return;
//     }

//     ghostElement.style.top = ghostTopNum + "px";

//     // 4. 다시 할당
//   }, 200);
// }
// function killghost(ghostElement) {
//   ghostElement.classList.add("die");
//   ghostElement.style.backgroundPosition = "-45px";
//   setTimeout(function () {
//     ghostElement.remove();
//   }, 3000);
// }

// createGhost();

// setInterval(createGhost, 1500);

// function randomRange(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min)) + min;
// }
