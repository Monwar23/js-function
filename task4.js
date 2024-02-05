function count_zero(numbers){
    let sum=0
    for(const number of numbers){
        if(number==0){
            sum=sum+1
        }
    }
    return sum
}
const sum=count_zero('1,0,0,1,0,1,0')
console.log(sum)