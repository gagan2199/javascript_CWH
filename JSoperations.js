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


