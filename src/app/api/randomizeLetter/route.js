import { NextResponse } from "next/server";
import {words7} from "../../../../Words/filtered_words"
import fs from 'fs'
import path from "path"

export function GET(){
    let randomWord=words7[Math.floor(Math.random() * 3087)];
    // let randomLetter=randomWord[Math.floor(Math.random()*7)]

    let charList=randomWord.split('')
    let finalWords=getList(charList);

    return NextResponse.json({"allWords":finalWords,"letters":charList});
}

function intersection(listwords){
    let set1 = new Set(listwords[0]);
    let set2 = new Set(listwords[1]);
    let set3 = new Set(listwords[2]);
    let set4 = new Set(listwords[3]);
    let set5 = new Set(listwords[4]);
    let set6 = new Set(listwords[5]);
    let set7 = new Set(listwords[6]);


    let finalSet = new Set();
    set1.forEach(item => {
        if (set2.has(item) && set3.has(item) && set4.has(item) && set5.has(item) && set6.has(item) && set7.has(item)) {
            finalSet.add(item);
        }
    });

    let finalWords=Array.from(finalSet);
    return finalWords;
}

function getList(charList){
    let L=[]
    const str=path.join(process.cwd(),'Words')
    console.log(process.cwd())

    for(let i=0;i<charList.length;i++){
        let filepath=path.join(str,charList[i]+'.txt')
        const data=fs.readFileSync(filepath,'utf8');
        const w=data.split('\n').map((word)=>word.trim());
        L.push(w);
    }

    return intersection(L);
}