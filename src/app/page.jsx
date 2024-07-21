import axios from "axios";

export default async function Home() {

  const ISSERVER = typeof window === "undefined";

  const getCurrTime=()=>{
    const time_now=new Date();

    let h=time_now.getHours();
    let m=time_now.getMinutes();
    let s=time_now.getSeconds();

    const am_pm=h>=12?"PM":"AM";
    h=h>12?h-12:h;
    h=h?h:12;

    const mstr=m<10?"0"+m:m;
    const sstr=s<10?"0"+s:s;

    const time_str=`${h}:${mstr}:${sstr} ${am_pm}`;
    return time_str;
  }

  if(!ISSERVER && (localStorage.getItem("letter_arr")===null || getCurrTime()==="12:00:00 AM")){
    const resp=await axios.get("http://localhost:3000/api/randomizeLetter");
    const {letters}=resp.data;
    localStorage.setItem("letter_arr",JSON.stringify(letters)); 
  }

  const letters=ISSERVER?null:JSON.parse(localStorage.getItem("letter_arr"));
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
          <textarea rows={1} cols={15} maxLength={15} className="bg-black resize-none border-none text-center text-4xl caret-yellow-400 outline-none overflow-hidden"></textarea>
        </div>

        <div className="max-w-[60%] max-h-[40%] flex justify-evenly mt-6 min-w-"> {/* This needs to be changed in the end...for now this is temp*/}
          <div className="w-24 h-24 rounded-full bg-white text-black mx-2 text-2xl flex justify-center items-center">{ISSERVER?null:letters[0]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{ISSERVER?null:letters[1]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{ISSERVER?null:letters[2]}</div>
          <div className="w-24 h-24 rounded-full bg-yellow-400 text-black text-center mx-2 text-2xl flex justify-center items-center">{ISSERVER?null:letters[3]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{ISSERVER?null:letters[4]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{ISSERVER?null:letters[5]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{ISSERVER?null:letters[6]}</div>
        </div>

        <div className="flex mt-12">
          <div className="w-24 h-12 bg-white text-black text-center rounded-full flex justify-center items-center mx-4">Delete</div>
          <div className="w-12 h-12 rounded-full bg-white text-black flex justify-center items-center">R</div>
          <div className="w-24 h-12 bg-white text-black text-center rounded-full flex justify-center items-center mx-4">Enter</div>
        </div>

    </div>
  );
}
