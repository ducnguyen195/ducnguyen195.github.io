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
// NAN : not a number


//vd
// default paramater
function sum (a=0, b=0){
    return a+b;
  }
  console.log(sum())
  console.log(sum(10,10))




  //Lab 1
  function findMath(a,b,c){
    if( a<b && b>c){
      return (b)
    }if(a>b && a>c ){
      return( a)
    }else return (c)
     
  }
  console.log(findMath(1,2,3 + " lon nhat" ))

//Lab 4
function nhuan(year){
    if((year % 4 ===0 && year % 100 !=0) || year % 400 ===0){
        return (" Nam Nhuan")
    }else return(" K Nhuan")

}
console.log(nhuan(2022))
//Lab 5
function tamgiac( a,b,c){
    if( a==b && b==c){
    return "Tam giac deu"
    }if((c**2 + b**2 ==a**2) || (a**2 + c**2 ==b**2)||(a**2 + b**2 ==c**2)){
        return ( " Tam giac vuong")
    }if( a==b || b==c || a==c ){
        return " Tam giac can"
    }else return " Tam giac thuong"
    
}
console.log(tamgiac(1,1,2))
//Lab 6

    function tuoi(z){
    if (z>18){
        return " Du tuoi"
    }else return " K du tuoi"

}
console.log(tuoi(10))
//Lab 3
function lab3(x,y){
    if(x>0 && y>0){
        return " Cung dau"
    }else return " K cung dau"
}
console.log(lab3(1,1))
//Lab 2
// function lab2(x){
//     if(x char)

//lab 4 :1
function number(a){
    if(a**2 >0){
        return " la so chinh phuong"
    }else return " k phai so chinh phuong"
}
console.log(number(2))
//lab 4.2
 
function chuoi(i){
    if(i.length >=10){
        return " True"
    }else return "Fail "
    
}
console.log(chuoi("Hello wordl"))

//BTVN
//Ex1
function chiahet(a){
    if(a % 3===0 && a % 5===0){
        return " FizzBuzz"
    }if(a % 3===0 ){
        return "Fizz"
    }if ( a % 5===0)       
        return "Buzz"
    
}
console.log(chiahet(15));

//Ex2
function phuong_trinh_bn(a, b)
{
    if (a == 0 && b == 0){
        return('Vo nghiem');
    }
    else if (a != 0 && b == 0){
        return('x = 0');
    }else   return("Phương trình có nghiệm x = " + (-b/a));
    
}
console.log(phuong_trinh_bn(1,2))

// Ex 2
function phuong_trinh_b2(a,b,c){
    let delta = b*b-4*a*c;  
    if( a==0){
        return ("Vo nghiem");
    }if(a!=0){
                
    } if(delta<0){
        return " Vo nghiem"
    }if(delta =0){
        return ("Co nghiem kep" + (-b/a*a))
    }if(delta>0){
        return ["x1 : " + (-b + Math.sqrt(delta)/ (2*a) ) ,
                " x2 : " + (-b - Math.sqrt(delta)/ (2*a))]
    }
}
 console.log(phuong_trinh_b2(-1,5,2));
 
 

// Ex3
function bmi(a,b){
    if(a / (b*b)){
        return (a/(b*b) + " BMI")
    }
}
console.log(bmi(62,1.65));

//Ex 4

function nhietdo(a){
    
    if(a*1.8+32){
        return (a*1.8+32 +"F" )
    }

}
 console.log(nhietdo(37))




