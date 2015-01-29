country-codes
=======================

A basic library for handling country-codes & data. Based off ISO 3166-1 alpha-2 country code list.

Usage
-----------------------

###Client Only

`{{> countryCodeSelect selected=selectedCode props=selectBoxProperties}}`
Template for adding a select-box to the page. Puts "highlighted" countries at top of list.


`CountryCodes.setHighlightedCountries(aCountryCodes)`
Sets the list of countries to put at the top of the select box.

`CountryCodes.getHighlightedCountries()`
Returns the list of countries highlighted

`CountryCodes.getPartialList(highlighted=false)`
Returns a mapping of country code => country name, if highlighted=true then only highlighted countries,
otherwise all countries except highlighted ones.

###Client & Server

`CountryCodes.countryName(countryCode)`
Returns the name of the country with the provided code.

`CountryCodes.countryCode(countryName)`
Returns the code for the specified country name.

`CountryCodes.getList()`
returns a mapping of country codes => country names

`CountryCodes.getCountryCodes()`
returns a array of country codes.
