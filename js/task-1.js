
const nav = document.querySelector('#categories').children.length;
console.log("Number of categories:", nav);


const navList = document.querySelectorAll('.item');
navList.forEach(item => {
  const categoriesTitle = item.querySelector('h2').textContent;
  const categoriesItem = item.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoriesTitle}`);
  console.log("Elements:", categoriesItem);
});

// Ви казали, що програмування це пр вареативність - тому я буду робити по своєму а не так як Ви запропонували. Код працює і я можу як показано вище зробити і через змінну і через рядок. Дякую за підказку.