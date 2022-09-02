

import fs  from 'fs'
let text = fs.readFileSync("sample.txt", "utf-8")

console.log( "read ", text.length);

let domains = {};
text.split("\n").forEach(
    processOneLine
)


function processOneLine(line){
    let regex = /\b\w*@(?<domain>(?:\w*\.)+\w+\b)/g;
    
    for (const match of line.matchAll(regex)) {
        let count = domains[match.groups.domain] || 0;
        domains[match.groups.domain] = ++count;
    }
}


Object.entries(domains).sort(
    (left, right) => left[1] - right[1]
).reverse().forEach( 
     ( [k,v]) =>console.log(k, v)
) ; 