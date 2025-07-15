function drawFortune() {
  const fortunes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];
  const result = fortunes[Math.floor(Math.random() * fortunes.length)];

  const resultElement = document.getElementById("result");

  if (result === "大吉") {
    resultElement.style.color = "gold";
    resultElement.style.fontSize = "25px";
    resultElement.innerHTML = `結果は…「${result}」！<br>✨ 今日のあなたは最強です ✨`;
  } else {
    resultElement.style.color = "crimson";
    resultElement.style.fontSize = "24px";
    resultElement.textContent = `結果は…「${result}」！`;
  }
}
