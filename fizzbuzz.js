// fizzbuzz

var fizzbuzz = function (arr, x, y){
  var result = [];
  for (var i = 0; i < arr.length; i++){
    if(arr[i] % x === 0 && arr[i] % y === 0){
      result.push('fizzbuzz');
    } else if(arr[i] % x === 0){
      result.push('fizz');
    } else if (arr[i] % y === 0){
      result.push('buzz');
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
