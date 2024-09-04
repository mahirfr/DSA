export default function bs_list(haystack: number[], needle: number): boolean {

    //WORKING RECURSIVE SOLUTION
    let lo = 0;
    let hi = haystack.length - 1;    

    if (haystack[lo] === needle)                        
        return true;
    else if (haystack[hi] === needle)                        
        return true;
    else if (lo > hi)                                       
        return false;

    let m = Math.floor((lo + hi) / 2);
    if (haystack[m] >= needle) 
        return bs_list(haystack.slice(lo + 1, m + 1), needle);
    else 
        return bs_list(haystack.slice(m, hi), needle);




    // PRIMAGEN'S SOLUTION
    //let lo = 0;
    //let hi = haystack.length;

    //do {
    //    const m = Math.floor((lo + hi) / 2);

    //    if (haystack[m] === needle)
    //        return true;
    //    else if (haystack[m] > needle)
    //        hi = m;
    //    else 
    //        lo = m + 1;

    //} while (lo < hi);

    //return false;

}