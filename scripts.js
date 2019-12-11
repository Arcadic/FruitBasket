// Enter a description of this program here.

/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 */
//Cost Each fruit based on QTY ordered.
//Idealy there is a way to dynamic track the Qty from the form and pull the variable in, but this is a more simple solution than multiple layers of setting the value of both cost and qty.
//Found an ideal concise method to avoid code repeat.

class Detail {
  constructor(name, street, city, zipcode, totalCost) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    this.totalCost = totalCost;
  }
}
var allRegistered = [];

function add_user() {
  var reg_name = document.getElementById("register-name");
  var reg_street = document.getElementById("register-street");
  var reg_city = document.getElementById("register-city");
  var reg_zipcode = document.getElementById("register-zipcode");
  var reg_totalCost = deliveryCost[select.value](
    apple.value,
    orange.value,
    banana.value,
    pear.value,
    melon.value
  ).toFixed(2);

  if (
    reg_name.value == "" ||
    reg_street.value == "" ||
    reg_city.value == "" ||
    reg_zipcode.value == ""
  ) {
    alert("All fields must be filled.");
    return;
  }

  var temp_detail = new Detail(
    reg_name.value,
    reg_street.value,
    reg_city.value,
    reg_zipcode.value,
    reg_totalCost
  );

  //empty old records
  reg_name.value = reg_street.value = reg_city.value = reg_zipcode.value = "";

  //create new div and append name, street, city and zipcode
  var old_records_div = document.getElementById("old-records");
  var new_record_div = document.createElement("DIV");
  var new_record_name_span = document.createElement("SPAN");
  var new_record_street_span = document.createElement("SPAN");
  var new_record_city_span = document.createElement("SPAN");
  var new_record_zipcode_span = document.createElement("SPAN");
  var new_record_deliveryCost_span = document.createElement("SPAN");

  new_record_name_span.innerHTML = "Name: " + temp_detail.name;
  new_record_street_span.innerHTML = "\nStreet: " + temp_detail.street;
  new_record_city_span.innerHTML = "\nCity: " + temp_detail.city;
  new_record_zipcode_span.innerHTML = "\nZip Code: " + temp_detail.zipcode;
  new_record_deliveryCost_span.innerHTML =
    "\nTotal Cost: $" + temp_detail.totalCost;

  new_record_div.appendChild(new_record_name_span);
  new_record_div.appendChild(new_record_street_span);
  new_record_div.appendChild(new_record_city_span);
  new_record_div.appendChild(new_record_zipcode_span);
  new_record_div.appendChild(new_record_deliveryCost_span);

  old_records_div.appendChild(new_record_div);

  //saving record in array and printing the array
  allRegistered.push(temp_detail);
  console.log(allRegistered);
}
function displayRecords() {
  //create new div and append name, street, city and zipcode
  var old_records_div = document.getElementById("old-records");
  old_records_div.innerHTML = "";

  for (var i = 0; i < allRegistered.length; i++) {
    var temp_detail = allRegistered[i];
    var new_record_div = document.createElement("DIV");
    var new_record_name_span = document.createElement("SPAN");
    var new_record_deliveryCost_span = document.createElement("SPAN");

    new_record_name_span.innerHTML = "Name: " + temp_detail.name;
    new_record_deliveryCost_span.innerHTML =
      "  Total: $ " + temp_detail.totalCost;
    new_record_div.appendChild(new_record_name_span);
    new_record_div.appendChild(new_record_deliveryCost_span);
    old_records_div.appendChild(new_record_div);
  }
}
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
  // const totalCost = deliveryCost[select.value](
  //   apple.value,
  //   orange.value,
  //   banana.value,
  //   pear.value,
  //   melon.value
  // ).toFixed(2);
  // output.textContent = totalCost;
  add_user();
});

// output.form.addEventListener("list", function(event) {
//   event.preventDefault();
//   allRegistered.forEach(displayRecords(name));
// });
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
