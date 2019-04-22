

function getPath(str){
    let folder = str.split('/');
    return folder;
}

function getPathParts(href){
    // var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    // return match && {
    //     // href: href,
    //     protocol: match[1],
    //     host: match[2],
    //     // hostname: match[3],
    //     port: match[4],
    //     // pathname: match[5],
    //     // search: match[6],
    //     // hash: match[7]
    // }
}

function getCapitalCount(item){
    let result = [];
    
    for (let i in item) {
      
      if (item[i][0] === item[i][0].toUpperCase()) {
        result.push(item[i])
      } 
    }
    return result.length;
  }	

function correctCalcChecker(math){
  let results = [];

  results = math.filter(obj => {
    if (doMath(obj.num1, obj.num2, obj.op) === obj.result) {
      return true;
    }
    return false;
  });
  return results;
}

function doMath(num1, num2, op){
  if (op === '+') {
    return num1 + num2;
  } else if (op === '-') {
    return num1 - num2;
  } else if (op === '*') {
    return num1 * num2;
  } else if (op === '/') {
    return num1 / num2;
  }
}
