function findMin(array) {
  var min = array[0];
	for (i=0; i < array.length; i++){
    if (min > array[i]){
      min = array[i];
    }
  }
        return min.toFixed(2);
}

//-----------------------------------------
function findMax(array) {
  var max = array[0];
	for (i=0; i < array.length; i++){
    if (max < array[i]){
      max = array[i];
    }
  }
        return max.toFixed(2);
}

//-----------------------------------------
function calcSum(array){
	var sum = 0;

	for (i=0; i < array.length; i++){
    sum = sum + array[i];
  }
	return sum.toFixed(2);
}

//-----------------------------------------
function calcMean(array) {
	
	mean = (calcSum(array) / array.length);
	return mean.toFixed(2);
}

//-----------------------------------------
function calcVariance(array) {

//step 1
  var mean = calcMean(array);
  var minusMeanArray = [];

	for(i = 0; i < array.length;i++){
		minusMeanArray[i] = (array[i]-mean);
	}

  var arraySquared = [];
	for(i = 0; i < minusMeanArray.length;i++){
		arraySquared[i] = Math.pow(minusMeanArray[i],2);
	}
	
  var arraySum = calcSum(arraySquared);

	var variance = arraySum/((arraySquared.length));

	return variance.toFixed(2);
}

//-----------------------------------------
function calcStdDev(array) {
	stdDv = Math.sqrt( calcVariance(array));
	return stdDv.toFixed(2);
}
//-----------------------------------------
function calcMedian(array) {

//sorted using Selection sort Algorithm
//source Book: Data Structures & Algorithms in Java Second Edition By Robert Lafore
  var num = array.length;
			for(outer=0; outer< num-1; outer++) {
				var lowest = outer;
				for(inner=outer+1; inner<num; inner++) {
					if(array[inner] 
						< array[lowest]) {
						lowest = inner;
					}
				}
				if(lowest != outer) {
					var temp = array[lowest];
					array[lowest] = array[outer];
					array[outer] = temp;
				}
			}

    //1. Median is the middle value when length is odd 
    //2. Average of middle two values when length is even. 
    var length = array.length;
  if (length % 2 !=0) { //if length is odd
    var middleNum = Math.floor(length/2);
    return (array[middleNum]).toFixed(2);;
  }
  else{
    var firstNum = array[Math.floor((length-1)/2)];
    var secondNum =  array[(length/2)];
    var median = (firstNum + secondNum)/2;
    return median.toFixed(2);

  }

}

/*

function calcMode(array) {
}

*/
//-----------------------------------------
function performStatistics(){
	
	var textAreaValues = document.getElementById("valuestextarea").value;
	
	//this turns each string value seperated by a space into an individual array
	var textAreaValuesArray = textAreaValues.split(" ");
	var array = [];

	for (i = 0; i < textAreaValuesArray.length; i++ ){
		array[i] = Number(textAreaValuesArray[i]);
	}

	
	var min = findMin(array);
	var max = findMax(array);
	var sum = calcSum(array);
	var mean = calcMean(array);
	var median = calcMedian(array);
	var variance = calcVariance(array);
	var stdDev = calcStdDev(array);
	
	document.getElementById("minField").value = min;
	document.getElementById("maxField").value = max;
	document.getElementById("sumField").value = sum;
	document.getElementById("meanField").value = mean;
	document.getElementById("medianField").value = median;
	document.getElementById("varianceField").value = variance;
	document.getElementById("StdDevField").value = stdDev;
	
	//this keeps the browser from erasing the values
	return false;
}


//M.Val






