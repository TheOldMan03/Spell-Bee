import axios from "axios";

export default async function Home() {

  const resp=await axios.get("http://localhost:3000/api/randomizeLetter");
  const {letters}=resp.data;

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
          <div className="w-24 h-24 rounded-full bg-white text-black mx-2 text-2xl flex justify-center items-center">{letters[0]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{letters[1]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{letters[2]}</div>
          <div className="w-24 h-24 rounded-full bg-yellow-400 text-black text-center mx-2 text-2xl flex justify-center items-center">{letters[3]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{letters[4]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{letters[5]}</div>
          <div className="w-24 h-24 rounded-full bg-white text-black text-center mx-2 text-2xl flex justify-center items-center">{letters[6]}</div>
        </div>

        <div className="flex mt-12">
          <div className="w-24 h-12 bg-white text-black text-center rounded-full flex justify-center items-center mx-4">Delete</div>
          <div className="w-12 h-12 rounded-full bg-white text-black flex justify-center items-center">R</div>
          <div className="w-24 h-12 bg-white text-black text-center rounded-full flex justify-center items-center mx-4">Enter</div>
        </div>

    </div>
  );
}
