let name = prompt('Ismingizni kiriting');
let name2 = prompt('Familiyangizni kiriting');
let name3 = +prompt('Yoshingizni kiriting');
let name4 = prompt('jinsizni kiriting');

let title = document.getElementById("names");
let title2 = document.getElementById("names1");
let title3 = document.getElementById("names2");
let title4 = document.getElementById("names3");

title.textContent = name;
title2.textContent = name2;
title3.textContent = name3;
title4.textContent = name4;