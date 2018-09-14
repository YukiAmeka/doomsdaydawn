window.addEventListener('load', displayLogo);
setInterval(changeLogo, 1000);

function displayLogo() {
  const monographs = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ",
	"ハ",  "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];
  const logo = document.querySelector('text');
  for (let i = 0; i<=2; i++) {
    const randomChar = Math.floor(Math.random() * 46);
    logo.innerHTML += monographs[randomChar];    
  }
}

function changeLogo() {
  const monographs = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ",
	"ハ",  "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];
  const logo = document.querySelector('text');  
  const randomChar = Math.floor(Math.random() * 46);
  const randomNum = Math.floor(Math.random() * 3);
  logo.innerHTML = logo.innerHTML.replace(logo.innerHTML[randomNum], monographs[randomChar]);
}
	