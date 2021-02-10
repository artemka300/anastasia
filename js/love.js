document.addEventListener("DOMContentLoaded", () => {
  const mail = document.querySelector(".mail");
  const loveText = document.getElementById("loveText");
  const text = document.querySelector(".text_love");
  const heart = document.querySelector(".loveHeart");
  const textmail = document.querySelector(".textmail");
  const ivan = document.querySelector(".ivan");
  const body = document.body;

  setInterval(() => {
    textmail.style.opacity = "1";
  }, 500);
  text.classList.add("blockNone");
  function namenast() {
    ivan.style.display = "flex";
    let frames = 0;
    const nst = "Я люблю тебя, Настя!";
    const fs = setInterval(textUp, 210);
    let nest = [];
    function textUp() {
      if (frames > nst.length - 2) {
        nest[frames] = nst[frames];
        frames++;
        clearInterval(fs);
        loveText.textContent = `${nest.join("")}`;
        heart.style.opacity = "1";
        setTimeout(() => {
          ivan.style.marginRight = "0vw";
          setTimeout(() => {
            ivan.style.transition = "0s";
            active();
          }, 2000);
        }, 1000);
      } else {
        nest[frames] = nst[frames];
        console.log(nest.join(""));
        loveText.textContent = `${nest.join("")}|`;
        frames++;
      }
    }
  }

  function love() {
    let frame = 0;
    const f = setInterval(animlove, 10);

    function animlove() {
      text.style.opacity = frame / 100;
      console.log(frame);
      frame++;
      body.style.background = " rgb(0, 0, 0)";
      loveText.style.color = " rgb(255, 255, 255)";
      if (frame == 100) {
        clearInterval(f);
        namenast();
      }
    }
    function nameNst() {}
  }

  text.style.opacity = "0";
  mail.addEventListener("click", () => {
    textmail.style.display = "none";
    mail.style.width = "1px ";
    text.classList.remove("blockNone");
    love();
  });

  function active() {
    heart.addEventListener("click", () => {
      heart.style.transition = "3s";
      loveText.textContent = ``;
      text.style.marginTop = "15vh";
      heart.style.width = "50vw";
      heart.style.height = "60vh";
    });
    ivan.addEventListener("click", () => {
      ivan.style.transition = "2s";
      ivan.style.marginRight = "-100vw";
      setInterval(() => {
        ivan.style.display = "none";
      }, 2000);
    });
  }
});
