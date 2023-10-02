function lol(s) {
    let l = (s.length)-1;
    let count=0;
    let count2=0;

    if (s[l]==" "){
 
        for(let i=l;i>=0;i--)
        {
            count2++;
            if(s[i]!=" ")
            {
                i=0;
            }
        }
        console.log("cout2 = " + (count2-1)) ;
        l=l-2;
    }


    if (s[l]!=" ")
    {
        for(let i=l;i>0;i--)
        {
            count=count+1;
            if(s[i]==" ")
            {
                i=0;
            }
          
        }
        return count-1;
    }
   
};

let s="my name is gagankumar  ";

let s2="  abcdefgh";
let ct1=lol(s2);
let ct=lol(s);

console.log(ct);
console.log(ct1);