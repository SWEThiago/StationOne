function Signup (){
  return( 
    <div className="w-[390px] h-[844px] border">
        <div className="flex flex-row justify-center gap-6">
            <span className=" text-amber-600 text-7xl">. . .</span>
               <strong className="text-2xl mt-10">Signup</strong> 
            <span className=" text-amber-600 text-7xl">. . .</span>
        </div>

       <div className="ml-6 text-slate-500 mt-28">
        Email
       </div>

       <input className="border w-[340px] h-11 ml-6 rounded pl-4 mt-4" 
       type="text" placeholder="Enter email..." />   

        <div className="ml-6 text-slate-500 mt-4">
          Password
          </div>

          <input className="border w-[340px] h-11 ml-6 rounded pl-4 mt-4" 
       type="text" placeholder="Enter password..." />  

        <div className="flex justify-center gap-5 border rounded-3xl p-2 m-6 bg-amber-600 text-neutral-50 mt-[40px] hover:bg-amber-500 transition-colors">
           SIGNUP 
        </div>

        <div className="flex justify-center gap-5 border rounded-3xl p-2 m-6 text-gray-500 mt-[250px] hover:bg-slate-200 transition-colors">
           <a href="http://localhost:3000/login">ALREADY HAVE AN ACCOUNT? </a>
        </div>
        
       <div className="h-2 w-32 mt-3 border bg-zinc-400 rounded-3xl ml-[130px]">
       </div>
      
    </div>

  )
}

export default Signup