'use strict';

// if (1 + 1 == 3) {
//     console.log('OK!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = 10;
switch (num) {
    case 49: 
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 10:
        console.log('Bingo!');
        break;
    default:
        console.log('Better luck next time');
        break;
}