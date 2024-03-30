const nav = document.querySelector("#categories");
//const navList = document.querySelectorAll('.item');
//console.log("Number of categories:", navList.length);

const navEl = nav.children;
const categoriesLi = [...navEl];
//console.log(`Number of categories: ${categoriesLi.length}`);

let totalEl = 0;
for (let index = 0; index < navEl.length; index++) {
  totalEl += index;
}
console.log(`Number of categories: ${totalEl}`);

const navList = nav.querySelectorAll(".item"); // можно звернутись через document.querySelectorAll('item')
const resultList = navList.forEach((item) => {
 const categoriesTitle = item.querySelector("h2");
 categoriesTitle.classList.add("categories-title__1");

 const categoriesList = item.querySelector("ul");
 categoriesList.classList.add("categories-list__1");

 const categoriesItem = item.querySelectorAll("ul > li");
 categoriesItem.forEach((item) => {
   item.classList.add("categories-item__1");
 });
  console.log(item.querySelector("h2").textContent);
  console.log(item.querySelectorAll("ul > li").length);

});


