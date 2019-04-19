

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

function correctCalcChecker(){

}

function doMath(){

}
