/*
    Cette fonction prend une liste de tableaux et 
    recherche les numéros consécutifs puis 
    les regroupe en fonction de la plage.
*/

// Fonctions
const merge = (first, second) => {
  for(let i=0; i<second.length; i++) {
    first.push(second[i]);
  }
  return first;
}

const consecutive = (list) =>{
  
  const result = [];

  for(let i=0; i < list.length; i++){
    // Get the min and the max of each array
    let min = list[i][0];
    let max = list[i][1];
    // Get all numbers between array range e.g [1, 3] = [1, 2, 3]
    let c = Array.from({length:max-min+1},(v,k)=>k+min);

    // Merge all numbers of each array into one single array
    merge(result, c);
  }

  // Remove duplicates
  const uniqueArray = result.filter(function(item, pos) {
    return result.indexOf(item) == pos;
  });
  
  // Sort Array
  uniqueArray.sort(function(a, b) {
    return a - b;
  });

  getRanges(uniqueArray);
  
} 

const getRanges = (sortedArray) => {
  let ranges = [], rstart, rend;
  for (let i = 0; i < sortedArray.length; i++) {
    rstart = sortedArray[i];
    rend = rstart;
    while (sortedArray[i + 1] - sortedArray[i] == 1) {
      rend = sortedArray[i + 1]; // increment the index if the numbers sequential
      i++;
    }
    // Preview
    ranges.push(rstart == rend ? rstart+'' : rstart + '-' + rend);
  }
  //return ranges;
  console.log(ranges);
}


// Exemples
consecutive([[0, 3], [6, 10]]);
consecutive([[0, 5], [2, 4]]);
consecutive([[7, 8], [3, 6], [2, 4]]);
consecutive([[0, 5], [3, 10]]);
consecutive([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]);