/**
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
 */
// let menuHtml = `
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
// `;

// 取得 DOM 的節點
// let menu = document.getElementById("menu");
// menu.textContent = menuHtml;//寫入節點 文字內容
// menu.innerHTML = menuHtml;//將HTML寫入節點

// console.log(menu);

let menuData = [
    {
        title: "首頁",
        url: "index.html"
    },
    {
        title: "關於我們",
        url: "about.html"
    },
    {
        title: "商品展示",
        url: "products.html"
    },
    {
        title: "資訊",
        url: "store.html"
    }
];

let menuHtml = '';
for(let row of menuData){
    menuHtml += `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="${row.url}">${row.title}</a></li>\n`;
}
let menu = document.getElementById('menu');
menu.innerHTML = menuHtml;

// console.log(menu);

// console.log(menuData[2].title); //Products