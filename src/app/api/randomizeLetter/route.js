import words7 from '@/';
import fs from 'fs'

function randomWord(){
    let Randomword = words7[Math.floor(Math.random() * 3087)];
    return Randomword
}

function getList(charList){

    let L=[]

    for(let i=0;i<charList.length;i++){
        const data=fs.readFileSync(charList[i]+'.txt','utf8');
        const w=data.split('\n').map((word)=>word.trim());
        L.push(w);
    }

    return interesection(L);
}


function interesection(listwords){
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

function getRandomLetter() {
    let word = randomWord();
    let randomLetter = word[Math.floor(Math.random()*7)];

    let charList=randomLetter.split('');
    let finalWords=getList(charList);

    return finalWords;
}

randomWord();
getRandomLetter();
