import {codeToText } from "./styleHelper.js";

document.getElementById("weatherBtn").addEventListener("click", async () => {
  const resultDiv = document.getElementById("weatherResult");
  const reviewDiv = document.getElementById("myReviewArea");
  
  resultDiv.textContent = "読み込み中...";
  reviewDiv.textContent = "";

  //緑山スタジオの緯度と経度
  const url = "https://api.open-meteo.com/v1/forecast?latitude=35.5647&longitude=139.4851&current=temperature_2m,weather_code&timezone=Asia%2FTokyo";

  const response = await fetch(url);
  const data = await response.json();

  const temp = data.current.temperature_2m;
  const code = data.current.weather_code;

  //styleHelperからデータをもらう
  const weatherInfo = codeToText(code);

  //天気と気温を表示
  resultDiv.textContent = `今の緑山スタジオの天気は、、${weatherInfo.text}！（気温：${temp}℃）`;
  
  //感想を表示
  reviewDiv.innerHTML = ` <div style="background-color: #eef5ff; padding: 10px; margin-top: 15px;">【僕がこの天気に思うことは！？】<br>${weatherInfo.myReview}</div>`;
});