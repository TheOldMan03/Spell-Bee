import { NextResponse } from "next/server";
import {words7} from "../../../../Words/filtered_words"
import fs from 'fs'
import path from "path"

export async function GET(){
    let randomWord=words7[Math.floor(Math.random() * 3087)];
    let randomLetter=randomWord[Math.floor(Math.random()*7)]

    let charList=randomWord.split('')
    let finalWords=getList(charList,randomLetter);
    charList=charList.filter((char)=>char!==randomLetter);
    return NextResponse.json({"allWords":finalWords,"letters":charList,"choosenLetter":randomLetter});
}


function getList(charList,impLetter){
    const str=path.join(process.cwd(),'Words')
    console.log(process.cwd())

    const wordDict = {};
    
    // Read all files and store the words in a dictionary
    for (let char of charList) {
        let filepath = path.join(str, char + '.txt');
        const data = fs.readFileSync(filepath, 'utf8');
        wordDict[char] = data.split('\n').map(word => word.trim());
    
    }

    let charSet=new Set(charList);
    let finalWords=new Set()

    //while iterating thru the dictionary the words shud contain letters present in charList strictly
    //and the word shud contain the impLetter 

    for (let letter in wordDict) {
        let wordArr = wordDict[letter];

        for (let word of wordArr) { 
            if (finalWords.has(word)) continue;

            let flag = false;

            for (let char of word) {
                if (!charSet.has(char)) {
                    flag = false;
                    break;
                }

                if (char === impLetter) flag = true;
            }

            if (flag) finalWords.add(word);
        }
    }

    return Array.from(finalWords);
}
   