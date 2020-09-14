const assert = chai.assert;

describe("Practice Assignment 6", function () {
  describe("Question 1", function () {
    it("myPizzaOrder should exist.", function () {
      assert.exists(myPizzaOrder);
    });
    it("myPizzaOrder should be an array.", function () {
      assert.isArray(myPizzaOrder);
    });
    it("The 1st element should return string data.", function () {
      const result = myPizzaOrder[0];
      assert.isString(result);
    });
    it("The 1st element should return accurate data.", function () {
      const result = myPizzaOrder[0];
      assert.strictEqual(result, "Pepperoni");
    });
    it("The 2nd element should return number data.", function () {
      const result = myPizzaOrder[1];
      assert.isNumber(result);
    });
    it("The 2nd element should return accurate data.", function () {
      const result = myPizzaOrder[1];
      assert.strictEqual(result, 12.99);
    });
    it("The 3rd element should return boolean data.", function () {
      const result = myPizzaOrder[2];
      assert.isBoolean(result);
    });
    it("The 3rd element should return accurate data.", function () {
      const result = myPizzaOrder[2];
      assert.strictEqual(result, false);
    });
  });
  describe("Question 2", function () {
    it("getPizzaType should exist.", function () {
      assert.exists(getPizzaType);
    });
    it("getPizzaType should be a function.", function () {
      assert.isFunction(getPizzaType);
    });
    it("The function getPizzaType should return string data.", function () {
      const array = ["Supreme"];
      const result = getPizzaType(array);
      assert.isString(result);
    });
    it("The function getPizzaType should return the 1st element of the array parameter.", function () {
      const array = ["Supreme"];
      let result = getPizzaType(array);
      assert.strictEqual(result, "Supreme");
      array[0] = "Sausage";
      result = getPizzaType(array);
      assert.strictEqual(result, "Sausage");
    });
  });
  describe("Question 3", function () {
    it("addTax should exist.", function () {
      assert.exists(addTax);
    });
    it("addTax should be a function.", function () {
      assert.isFunction(addTax);
    });
    it("The function addTax should return an array.", function () {
      const array = ["Supreme", 14.99, false];
      const result = addTax(array);
      assert.isArray(result);
    });
    it("The function addTax should return an array with 4 elements.", function () {
      const array = ["Supreme", 14.99, false];
      const result = addTax(array);
      assert.strictEqual(result.length, 4);
    });
    it("The function addTax should return accurate data.", function () {
      const array = ["Supreme", 14.99, false];
      let result = addTax(array);
      assert.equal(result[2], 1.39);
      array[1] = 12.99;
      result = addTax(array);
      assert.equal(result[2], 1.2);
    });
  });
  describe("Question 4", function () {
    it("completeOrder should exist.", function () {
      assert.exists(completeOrder);
    });
    it("completeOrder should be a function.", function () {
      assert.isFunction(completeOrder);
    });
    it("The function completeOrder should return an array.", function () {
      const array = ["Supreme", 14.99, 0, false];
      const result = completeOrder(array);
      assert.isArray(result);
    });
    it("The function completeOrder should return accurate data.", function () {
      const array = ["Supreme", 14.99, 0, false];
      const result = completeOrder(array);
      assert.strictEqual(result[3], true);
    });
  });
  describe("Question 5", function () {
    it("allTheNumbers should exist.", function () {
      assert.exists(allTheNumbers);
    });
    it("allTheNumbers should be a function.", function () {
      assert.isFunction(allTheNumbers);
    });
    it("The function allTheNumbers should return an array.", function () {
      const result = allTheNumbers(10);
      assert.isArray(result);
    });
    it("The returned array should have a length of one less than the parameter provided.", function () {
      let result = allTheNumbers(10);
      assert.strictEqual(result.length, 9);
      result = allTheNumbers(99);
      assert.strictEqual(result.length, 98);
      result = allTheNumbers(1001);
      assert.strictEqual(result.length, 1000);
    });
    it("The returned array should contain all the numbers from 1 to (but not including) the parameter.", function () {
      let result = allTheNumbers(1);
      assert.strictEqual(result.length, 0);
      result = allTheNumbers(100);
      assert.strictEqual(result[result.length - 1], 99);
    });
  });
  describe("Question 6", function () {
    it("getEvens should exist.", function () {
      assert.exists(getEvens);
    });
    it("getEvens should be a function.", function () {
      assert.isFunction(getEvens);
    });
    it("The function getEvens should return an array.", function () {
      const result = getEvens(10, 20);
      assert.isArray(result);
    });
    it("The returned array should have an accurate length.", function () {
      let result = getEvens(10, 20);
      assert.strictEqual(result.length, 6);
      result = getEvens(3, 50);
      assert.strictEqual(result.length, 24);
      result = getEvens(1, 99);
      assert.strictEqual(result.length, 49);
      result = getEvens(2, 100);
      assert.strictEqual(result.length, 50);
    });
    it("The returned array should contain all the even numbers from (and including) startNum and endNum.", function () {
      let array = getEvens(10, 20);
      array.forEach((el) => {
        const result = el % 2;
        assert.strictEqual(result, 0);
      });
      array = getEvens(3, 50);
      array.forEach((el) => {
        const result = el % 2;
        assert.strictEqual(result, 0);
      });
      array = getEvens(2, 49);
      array.forEach((el) => {
        const result = el % 2;
        assert.strictEqual(result, 0);
      });
    });
  });
  describe("Question 7", function () {
    it("getLastElement should exist.", function () {
      assert.exists(getLastElement);
    });
    it("getLastElement should be a function.", function () {
      assert.isFunction(getLastElement);
    });
    it("The returned value should always be the last element or the array parameter.", function () {
      const array = [1];
      let result = getLastElement(array);
      assert.strictEqual(result, 1);
      array.push("Dave", 42, true);
      result = getLastElement(array);
      assert.strictEqual(result, true);
    });
  });
  describe("Question 8", function () {
    it("combineArrays should exist.", function () {
      assert.exists(combineArrays);
    });
    it("combineArrays should be a function.", function () {
      assert.isFunction(combineArrays);
    });
    it("The function combineArrays should return an array.", function () {
      const array1 = [1];
      const array2 = ["Dave"];
      const result = combineArrays(array1, array2);
      assert.isArray(result);
    });
    it("The returned array should have an accurate length.", function () {
      const array1 = [1, 2, 3];
      const array2 = [4, "Dave", 6];
      let result = combineArrays(array1, array2);
      assert.strictEqual(result.length, 6);
      array1.push(8);
      result = combineArrays(array1, array2);
      assert.strictEqual(result.length, 7);
    });
    it("The returned array should contain all the elements of the two array parameters.", function () {
      const array1 = [1, 2, 3];
      const array2 = [4, "Dave", 6];
      let newArray = combineArrays(array1, array2);
      newArray.forEach((el) => {
        const result = array1.includes(el) || array2.includes(el);
        assert.strictEqual(result, true);
      });
      array2.pop();
      array2.unshift(99);
      array1.shift();
      newArray = combineArrays(array1, array2);
      newArray.forEach((el) => {
        const result = array1.includes(el) || array2.includes(el);
        assert.strictEqual(result, true);
      });
    });
  });
  describe("Question 9", function () {
    it("isPalindrome should exist.", function () {
      assert.exists(isPalindrome);
    });
    it("isPalindrome should be a function.", function () {
      assert.isFunction(isPalindrome);
    });
    it("The function isPalindrome should return boolean data.", function () {
      const result = isPalindrome("Taco cat");
      assert.isBoolean(result);
    });
    it("The returned boolean value should be accurate.", function () {
      let result = isPalindrome("Taco cat");
      assert.strictEqual(result, true);
      result = isPalindrome("Dave");
      assert.strictEqual(result, false);
      result = isPalindrome("                   Race car");
      assert.strictEqual(result, true);
      result = isPalindrome("A Santa              at                 NASA");
      assert.strictEqual(result, true);
      result = isPalindrome("ufo TOFU");
      assert.strictEqual(result, true);
      result = isPalindrome("ufo8 tofu");
      assert.strictEqual(result, false);
    });
  });
});
