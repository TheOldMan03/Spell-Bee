import { NextResponse } from "next/server";
import {words7} from "../../../../Words/filtered_words"
import fs from 'fs'
import path from "path"

export function GET(){
    let randomWord="rankling"  //words7[Math.floor(Math.random() * 3087)];
    // let randomLetter=randomWord[Math.floor(Math.random()*7)]

    let charList=randomWord.split('')
    let finalWords=getList(charList);

    return NextResponse.json({"allWords":finalWords,"letters":charList});
}


// function filterWords(Words,charList){
//     let finalWords=[]
//     const letter_set=new Set(charList);

//     for(let i=0;i<Words.length;i++){
//         let word=Words[i];
//         for(let j=0;j<word.length;j++){
//             if(!letter_set.has(word[j])){
//                 break;
//             }
//             if(j==word.length-1){
//                 finalWords.push(word);
//             }
//         }    
//     }

//     return finalWords;
// }

function getList(charList){
    let L=[]
    const str=path.join(process.cwd(),'Words')
    console.log(process.cwd())

    // for(let i=0;i<charList.length;i++){
    //     let filepath=path.join(str,charList[i]+'.txt')
    //     const data=fs.readFileSync(filepath,'utf8');
    //     const w=data.split('\n').map((word)=>word.trim());
    
    //     L.push(w);
    // }

    // let set_words=new Set(charList)
    // let finalWords=[]
    // let flag;

    // for(let i=0;i<7;i++){
    //     for(let j=0;j<L[i].length;j++){
    //         flag=1;
    //         for(let k=0;k<L[i][j].length;k++){
    //             if(!set_words.has(L[i][j][k])){
    //                 flag=0;
    //                 break;
    //             }
    //         }
    //         if(flag==1){
    //             finalWords.push(L[i][j]);
    //     }   }
    // }

    const wordDict = {};
    
    // Read all files and store the words in a dictionary
    for (let char of charList) {
        let filepath = path.join(str, char + '.txt');
        if (!wordDict[char]) {
            const data = fs.readFileSync(filepath, 'utf8');
            wordDict[char] = data.split('\n').map(word => word.trim());
        }
    }
    
    // Create a set of all words from the files
    let allWords = new Set();
    for (let char of charList) {
        for (let word of wordDict[char]) {
            allWords.add(word);
        }
    }
    
    // Check if each word can be made using the characters in charList
    let finalWords = [];
    let setWords = new Set(charList);
    
    for (let word of allWords) {
        let flag = true;
        for (let char of word) {
            if (!setWords.has(char)) {
                flag = false;
                break;
            }
        }
        if (flag) {
            finalWords.push(word);
        }
    }


    return finalWords;
}