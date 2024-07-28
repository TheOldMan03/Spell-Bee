"use client"
import axios from "axios";
import { useEffect,useState } from "react";

export default function Home() {

  const [isClient,setIsClient]=useState(false);
  const [letters,setLetters]=useState([]);
  const [impLetter,setImpLetter]=useState("")
  const [word,setWord]=useState("");

  function shuffleArray() {
    const arr=[...letters];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i],arr[j]] = [arr[j],arr[i]]; // Swap elements
    }
    setLetters(arr)
  }

  useEffect(()=>{
    setIsClient(true);
  },[])

  useEffect(()=>{

    if (isClient) {
      if (localStorage.getItem("letter_arr") === null && localStorage.getItem("specialLetter")===null) {
        getLetters();
      } 
      
      else {
        setLetters(JSON.parse(localStorage.getItem("letter_arr")));
        setImpLetter(JSON.parse(localStorage.getItem("specialLetter")))
      }
    }
  },[isClient])


  async function getLetters(){
    const resp=await axios.get("http://localhost:3000/api/randomizeLetter");
    const {letters,choosenLetter}=resp.data;
    localStorage.setItem("letter_arr",JSON.stringify(letters)); 
    localStorage.setItem("specialLetter",JSON.stringify(choosenLetter))
  }

  // const getCurrTime=()=>{
  //   const time_now=new Date();

  //   let h=time_now.getHours();
  //   let m=time_now.getMinutes();
  //   let s=time_now.getSeconds();

  //   const am_pm=h>=12?"PM":"AM";
  //   h=h>12?h-12:h;
  //   h=h?h:12;

  //   const mstr=m<10?"0"+m:m;
  //   const sstr=s<10?"0"+s:s;

  //   const time_str=`${h}:${mstr}:${sstr} ${am_pm}`;
  //   return time_str;
  // }

  const handleInput=(e)=>{
    setWord(e.target.value);
  }

  const noBackSpace=(e)=>{
    if(e.key==="Backspace"){
      e.preventDefault();
    }
  }

  const backSpace=()=>{
    setWord(word.slice(0,-1));
  }


  return (
    // main div
    <div className="flex flex-col items-center">

        <div className="flex mt-6">
            <div className="text-[#FCE303] font-bold text-4xl">Spelling Bee</div>
            <div className="absolute right-14">Change Theme {/* This is temporary */}</div>
        </div>

        <div className="mt-20 w-full">
          <div className="max-w-[80%] min-h-[30px] bg-[#363637] mx-auto rounded-full">
            <div className="max-w-[10%] min-h-[30px] rounded-full bg-yellow-400 text-yellow-400"></div>
          </div> {/* This is the progress bar*/}
        </div> 


        <div className="mt-6 bg-[#EEF2F8] min-h-[50px] w-[40%]"></div> 

        <div className="mt-6">
          <input 
            value={word} 
            onChange={handleInput} 
            rows={1} 
            cols={15} 
            maxLength={15} 
            className="bg-black resize-none border-none text-center text-4xl caret-yellow-400 outline-none overflow-hidden"
            onKeyDown={noBackSpace}

          >

          </input>
        </div>

        <div className="max-w-[60%] max-h-[40%] flex justify-evenly mt-6 min-w-"> {/* This needs to be changed in the end...for now this is temp*/}
          <div className="w-24 h-24 rounded-full bg-white text-black mx-2 text-2xl flex justify-center items-center">{isClient?letters[0]:null}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{isClient?letters[1]:null}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{isClient?letters[2]:null}</div>
          <div className="w-24 h-24 rounded-full bg-yellow-400 text-black text-center mx-2 text-2xl flex justify-center items-center">{isClient?impLetter:null}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{isClient?letters[3]:null}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{isClient?letters[4]:null}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{isClient?letters[5]:null}</div>
        </div>

        <div className="flex mt-12">
          <button onClick={backSpace} className="w-24 h-12 bg-white text-black text-center rounded-full flex justify-center items-center mx-4">Delete</button>
          <button onClick={shuffleArray} className="w-12 h-12 rounded-full bg-white text-black flex justify-center items-center">R</button>
          <div className="w-24 h-12 bg-white text-black text-center rounded-full flex justify-center items-center mx-4">Enter</div>
        </div>

    </div>
  );
}
