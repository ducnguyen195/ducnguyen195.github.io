//Lab 1
let a = 10
let b = 20
    if(a > b) console.log(a);
    else console.log( b);


//Lab 2
function kiemtra_chanle(x){
    if(x % 2 ===0){
        return " là số chẵn"
    }else{
        return " là số lẻ"
    }
}
console.log(kiemtra_chanle( 3) );

// Lab 3
 function  divisible(z){
    if(z % 3 ===0 && z % 5 === 0){
        return " chia het cho 3 va 5"
    }else return " k chia het cho 3 va 5"
 }
 console.log(divisible(15));

 //Lab 4
 function sum ( a,b,c){
    if( a+b==c){
        return " True"
    }else {return " False"
    }
 }
 console.log(sum( 2, 2, 3))
    



// Lab 5
function run(mark){
    if(mark>=85){
        return " la A "
    } if(mark>=70){
        return " la B"
    }if( mark>=40){
        return " la C"
    }else return " la D"
        
    
}
    console.log(run(10));





