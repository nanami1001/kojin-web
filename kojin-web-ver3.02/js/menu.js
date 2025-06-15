document.getElementById("menu-button").addEventListener("click", function () {
    sidebar.style.width = "250px";
});
document.getElementById("close-button").addEventListener("click", function () {
    sidebar.style.width = "0";
});

// 取得當前頁面 URL
const currentPage = window.location.pathname.split("/").pop();

// 定義對應的按鈕 ID
const pageLinks = {
    "index.html": "homeLink",
    "about.html": "aboutLink",
    "futrue.html": "futureLink",
    "workmov.html": "workLink",
    "other.html": "otherLink"
};

// 如果當前頁面對應到選單中的連結，則加上 active 類別
if (pageLinks[currentPage]) {
    const activeLink = document.getElementById(pageLinks[currentPage]);
    if (activeLink) activeLink.classList.add("active");
}

