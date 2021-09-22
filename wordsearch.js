
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    let isFound = false;
    //check horizontally
    for (let l of horizontalJoin) {
      if (l.includes(word)) {
        return isFound = true;
      }
    }
    //check vertically
    let verticalJoin = [];
    for (let row = 0; row < letters[0].length; row++) {
      verticalJoin[row] = [];
      for (let col = 0; col < letters.length; col++) {
        verticalJoin[row].push(letters[col][row]);
      }
      let verticallyJoin = verticalJoin[row].join("");
      if (verticallyJoin.includes(word)) {
        return isFound = true;
      }
    }
    
    //check diagonally
    
    //check backwardly
    
    return isFound;
  };
  
  // const wordSearch = (letters, word) => {
  //   const horizontalJoin = letters.map((ls) => ls.join(""));
  //   console.log("horizontaljoinresult", horizontalJoin);
  //   let isFound = false;
  //   //check horizontally
  //   for (let l of horizontalJoin) {
  //     if (l.includes(word)) {
  //       isFound = true;
  //     }
  //   }
  //   //check vertically
  //   let verticalJoin = [];
  //   for (let row = 0; row < letters[0].length; row++) {
  //     verticalJoin[row] = [];
  //     for (let col = 0; col < letters.length; col++) {
  //       verticalJoin[row].push(letters[col][row]);
  //     }
  //   }
  //   let verticalResult = verticalJoin.map((ls) => ls.join(""));
  //   for (l of verticalResult) {
  //     if (l.includes(word)) {
  //       isFound = true;
  //     }
  //   }
  
  //   return isFound;
  // };
  
  // module.exports = wordSearch;
  
  
  module.exports = wordSearch;