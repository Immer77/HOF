// Opgave 8.2
let names = ["Peter", "Prut", "Kage", "anne", "Johan", "Oskar"];

/**
 * tager en comparato som parameter
 * 
 * @param {*} comparator Den slags comparator vi har tænkts at bruge eks. compare, compareLen, compareIgnore
 * @returns en indre sort funktion som bruger den comparator der er i parameteren 
 */
function compareSort(comparator){
    return sortFunction = function (stringArray) {
        try {
            if(stringArray instanceof Array){
                return stringArray.sort((s1,s2) => comparator(s1,s2));
            }else{
                throw new console.error("Ikke et Array");
            }
        } catch (e) {
            console.log("Error recieved:", e);
        }
    }
    
}

// Simpler version
function compareSortOne(comparator){
    return function(array){
        return array.sort(comparator);
    }
}

function compareLen(s1, s2) {
    return compare(s1.length, s2.length);
}
function compareIgnore(s1, s2) {
    return compare(s1.toLowerCase(), s2.toLowerCase());
   
}

function compare(s1, s2) {
    if (s1 < s2)
        return -1;
    else if (s1 > s2)
        return 1;
    else return 0;
}

let compareSorting = compareSort(compare);
let lenSort = compareSort(compareLen);
let compareIgnores = compareSort(compareIgnore);

console.log(compareSorting(names));
console.log(lenSort(names));
console.log(compareIgnores(names));



