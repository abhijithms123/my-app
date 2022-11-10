// import { ValidatorFn } from "@angular/forms";

// export function priceEvenValidator(): ValidatorFn {
//     return (control) => {
//         if(!control.value || control.value % 2 == 0) {
//             return null;
//         }

//         return {
//             'priceEvenValidator': true
//         };
//     }
// }

// export function priceCategoryValidator(): ValidatorFn {
//     return (control) => {

//         if(control.get('category').value === 'Laptop' && control.get('price').value < 50000) {
//             return {
//                 'priceCategoryValidator': true
//             };
//         }
//         return null;
//     }
// }