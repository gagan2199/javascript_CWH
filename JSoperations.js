let nam = "gagan";

console.log(nam);

nam[0] = "G";

console.log(nam);

nam = nam.toUpperCase();


console.log(nam.replace("G", "g"));
console.log(nam.replaceAll("G", "g"));

console.log(nam);

// sorting

let arr=[2,24,54,24,75,446,353,98,342];

console.log(arr.sort());  // will print 1,2,3,4,5,6,7,8,9 in first item

console.log(arr.sort((a,b)=>        // will print ascending order
{
    return a-b;
}));

//splice

let spl=arr.splice(4,2,1022,1023);
console.log(arr);         //will return new arr
console.log(spl);        //spl will return deleted values

let b=[1,2,3,4,5,6,7];

let slc= b.slice(3,5);    // git value from index 3 to 4.  .....5 index will not add

console.log(b);
console.log(slc);

let c=[10,20,30,40,50];

let rev=c.reverse();       // rev is for array

console.log(rev);

