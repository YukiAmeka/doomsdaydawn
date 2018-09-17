window.addEventListener("load", getJsonDataOnLoad);
document.querySelectorAll("main .summaries aside ul .summary-link")
    .forEach( el => el.addEventListener("click", getJsonDataOnClick));
document.querySelectorAll("main .summaries aside ul .dropdown-btn")
    .forEach( el => el.addEventListener("click", dropdown));

function dropdown(e) {
   document.querySelector(".dropdown-container").classList.toggle("hide");
}

function getJsonDataOnLoad() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const summaryData = JSON.parse(xhr.responseText);
            const lastSummary = summaryData.length-1;
            const summaryEl = summaryData[lastSummary];
            fillInSummary(summaryEl, lastSummary);
        }
        if (xhr.readyState === 4 && xhr.status !== 200 ) {
            console.error('Error occured: ' + xhr.status);
        }
    }
    xhr.open("GET", "summaries.json?r="+Math.random(), true);
    xhr.send();
}

function getJsonDataOnClick(el) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const summaryData = JSON.parse(xhr.responseText);
            const summaryId = el.target.innerText.slice(-1);
            const summaryEl = getSummaryById(summaryData, summaryId);
            summaryEl === undefined ? fillInSummary(summaryData[0], summaryId) : fillInSummary(summaryEl, summaryId);
        }
        if (xhr.readyState === 4 && xhr.status !== 200 ) {
            console.error('Error occured: ' + xhr.status);
        }
    }
    xhr.open("GET", "summaries.json?r="+Math.random(), true);
    xhr.send();
}

function getSummaryById(array, passedId) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === passedId) {
            return array[i];
        }
    }
}

function fillInSummary(summary, passedId) {
    document.querySelector("main .summaries section .summary-heading")
        .innerText = "Summary of Session " + passedId;
    document.querySelector("main .summaries section .summary-text")
        .innerText = summary.descrip;
}
