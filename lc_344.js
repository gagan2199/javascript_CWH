function rs (s) {
    let l=(s.length)-1;
    let ct=0;
    let temp= s;

    console.log(temp);
    for(let i=l;i>=0;i--)
    {
        s[ct++]=temp[i];
    }

    console.log(s);
};

s = ["h","e","l","l","o"];
ss=["a","b","c","d"];
rs(s);