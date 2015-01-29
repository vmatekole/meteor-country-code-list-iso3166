
var highlightedCountries = [];
_.extend(CountryCodes, {
  setHighlightedCountries: function (aCountryCodes){
    highlightedCountries = highlightedCountries.concat(aCountryCodes);
  },
  getHighlightedCountries: function(){
    return highlightedCountries.slice();
  },
  getPartialList: function(highlighted){
    var fn = highlighted ? 'pick': 'omit';
    return _[fn].apply(_, [CountryCodes.getList()].concat(highlightedCountries));
  }
});

Template.countryCodeSelect.helpers({
  highlightedCountryList: function(){
    var selectedCode = this.selected;
    return _.map(CountryCodes.getPartialList(true), function(name, code){
      var props = {};
      if (code === selectedCode){
        props = {selected: true};
      }
      return {_id: code, name: name, props: props};
    });
  },
  remainingCountries: function(){
    var selectedCode = this.selected;
    return _.map(CountryCodes.getPartialList(false), function(name, code){
      var props = {};
      if (code === selectedCode){
        props = {selected: true};
      }
      return {_id: code, name: name, props: props};
    });
  }
});

