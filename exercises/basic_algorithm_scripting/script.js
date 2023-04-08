
function convertCelsiusToFarenheit(celsius) {
    return (celsius  * 9/5) + 32;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function factorialize(num) {
    if (num <= 1) {
      return 1;
    } 
    else {
      return num * factorialize(num-1);
    }
}

function findLongestWordLength(str) {
    let words = str.split(" ").sort((a,b) => a.length - b.length);
    return words[words.length -1].length;
}


function largestOfSubArrays(arr) {
    arr = arr.map(sub => sub.sort( (x,y) => x-y).splice(-1)).map(
        n => n[0]
    )

    return arr;
}

function confirmEnding(str, target) {
    return target == str.substr(-target.length)
}

function repeatStringNumTimes(str, num) {
    if (num <= 0) {
      return ""
    } 
    else {
      let res = "";
      for (let i=num; i > 0; i--) {
        res += str
      }
      return res;
    }
}


function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    } 
    else {
      return str.substr(0, num) + "...";
    }
}

function findElement(arr, func) {
  
    for (let i=0; i < arr.length; i++) {
      if ( func(arr[i]) ) {
        return arr[i];
      }
    }
    return undefined;
}

function booWho(bool) {
    return typeof(bool) == "boolean"
}

function titleCase(str) {
    return str.split(" ").map(
      (s) => {
        return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
      }
    ).join(" ");
}

function frankenSplice(arr1, arr2, n) {
  let arr = [...arr2]
  arr.splice(n, 0, ...arr1)
  return arr
}

function bouncer(arr) {
  return arr.filter(val => Boolean(val) == true)
}


function getIndexToIns(arr, num) {
  if (arr.length < 1) {
    return 0;
  }

  arr.sort((a,b) => a - b)

  for (let i=0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i == 0 ? 0 : i;
    }
  }

  return arr.length;
}

function mutation(arr) {
  let [container, comp] = arr.map(a => a.toLowerCase());
  
  for (let i=0; i < comp.length; i++) {
    if (container.indexOf(comp[i]) == -1) {
      return false;
    }
  }

  return true;
}

function chunkArrayInGroups(arr, size) {
  let matrix = [];
  let ind = 0;

  while(ind < arr.length) {
    matrix.push(arr.slice(ind, ind + size))
    ind += size;
  }
  
  return matrix;
}
  
  