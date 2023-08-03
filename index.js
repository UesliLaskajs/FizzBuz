
for(let num=0;num<100;num++){
    if(num%3==0){
        console.log("FIZZ")
    }
    else if (num % 5==0){
        console.log('BUZZ')
    } 
    else if(num % 5==0|| num % 3==0){
        console.log("FIZZ Buzz")
    }
    console.log(num)
}
