function zipCode (code, location) {
  let _code = code;
  let _location = location || '';
  return {
    code: function() {
      return _code;
    },
    location: function(){
      return _location;
    },
    fromString: function(str) {
      let parts = str.split('-');
      return zipCode(parts[0],parts[1]);
    },
    toString: function() {
      return _code + '-' + _location;
    }
  }
}

const princetonZip = zipCode('08544', '3345');
princetonZip.toString();

function coordinate(lat, long) {
  let _lat = lat;
  let _long = long;

  return {
    latitude: function (){
      return _lat;
    },
    longitude: function() {
      return _long;
    },
    translate: function(dx, dy){
      return corrdinate(_lat+dx, _long+dy);
    },
    toString: function(){
      return '('+_lat +',' +_long+dy +')';
    }
  };
}
const greewich = coordinate(51.4778, 0.0015);
greenwich.toString();

//返回一个新的副本是另一种实现不可变性的方式。在该对象上应用一次平移操作，将产生一个新的
//coordinate对象。
greenwich.translate(10,10).toString();

