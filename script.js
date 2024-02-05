document.addEventListener("DOMContentLoaded", function () {
  const player = document.querySelector(".player");
  const targets = document.querySelectorAll(".target");
  const scoreDisplay = document.getElementById("score");

  let score = 0;

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" && parseInt(player.style.left) > 0) {
      player.style.left = parseInt(player.style.left) - 10 + "px";
    } else if (
      event.key === "ArrowRight" &&
      parseInt(player.style.left) < 550
    ) {
      player.style.left = parseInt(player.style.left) + 10 + "px";
    } else if (event.key === " " && isPlayerColliding()) {
      score++;
      updateScore();
      resetTarget();
    }
  });

  function isPlayerColliding() {
    const playerRect = player.getBoundingClientRect();

    return Array.from(targets).some((target) => {
      const targetRect = target.getBoundingClientRect();
      return !(
        playerRect.right < targetRect.left ||
        playerRect.left > targetRect.right ||
        playerRect.bottom < targetRect.top ||
        playerRect.top > targetRect.bottom
      );
    });
  }

  function updateScore() {
    scoreDisplay.textContent = "Score: " + score;
  }

  function resetTarget() {
    const randomTarget = Math.floor(Math.random() * 3);
    const target = targets[randomTarget];
    target.style.left = Math.floor(Math.random() * 500) + "px";
    target.style.top = Math.floor(Math.random() * 300) + "px";
  }
});
