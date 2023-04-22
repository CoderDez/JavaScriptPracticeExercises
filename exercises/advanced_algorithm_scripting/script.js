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
      let newStr = str[0].toLowerCase();
  
      for (let i=1; i < str.length; i++) {
        if (str[i].match(/[a-z]/)) {
          newStr += str[i];
        } 
        else {
          let addition = newStr[newStr.length -1] != "-" ? "-": "";
          if (str[i].match(/[A-Z]/)) {
            addition += str[i].toLowerCase();
          }
          newStr += addition;
        }
      }
  
      return newStr;
  }
  
    
console.log(spinalCase('This Is Spinal Tap'));




function translatePigLatin(str) {
  const VOWELS = ["a","e", "i", "o", "u"];
  if (VOWELS.indexOf(str[0]) > -1) {

    return str + "way"
  } 
  else {
    let consInd = -1;
    for (let i=0; i < str.length; i++) {
      if (VOWELS.indexOf(str[i]) == -1) {
        consInd++;
      } 
      else {
        break;
      }
    }

    if (consInd == -1) {
      return str;
    }
    else {
      return str.substring(consInd+1) + str.substring(0, consInd + 1) + "ay"
    }
  }
}

console.log(translatePigLatin("consonant"));


function myReplace(str, before, after) {
  const isCap = (str) => str[0] == str[0].toUpperCase();
  const capitalize = (str) => str[0].toUpperCase() + str.substring(1);
  
  if (str.indexOf(before) > -1) {
    after = isCap(before) ? capitalize(after) : after.toLowerCase();
    str = str.replace(before, after)
  }

  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));



function pairElement(str) {
  return str.split("").map(c => {
    let arr = [c];

    if (c == "A") {
      arr.push("T");
    } else if (c == "T") {
      arr.push("A");
    } else if (c == "G") {
      arr.push("C");
    } else if (c == "C") {
      arr.push("G");
    }
    return arr;

  });
}

console.log(pairElement("GCG"));
console.log(pairElement("ATT"));
console.log(pairElement("ATG"));
console.log(pairElement("AGTGTGGTC"));



function fearNotLetter(str) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
  let indFirstChar = ALPHABET.indexOf(str[0]);
  let indLastChar = ALPHABET.indexOf(str.slice(-1));
  let comparison = ALPHABET.substring(indFirstChar, indLastChar + 1);

  for (let i=0; i < comparison.length; i++) {
    if (str.indexOf(comparison[i]) == -1) {
      return comparison[i];
    }
  }
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
fearNotLetter("stvwx");


function uniteUnique(arr) {
  let ret = []
  Object.keys(arguments).forEach(key => {
    arguments[key].forEach(n => {
      if (ret.indexOf(n) == - 1) {
        ret.push(n);
      }
    })
  });

  return ret;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));


function sumOddFibs(num) {
  let nums = [0,1,1];

  let [n1, n2, n3] = nums;
  let sum = nums.reduce(
    (partialSum, a) => partialSum + a, 0
  );

  while (n3 <= num) {
    nums = [n2, n3, n2+n3];
    [n1, n2, n3] = nums;
    if (n3 <= num && n3 % 2 != 0) {
      sum += n3;
    }
  }

  return sum;

}

console.log(sumFibs(1));
console.log(sumFibs(4));


function sumPrimes(num) {
  let sum;

  if (num <= 1) {
    sum = 0;
  } 
  else {
    sum = 2;
    if (num > 2) {
      for (let n=3; n <= num; n++) {
        let prime = true;

        for (let i=2; i < n; i++) {
          	if (n % i == 0) {
              prime = false;
              break;
            }
        }

        if (prime) {
          sum += n;
        }
      }
    }
  }

  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));


function smallestCommons(arr) {
  arr.sort((a,b) => a-b);
  
  let mult = 1;
  while (true) {
    let num = arr[1] * mult;
    let isDiv = true;

    for (let i=arr[0]; i <= arr[1]; i++) {
      if (num % i != 0) {
        isDiv = false;
        break;
      }
    }

    if (isDiv) {
      return num;
    } 
    else {
      mult++;
    }
  }
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));


function dropElements(arr, func) {
  
  for (let i=0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));



function steamrollArray(arr) {
  let flatArr = [];

  const flatten = (arr) => arr.forEach(elem => {
      Array.isArray(elem) ? flatten(elem) : flatArr.push(elem)
  })

  flatten(arr);

  return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));



function binaryAgent(str) {
  let chars = str.split(" ").map(ch => {
    let [value, adder] = [0,0];

    for (let mult = ch.length-1; mult >= 0; mult--) {
      if (ch[adder] == "1") {
        value += Math.pow(2, mult)
      }
      adder++;
    }

    return String.fromCharCode(value);
  })

  return chars.join("")
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


function truthCheck(collection, pre) {
  let truthy = true;
  for (let i=0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      truthy = false;
      break;
    }
  }

  return truthy;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


function addTogether() {
  let nums = Object.values(arguments);
  for (let i=0; i < nums.length; i++) {
    if (typeof(nums[i]) != "number") {
      return undefined;
    }
  }
  if (nums.length > 1) {
    return nums.reduce((n1, n2) => n1+n2, 0)
  } 
  else {
    return function(num) {
      return typeof(num) != "number" ? undefined : num + nums[0]
    }
  }
}

console.log(addTogether(2,3));
console.log(addTogether(2)([3]));


const Person = function(firstAndLast) {

  let firstName, lastName;

  this.setFullName = function(firstAndLast) {
    let comps = firstAndLast.split(" ")
    firstName = comps[0];
    lastName = comps[1];
  }

  this.setFullName(firstAndLast);

  this.setFirstName = function(first) {
    firstName = first;
  }
  this.setLastName = function(last) {
    lastName = last;
  }
  
  this.getFullName = function() {
    return firstName + " " + lastName;
  };

  this.getFirstName = function() {
    return firstName;
  }

  this.getLastName = function() {
    return lastName;
  }

};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());


function palindrome(str) {
  let chars = str.match(/[a-zA-Z\d]/gi).map(c=>c.toLowerCase())
  let revChars = [...chars].reverse()

  return chars.join("") == revChars.join("")

}

console.log(palindrome("eyeE1334"));
console.log(palindrome("_eye"));
console.log(palindrome("1 eye for of 1 eye."))