function sumAll(arr) {
    arr.sort((a,b) => a-b);
  
    const [smallest, largest] = arr;
  
    const sumFunc = (x) => {
      if (x == smallest) {
        return x;
      }
      else {
        return x + sumFunc(x-1);
      }
    }
  
    return sumFunc(largest);
  
}

function diffArray(arr1, arr2) {
    let arr1Diff = arr1.filter(n => arr2.indexOf(n) == -1)
    let arr2Diff = arr2.filter(n => arr1.indexOf(n) == -1)
    return arr1Diff.concat(arr2Diff);
}


function destroyer(arr) {
    let nums = Object.keys(arguments).splice(1).map(arg => {
      return arguments[arg];
    });
  
    return arr.filter(n => nums.indexOf(n) == -1)
}

function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);
  
    return collection.filter(obj => {
      let matches = true;
  
      for (let i=0; i < sourceKeys.length; i++) {
          let key = sourceKeys[i];
  
          if (obj.hasOwnProperty(key)) {
              let objVal = obj[key];
              let sourceVal = source[key];
  
              if (objVal != sourceVal) {
                matches = false;
              }
          }
          else {
            matches = false;
        }
      }
  
      return matches;
    })
  }
  
  console.log(whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ], 
    { last: "Capulet" }));



function spinalCase(str) {
    return str.split(" ").map(c => c.toLowerCase()).join("-")
}
    
console.log(spinalCase('This Is Spinal Tap'));