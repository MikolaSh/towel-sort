
// You should implement your task here.


module.exports = function towelSort (matrix) {
    if(matrix==undefined){return []}
    console.log(matrix)
    var arr =[];
  for(var i=0;i<matrix.length;i++){
      if(i%2==0){
          for(var j=0;j<matrix[i].length;j++){
              arr.push(matrix[i][j]);
          }
      }
      if(i%2!=0){
        for(var j=matrix[i].length-1;j>=0;j--){
            arr.push(matrix[i][j]);
        }
      }
  } 
  console.log(arr)
   return arr;
}
