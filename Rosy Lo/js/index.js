const searchClick = document.querySelector(".search");
const heightc = document.querySelector("header");
const search_mobile = document.querySelector(".searchMobile");
const form_mobile = document.querySelector(".form_mobile");
const logo_mobile = document.querySelector(".logo");

let paging = null;
let tagParam = null;
let keywordParam = null;
let products = null;

search_mobile.addEventListener("click", () => {
  search_mobile.style.display = "none";
  form_mobile.style.display = "block";
  logo_mobile.style.display = "none";
  console.log(document.documentElement.clientWidth);
});


//DOM Ready, identify tag, fetch specific products
document.addEventListener("DOMContentLoaded", () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const tag = urlParams.get("tag");
  const paging = urlParams.get("paging");
  const keyword = urlParams.get("keyword");
  console.log(tag, paging, keyword);
  console.log(tag);
  if (tag === null && keyword === null) {
    path = "all";
    tagParam = path;
    fetchProduct(path, keyword, paging);
  } else if (tag === "women") {
    tagParam = tag;
    fetchProduct(tag, keyword, paging);
  } else if (tag === "men") {
    tagParam = tag;
    fetchProduct(tag, keyword, paging);
  } else if (tag === "accessories") {
    tagParam = tag;
    fetchProduct(tag, keyword, paging);
  } else {
    let tag = "search";
    tagParam = tag;
    keywordParam = keyword;
    searchProduct(tag, keyword, paging);
  }
});

//search
function searchProduct(pathtag, keyword, paging) {
  fetch(
    `https://api.appworks-school.tw/api/1.0/products/${pathtag}?keyword=${keyword}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      products = data;
      let listjson = data.data;
      const list = document.querySelector(".products");
      let listHTML = "";
      for (let i = 0; i < listjson.length; i++) {
        listHTML += '<div class="product">';
        listHTML += `<img src=" ${listjson[i].main_image} " />`;
        listHTML += '<div class="colors">';
        let colorLength = listjson[i].colors.length;
        //   console.log(colorLength);
        let colorHTML = "";
        for (let j = 0; j < colorLength; j++) {
          colorHTML += '<div class="color" style ="background-color:#';
          colorHTML += listjson[i].colors[j].code;
          colorHTML += ';"></div>';
        }
        colorHTML += "</div>";
        listHTML += colorHTML;
        listHTML += '<div class="name">' + listjson[i].title + "</div>";
        listHTML += '<div class="price">' + listjson[i].price + "</div>";
        listHTML += "</div>";
        //   console.log(listHTML);
      }
      list.innerHTML = listHTML;
    });
}

//fetch data function
function fetchProduct(pathtag, keyword, paging) {
  fetch(
    `https://api.appworks-school.tw/api/1.0/products/${pathtag}?keyword=${keyword}&paging=${paging}`
  )
    .then((res) => {
      console.log("here");
      console.log(
        `https://api.appworks-school.tw/api/1.0/products/${pathtag}?keyword=${keyword}&paging=${paging}`
      );
      return res.json();
    })
    .then((data) => {
      products = data;
      let listjson = data.data;
      const list = document.querySelector(".products");
      let listHTML = "";
      for (let i = 0; i < listjson.length; i++) {
        listHTML += '<div class="product">';
        listHTML += `<img src=" ${listjson[i].main_image} " />`;
        listHTML += '<div class="colors">';
        let colorLength = listjson[i].colors.length;
        // console.log(colorLength);
        let colorHTML = "";
        for (let j = 0; j < colorLength; j++) {
          colorHTML += '<div class="color" style ="background-color:#';
          colorHTML += listjson[i].colors[j].code;
          colorHTML += ';"></div>';
        }
        colorHTML += "</div>";
        listHTML += colorHTML;
        listHTML += '<div class="name">' + listjson[i].title + "</div>";
        listHTML += '<div class="price">' + listjson[i].price + "</div>";
        listHTML += "</div>";
      }
      list.innerHTML += listHTML;
    });
}

//*** trigger  >>若document 的底部快沒了，就要load paging
window.addEventListener("scroll", () => {
  if (products) {
    //get veiwportheight
    const viewHeight = document.documentElement.clientHeight;
    //get docheight
    const documentButtonRelative = document.documentElement.getBoundingClientRect()
      .bottom;
    console.log(viewHeight);
    console.log(document.documentElement.scrollHeight);
    const reachBottom = documentButtonRelative - viewHeight < 20;
    if (reachBottom && products.next_paging != undefined) {
      fetchProduct(tagParam, keywordParam, products.next_paging);
      console.log("hi");
    }
  }
});
