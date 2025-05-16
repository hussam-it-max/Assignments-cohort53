/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beers: 15.89,
  chips: 10.12,
  MixedNuts: 18.77,
  Donuts: 6.25,
  Fruit: 16.55,
};

function calculateTotalPrice(cartParty) {
  const amount = Object.values(cartParty).reduce((accumulator, current) => {
    return accumulator + current;
  });
  return `Total: €${amount.toFixed(2)}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const expected = 1;
  const actual = calculateTotalPrice.length;
  console.assert(expected === actual);
}
// dynamic instead hardcoded
function test2(cartParty) {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const res = Object.values(cartParty).reduce((accumulator, current) => {
    return accumulator + current;
  });
  const expected = `Total: €${res.toFixed(2)}`;
  const actual = calculateTotalPrice(cartParty);
  console.assert(expected === actual, `Expected ${expected} but got ${actual}`);
}

function test() {
  test1();
  test2(cartForParty);
}

test();
