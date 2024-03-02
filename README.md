# ankit-currency-convertor
an npm package to convert currency

usage:-

export this like below in your project
import { convertCurrency } from "ankit-currency-convertor";

use the below function to convert the currency
convertCurrency("from_country","to_country",no_of_unit)

eg :->  convertCurrency("USD","INR",5).then((res)=>console.log(res));
