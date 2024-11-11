function validatePIN(pin) {
  //Start coding here
  // 1. วิธีน้ำลายยืด
  // let numTest;
  // let lengthTest;
  // if (parseInt(pin.split("")) === 1) {
  //   numTest = true;
  // }
  // if (pin.split("").length === 4 || pin.split("").length === 6) {
  //   lengthTest = true;
  // }
  // if (numTest && lengthTest) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 2. วิธีเขียนภาษาอียิป
  return /^(\d{4}|\d{6})$/.test(pin);
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
