window.addEventListener("load", displayLogo);
setInterval(changeLogo, 1000);
document.querySelector(".fa-info-circle").addEventListener("click", toggleInfoModalVisibility);
document.querySelector(".close").addEventListener("click", toggleInfoModalVisibility);
window.addEventListener("click", function(e) {
    if (e.target === document.querySelector(".modal")) {
        toggleInfoModalVisibility();
    }
});

function displayLogo() {
  const logo = document.querySelector("text");
  for (let i = 0; i<=2; i++) {
    logo.innerHTML += getMonograph();
  }
}

function changeLogo() {
  const logo = document.querySelector("text");  
  const randomNum = Math.floor(Math.random() * 3);
  logo.innerHTML = logo.innerHTML.replace(logo.innerHTML[randomNum], getMonograph());
}

function getMonograph() {
  const monographs = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ",
	"ハ",  "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];
	const randomChar = Math.floor(Math.random() * 46);
	return monographs[randomChar];
}

function toggleInfoModalVisibility() {
  document.querySelector(".modal").classList.toggle("hide");
}