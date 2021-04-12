let usersArray = require('./data')
// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    // Your code goes here ...
    const {firstName} = user
    userFirstNames.push(firstName)
  }
  return userFirstNames
};

console.log(getFirstNames(usersArray));
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  const fullNames = [];
  // Your code goes here ...
  for (let user of arr) {
    let {firstName, lastName} = user;
   let twoNames = `${firstName} ${lastName}`;
   fullNames.push(twoNames);
};
return fullNames;
}

console.log(getFullNames(usersArray));
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************
// const userDetails = {
//   firstName,
//   lastName,
//   balance
// };


const getUsersCreditDetails = arr => {
  // Your code goes here ...
  // let clonnedArray = JSON.parse(JSON.stringify(arr))
  const userCredentials = [];
  for (let user of arr) {
    let {firstName, lastName, balance} = user;
    const finalCredentials = {
      firstName: firstName,
      lastName: lastName,
      balance: balance
    };
    userCredentials.push(finalCredentials);
  }
  return userCredentials;
};

console.log(getUsersCreditDetails(usersArray));
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  // Your code goes here ...
  const maleUsers = [];
  const femaleUsers = [];

  [...users].filter((user) => {
    const {firstName, lastName, gender} = user;
    if (gender === "male") {
      maleUsers.push(`${firstName} ${lastName}`)
    } else if (gender === "female") {
       femaleUsers.push(`${firstName} ${lastName}`)
    }
  });
  return {
    maleUsers,
    femaleUsers
  }
};

console.log(genderView(usersArray));
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  // Your code goes here ...
  const {maleUsers, femaleUsers} = data;
  return `male:${maleUsers.length} female: ${femaleUsers.length}`
};

console.log(genderCount(data));
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  // Your code goes here ...
  for (let user of users) {
    const {firstName, balance} = user;
    let userBalance = balance.slice(1);
    userBalance = userBalance.replace(",", "")

    if(userBalance >= 20000){
     console.log(`Dear ${firstName}, since your balance is ${balance}, you are eligible to apply for this awesome credit card.`)
    }
  }
  //We tried to return the result but if a user had 20000 balance, the if statement would stop there
  //We also created an array and tried to push to it but it would remain empty even after
  //converting the userBalance to a Number() also didn't work
  //Console log saves the day

};
promo20(usersArray);

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
  users.map(user => user.isActive = true)

  return users;
};

 console.log(addActive(usersArray));
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
