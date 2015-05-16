function problem1(){
    var sum=0;
    for(var i = 0; i<1000; i++){
        if(i%3===0 || i%5===0)
        sum+=i;
    }
    return sum;
}

function problem2(input){
    var sum=0;
	previous=1;
	for(var i=1; i<input; previous=temp){
		console.log(i);
        if(i%2===0){
			sum+=i;
		}
        var temp=i;
		i+=previous;
	}
	return sum;
}

function problem3(input){
    var reduced=input;
    var primeFactors = [];
    var factor=2;
    while(reduced>1){
        if(reduced%factor===0){
            primeFactors.push(factor);
            reduced=reduced/factor;
        }
        else{
            factor++;
        }
    }
    return primeFactors[primeFactors.length-1];
}