// Enter a description of this program here.

/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 */
//Cost Each fruit based on QTY ordered.
//Idealy there is a way to dynamic track the Qty from the form and pull the variable in, but this is a more simple solution than multiple layers of setting the value of both cost and qty.
//Found an ideal concise method to avoid code repeat.
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
  },
  fruitSum(a, o, b, p, m) {
    return (
      Number(fruitCost.apple(a)) +
      Number(fruitCost.orange(o)) +
      Number(fruitCost.banana(b)) +
      Number(fruitCost.pear(p)) +
      Number(fruitCost.melon(m))
    );
  }
};
const deliveryCost = {
  weekly(a, o, b, p, m) {
    return (
      Number(fruitCost.fruitSum(a, o, b, p, m)) +
      Number(fruitCost.fruitSum(a, o, b, p, m)) * 0.1
    );
  },
  daily(a, o, b, p, m) {
    return (
      Number(fruitCost.fruitSum(a, o, b, p, m)) +
      Number(fruitCost.fruitSum(a, o, b, p, m) * 0.15)
    );
  },
  monthly(a, o, b, p, m) {
    return Number(fruitCost.fruitSum(a, o, b, p, m));
  }
};

const apple = document.querySelector("#apples");
const orange = document.querySelector("#oranges");
const banana = document.querySelector("#bananas");
const pear = document.querySelector("#pears");
const melon = document.querySelector("#melons");
const select = document.querySelector("select");
const output = document.querySelector("output");

output.form.addEventListener("submit", function(event) {
  event.preventDefault();
  output.textContent = deliveryCost[select.value](
    apple.value,
    orange.value,
    banana.value,
    pear.value,
    melon.value
  ).toFixed(2);

  // OLD CODE TO CONFIRM WORKING HTML
  //
  //  output.textContent = fruitCost.fruitSum();
  // let delivery = [select.value];
  // console.log(delivery);
  // if (delivery == "D") {
  //   let cost =
  //     Number(fruitCost.apple(apple.value)) +
  //     Number(fruitCost.orange(orange.value)) +
  //     Number(fruitCost.banana(banana.value)) +
  //     Number(fruitCost.pear(pear.value)) +
  //     Number(fruitCost.melon(melon.value));
  //   console.log(cost);
  //   output.textContent = cost + Number(cost * 0.15);
  // } else if (delivery == "W") {
  //   let cost =
  //     Number(fruitCost.apple(apple.value)) +
  //     Number(fruitCost.orange(orange.value)) +
  //     Number(fruitCost.banana(banana.value)) +
  //     Number(fruitCost.pear(pear.value)) +
  //     Number(fruitCost.melon(melon.value));
  //   console.log(cost);

  //   output.textContent = cost + Number(cost * 0.1);
  // } else {
  //   let cost =
  //     Number(fruitCost.apple(apple.value)) +
  //     Number(fruitCost.orange(orange.value)) +
  //     Number(fruitCost.banana(banana.value)) +
  //     Number(fruitCost.pear(pear.value)) +
  //     Number(fruitCost.melon(melon.value));
  //   console.log(cost);

  //   output.textContent = cost + Number(cost * 0.05);
  // }
});
