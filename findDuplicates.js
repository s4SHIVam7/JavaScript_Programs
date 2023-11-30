/*
Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1]. 

Note: The extra space is only for the array to be returned. Try and perform all operations within the provided array. 

Example 1:

Input:
N = 4
a[] = {0,3,1,2}
Output: 
-1
Explanation: 
There is no repeating element in the array. Therefore output is -1.
Example 2:

Input:
N = 5
a[] = {2,3,1,2,3}
Output: 
2 3 
Explanation: 
2 and 3 occur more than once in the given array.
*/



//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let a = new Array(n);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar[i];
        let obj = new Solution();
        let res = obj.duplicates(a, n);
        if(res === 'undefined') return;
        if(res.length===0){
            console.log(-1);
        }
        else{
            printArray(res, res.length);
        }
    }
}// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    
    duplicates(a, n)
    
    {   
        if(n === 0) return [-1];
        const unique = new Set();
        const dup = new Set();
        for(const val of a){
            if(unique.has(val)){
                dup.add(val);
            }
            else{
            unique.add(val);
            }
        }
        return dup.size === 0 ? [-1] :
        [...dup].sort((a,b)=>a-b);
    }
}
