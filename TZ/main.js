$(document).mouseleave(function (e) {
  if (e.clientY < 10) {
    $(".exitblock").fadeIn("fast");
  }
});

$(window).on("beforeunload", function () {
  return $(".exitblock").fadeIn("fast");
});
$(document).click(function (e) {
  if (
    $(".exitblock").is(":visible") &&
    !$(e.target).closest(".exitblock .modaltext").length
  ) {
    $(".exitblock").remove();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let deadline = 600000;
  let i = 1;
  let timerId = null;
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  function countdownTimer() {
    const diff = deadline - 1000 * i++;
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    $minutes.dataset.title = declensionNum(minutes, [
      "minute",
      "minutes",
      "minutes",
    ]);
    $seconds.dataset.title = declensionNum(seconds, [
      "second",
      "seconds",
      "seconds",
    ]);
  }
  const $minutes = document.querySelector(".timer_minutes");
  const $seconds = document.querySelector(".timer_seconds");
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});
