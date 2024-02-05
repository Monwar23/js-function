function make_avg(num){
    const size=num.length
    let sum=0
    for(const number of num){
        sum=sum+number

    }
    const avg=sum/size
    return avg
}

const avg=make_avg([3,5,7,9,11])
console.log(avg)