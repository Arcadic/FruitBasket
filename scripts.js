import { disconnect } from "cluster";

// Enter a description of this program here.

/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 */
//Cost Each fruit based on QTY ordered.
//Idealy there is a way to dynamic track the Qty from the form and pull the variable in, but this is a more simple solution than multiple layers of setting the value of both cost and qty.
const fruitCost = {
  apple(a) {
    if (a < 10) {
      return a * 0.5;
    } else return a * 0.35;
  },
  orange(a) {
    if (a < 10) {
      return a * 0.65;
    } else return a * 0.55;
  },
  banana(a) {
    if (a < 10) {
      return a * 0.2;
    } else return a * 0.15;
  },
  pear(a) {
    if (a < 10) {
      return a * 0.5;
    } else return a * 0.35;
  },
  melon(a) {
    if (a < 10) {
      return a * 2.5;
    } else return a * 2;
  }
};

const apple = document.querySelector("#apples");
const orange = document.querySelector("#oranges");
const banana = document.querySelector("bananas");
const pear = document.querySelector("#pear");
const melon = document.querySelector("#melons");
const select = document.querySelector("select");
const output = document.querySelector("output");

output.form.addEventListener("submit", function(event) {
  event.preventDefault();
  let delivery = [select.value];
  if (delivery == "Daily") {
    let cost =
      Number(fruitCost.apple(apple.value)) +
      Number(fruitCost.orange(orange.value)) +
      Number(fruitCost.banana(banana.value)) +
      Number(fruitCost.pear(pear.value)) +
      Number(fruitCost.melon(melon.value));
    output.textContent = cost * 0.15;
  } else if (delivery == "Weekly") {
    let cost =
      Number(fruitCost.apple(apple.value)) +
      Number(fruitCost.orange(orange.value)) +
      Number(fruitCost.banana(banana.value)) +
      Number(fruitCost.pear(pear.value)) +
      Number(fruitCost.melon(melon.value));
    output.textContent = cost * 0.1;
  } else {
    let cost =
      Number(fruitCost.apple(apple.value)) +
      Number(fruitCost.orange(orange.value)) +
      Number(fruitCost.banana(banana.value)) +
      Number(fruitCost.pear(pear.value)) +
      Number(fruitCost.melon(melon.value));
    output.textContent = cost * 0.05;
  }
});
