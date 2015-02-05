CountryCodes = {
  _codeByCountry: null,

  _countriesByCode: countriesByCode,

  _invertCountriesByCode: function(){
    return _.object(_.map(countriesByCode, function CountryCodes_lowercaseMap(name, code){
      return [name.toUpperCase(), code];
    }));
  },

  countryName: function (countryCode) {
    return CountryCodes._countriesByCode[countryCode];
  },

  countryCode: function (countryName) {
    if (this._codeByCountry == null){
      this._codeByCountry = this._invertCountriesByCode();
    }
    return this._codeByCountry[countryName.toUpperCase()];
  },

  getList: function () {
    return _.extend({}, this._countriesByCode);
  },

  getCountryCodes: function(){
    return _.keys(this._countriesByCode);
  }
};

