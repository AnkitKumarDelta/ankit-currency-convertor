import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_G9ZjgwXZ6eBTmXm0CkerLp0b3NxTgsI0Ko2zaYGF');

convertCurrency("INR","USD",3);
export async function convertCurrency(fromCurrency, toCurrency, units){
const res=await freecurrencyapi.latest({
  base_currency: fromCurrency,
  currencies: toCurrency
});
const multiplier=res.data[toCurrency];
return multiplier*units;
console.log(multiplier);
}
// freecurrencyapi.latest({
//   base_currency: 'USD',
//   currencies: 'INR'
// }).then(response => {
//   console.log(response);
// }).catch(error => {
//   console.error('Error fetching currency data:', error.message);
// });
