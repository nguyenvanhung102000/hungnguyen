function generateArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor((Math.random() * 81) + 10);
    }
    return arr;
}

function printArray(arr) {
    document.write(`${arr.join("-")}<br>`);
}

function isPrime(number) {
    let a = Math.floor(Math.sqrt(number));
    if (number == 2) {
        return true;
    } else {
        if (number > 2) {
            for (let i = 2; i <= a; i++) {
                if (number % i == 0) {
                    return false
                }
            }
            return true;
        }
        else{
            return false;
        }
    }
}

function printPrimes(arr) {
    let songuyento = [];
    let size = arr.length;
    for (let i =0; i < size; i++) {
        if ( isPrime(arr[i]) == true){
           songuyento.push(arr[i]);
        }
    }
    document.write(`Những số nguyên tố trong mảng là :${songuyento}<br>`);
}

function  sumPrimes(arr){
    let sum = 0;  
    for (let number of arr){
        if (isPrime(number) ==true ){
            sum += number;
        }       
    }
    return sum;
}

function main(){
    let size = +prompt("Hãy nhập vào giá trị size")
    while (size <=0){
        size = +prompt("Nhập lại giá trị size lớn hơn 0")
    }
    let arr = generateArray(size);
    printArray(arr);
    printPrimes(arr);
    document.write(`Tổng giá trị các số nguyên tố trong mảng là : ${sumPrimes(arr)}`)
}

main();