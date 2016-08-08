var cldr = require("cldr-data");
var Globalize = require("globalize");

Globalize.load(cldr("supplemental/likelySubtags"));
Globalize.load(cldr("supplemental/numberingSystems"));
Globalize.load(cldr("supplemental/currencyData"));

//replace 'hi' with appropriate language tag
Globalize.load(cldr("main/hi/numbers"));
Globalize.load(cldr("main/hi/currencies"));

//You may replace the above locale-specific loads with the following line,
// which will load every type of CLDR language data for every available locale
// and may consume several hundred megs of memory!
//Use with caution.
//Globalize.load(cldr.all());

//Set the locale
//We use the extention u-nu-native to indicate that Devanagari and
// not Latin numerals should be used.
// '-u' means extension
// '-nu' means number
// '-native' means the use native script
//Without -u-nu-native this example will not work
//See
// https://en.wikipedia.org/wiki/IETF_language_tag#Extension_U_.28Unicode_Locale.29
// for more details on the U language code extension
var hindiGlobalizer = Globalize('hi-IN-u-nu-native');

var parseHindiNumber = hindiGlobalizer.numberParser();
var formatHindiNumber = hindiGlobalizer.numberFormatter();
var formatRupeeCurrency = hindiGlobalizer.currencyFormatter("INR");

console.log(parseHindiNumber('३,५००')); //3500
console.log(formatHindiNumber(3500));   //३,५००
console.log(formatRupeeCurrency(3500)); //₹३,५००.००
