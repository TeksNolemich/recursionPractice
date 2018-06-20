var factRecur = function(num) {
	//factorial of any positive integer
  if (num === 1) {
    return num;

  }else{
    return num * factRecur(num-1)
  }
};

var bunnyE = function(num) {
	//bunny ear problem; literally doules the number
  if (num === 0) {
    return 0;
  }else{
    return 2 + bunnyE(num-1)
  }
};

var fibbo = function(num) {
	//fibbonaci sequence of any positive number
  if (num === 0) {
    return 0;
  }else if (num === 1) {
    return 1;
  // }else if (num === 2) {
  //   return 1;
  }else {
    return fibbo(num - 2) + fibbo(num-1);
  }
};

var tri = function(num) {
	//returns the total number of blocks for a triangle with the 
	//input num being the amount of blocks on the bottom level
  if (num === 0) {
    return 0;
  }else if (num === 1) {
    return 1; 
  }else {
    return num + tri(num - 1)
  }
};

var digSum = function(num) {
	//adds all the digits in an integer; ie 111 => 3
  var sum = 0;
  if ((num / 10) === 0) {
    return 0;
  }else {

    return Math.floor((num%10) + digSum(num/10));
  }
};

var countSevs = function(num) {
	//counts the number of 7's in a long ass number
  if (num % 10 === 0) {
    return 0;
  }
  else {
    if ((num % 10) === 7) {
      return 1 + countSevs(Math.floor(num/10));
    }else {
      return countSevs(Math.floor(num/10));
    }
  }
};

var powerFunk = function(num, pwr) {
	//standard power function, but using recursion "oh shiet lol"
  if (pwr === 0) {
    return 1;
  }else if (pwr === 1) {
    return num;
  } else {
    return num * powerFunk(num, (pwr -1));
  }
};

var countX = function(str) {
	//counts the number of lowercase x's in a string
	//I know this is written poorly, but I'm trying to solidify recursion in my brain
  var strArr = str.split('')
  if (strArr.length / 10 === 0) {
    return 0;
  } else {
    if ((strArr[strArr.length-1]) === 'x') {
      strArr.pop();
      var strungTogether = strArr.join('');
      return 1 + countX(strungTogether);
    } else {
      strArr.pop();
      var strungTogether = strArr.join('');
      return countX(strungTogether);
    }
  }
};

var countHi = function(str) {
	//counts the c
  if (str.length / 10 === 0) {
    return 0;
  } else {
    if ((str.slice(-2) === 'hi')) {
      var shortenedBcFound = str.slice(0, -2);
      return 1 + countHi(shortenedBcFound);
    } else {
      var shortened = str.slice(0, -1);
      return countHi(shortened)
    }
  }
};

var changeXY = function(str) {
	//changes any lowercase x to y in a string; returns modified string
  if (str / 10 === 0) {
    return '';
  }
  else {
    if (str.charAt(0) === 'x') {
      return 'y' + changeXY(str.slice(1,));
    }
    else {
      return str.charAt(0) + changeXY(str.slice(1,));
    }
  }
};

var changePi = function(str) {
	//change the 'pi' to '3.14'
  if (str / 10 === 0) {
    return '';
  } else {
    if (str.slice(0,2) === 'pi') {
      return '3.14' + changePi(str.slice(2, str.length));
    } else {
      return str.charAt(0) + changePi(str.slice(1, str.length))
    }
  }
};

var noX = function(str) {
	//removes all occurences of lowercase x's from a string
  if (str.length / 10 === 0) {
    return '';
  } else {
    if (str.charAt(0) === 'x') {
      return noX(str.slice(1,));
    } else {
      return str.charAt(0) + noX(str.slice(1,));
    }
  }
};

var array6 = function(arr, index) {
	// looks for occurance of 6 and return true or false 
	//	in regards to whether or not the number is in the arr
  if (arr.length < index) {
    return false;
  } else {
    if (arr[index] === 6) {
      return true;
    }
    else {
      return array6(arr, (index + 1));
    }
  }
};

var array11 = function(arr, index) {
	//returns the number of occurences of the the number 11 in an array
	if (arr.length < index) {
    return 0;
  } else {
    if (arr[index] === 11) {
      return 1 + array11(arr, (index + 1));
    } else {
      return array11(arr, (index + 1));
    }
  }
};

var array220 = function(arr, index) {
	// return whether or not there is a "pair" meaning the number is 
	// followed by the that same number multiplied by 10
  if (arr.length < index) {
    return false;
  } else {
    if ((arr[index] * 10) === arr[index + 1]) {
      return true;
    } else {
      return array220(arr, index + 1);
    }
  }
}

var allStar = function(str) {
	//injects a * character after every letter except for the last
  if (str.length === 1) {
    return str.trim();
  } else {
    return str.charAt(0) + '*' + allStar(str.slice(1,))
  }
}


var pairStar = function(str) {
	//injects a '*' in between 2 letters that are the same
  if (str.length === 1) {
    return str;
  }else {
    if (str.slice(0,1) === str.slice(1,2)) {
      return str.charAt(0) + '*' + pairStar(str.slice(1,));
    }
    else {
      return str.charAt(0) + pairStar(str.slice(1,));
    }
  }
};

var endX = function (str) {
	//takes every lowercase 'x' in a string and places it at the end
  if (str.length === 1) {
    return str;
  } else {
    if (str.charAt(0) === 'x') {
      return endX(str.slice(1,)) + 'x';
    } else {
      return str.charAt(0) + endX(str.slice(1,));
    }
  }
};

var countAbc = function(str) {
	//counts the occurences of 'abc' or 'aba' in a string
  if (str.length === 1) {
    return 0;
  } else {
    if (str.slice(0,3) === 'abc' || str.slice(0,3) === 'aba') {
      return 1 + countAbc(str.slice(3,));
    }
    else {
      return countAbc(str.slice(1,));
    }
  }
};

var countPairs = function(str) {
	//count the occurences of matching letters seperated by a single character
  if (str.length === 1) {
    return 0;
  } else {
    if (str.charAt(0) === str.charAt(2)) {
      return 1 + countPairs(str.slice(1,));
    } else {
      return countPairs(str.slice(1,));
    }
  }
};

var count11 = function(str) {
	//counts the number of times the number '11' occurs in a string
	//I am getting bored of writing these 
  if (str.length === 0) {
    return 0;
  } else {
      if (str.slice(0,2) === '11'){
        return 1 + count11(str.slice(2,));
      } else {
        return count11(str.slice(1,));
      }
  }
};

var stringClean = function(str) {
	// strips a string of any matching characters ie 'aaaaabcdddeeee' => 'abcde'
  if (str.length === 0) {
    return str;
  } else {
    if (str.charAt(0) === str.charAt(1)) {
      return stringClean(str.slice(1,))
    } else {
      return str.charAt(0) + stringClean(str.slice(1,))
    }
  }
};

var counthi2 = function (str) {
	//counts the occurance of lowercase 'hi'; if preceded by an 'x', skips it
  if (str.length === 0) {
    return 0;
  } else {
    if (str.slice(0,2) === 'hi'){
      return 1 + counthi2(str.slice(2,));
    } else if (str.charAt(0) === 'x' && str.slice(1,3)) {
      return counthi2(str.slice(3,));
    } else {
      return counthi2(str.slice(1,))
    }
  }
};

var parenBit = function(str) {
	//returns whatever is inside a string with parenthesis
	// 'aaa(bce)xx' => '(bce)'
  if (str.length === 0) {
    return str;
  } else {
    if (str.charAt(0) === '(') {
      if (str.slice(-1) === ')') {
        return str;
      } else {
        return parenBit(str.slice(0, (str.length - 1)))
      }
    } else {
        return parenBit(str.slice(1,));
    } 
  }
}

var nestParen = function (str) {
	//looks at nested parenthesis and returns true if all are completely empte
  if (str.charAt(1) === ')'){
    return true;
  } else {
    if (str.slice(-1) === ')') {
      console.log(str, str.length)
      return nestParen(str.slice(1, str.length-1))
    }
  }
  return false;
}

var strCount = function(str, word) {
	//counts the amount of matched words in a given string
  if (str.length < word.length) {
    return 0;
  } else {
    if (str.slice(0, word.length) === word) {
      return 1 + strCount(str.slice(word.length,), word);
    } else {
      return strCount(str.slice(1,), word);
    }
  }
}

var strCopies = function(str, word, total) {
	//count the amount of times a word occurs in a string
	//if the amount  matched is the same as the total return true 
  if (total === 0) {
    return true;
  } else {
    if (str.slice(0, word.length) === word) { 
      return strCopies(str.slice(word.length,), word, total-1);
    } else {
      return strCopies(str.slice(1,), word, total);
      
    }
  }
  return false;
}

var strDist = function (str, word) {
	//counts the length of a string  that starts and ends with a specific word
  if (str.length === 0) {
    return 0;
  } else if (str.startsWith(word) && str.endsWith(word)) {
    return str.length;
  } else {
      if (str.slice(0, word.length) === word) {
        if (str.slice(-(word.length)) === word) {
          return str.length;
        } else {
          return strDist(str.slice(0,str.length-1), word);
        }
      } else {
        console.log(str)
    	return strDist(str.slice(1,), word);
      }
  }
}
