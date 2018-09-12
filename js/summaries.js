const sideMenuLink = document.querySelectorAll('main .summaries aside ol .dropdown-btn');
sideMenuLink.forEach( el => el.addEventListener('click', dropdown));

function dropdown(e) {
    const submenu = e.target.querySelector('.dropdown-container');
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
}

const subMenuList = document.querySelectorAll('main .summaries aside ol li ul li a');
subMenuList.forEach( el => el.addEventListener('click', showSummary));

function showSummary(e) {
    const sumTextId = '#' + e.target.name;
    const sumTextDiv = document.querySelector(sumTextId);
    sumTextDiv.style.display = "block";
}

