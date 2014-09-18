function LocalStorageFacade () {

  var that = this;

  this.getInt = function(key,defaultValue){
    var value = localStorage.getItem(key);
    if(value !== null){
      value = parseInt(value,10);
    }else{
      value = defaultValue;
    }
    return value;
  }

  this.getFloat = function(key,defaultValue){
    var value = localStorage.getItem(key);
    if (value !== null) {
      value = parseFloat(value);
    } else {
      value = defaultValue;
    }
    return value;
  }

  this.getString = function(key,defaultValue){
    var value = localStorage.getItem(key);
    if (value !== null) {
      value = value + '';
    } else {
      value = defaultValue;
    }
    return value;
  }

  this.getBool = function(key,defaultValue){
    var value = localStorage.getItem(key);
    if (value !== null) {
      value = JSON.parse(value);
    } else {
      value = defaultValue;
    }
    return value;
  }

}