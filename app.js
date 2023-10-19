console.log("Its Working")
function extractValue(arr, key) {
    return arr.reduce(function(result, obj) {
      result.push(obj[key]);
      return result;
    }, []);
  }

function vowelCount(str) {
    const vowels = "aeiou"; 
    return str.split('').reduce(function (countObj, char) {
      const lowercaseChar = char.toLowerCase();
      if (vowels.includes(lowercaseChar)) {
        countObj[lowercaseChar] = (countObj[lowercaseChar] || 0) + 1;
      }
      return countObj;
    }, {});
  }

function addKeyAndValue(arr,key,value){
    return arr.reduce(function(result,obj){
        obj[key] = value;
        result.push(obj);
        return result;
    }, []);
}
//Need help explaining this one. Had a hard time figuring out reduce.
function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}