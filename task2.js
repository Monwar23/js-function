function oddCheck(num){
    if(num%2!=0){
        const result=num*2;
        return result

    }
    else{
        const result=num/2
        return result
    }
}
const output=oddCheck(3)
const outpt=oddCheck(4)
console.log(output,outpt)