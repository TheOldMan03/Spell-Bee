export default function Home() {
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

        {/* <div className="">This is going to be my text area</div>

        <div className="">Hexagon Lists</div>

        <div className="">The various buttons</div> */}

    </div>
  );
}
