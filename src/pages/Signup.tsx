import Form from "../components/Form"

function Signup (){
  return( 
    <div className="w-[390px] h-[844px] border">
        <div className="flex flex-row justify-center gap-6">
            <span className=" text-amber-600 text-7xl">. . .</span>
               <strong className="text-2xl mt-10">Signup</strong> 
            <span className=" text-amber-600 text-7xl">. . .</span>
        </div>

            <div className="mt-6">
                  <Form />   
            </div>  


        <div className="flex justify-center gap-5 border rounded-3xl p-2 m-6 text-gray-500 mt-[250px] hover:bg-slate-200 transition-colors">
           <a href="http://localhost:3000/login">ALREADY HAVE AN ACCOUNT? </a>
        </div>
        
       <div className="h-2 w-32 mt-3 border bg-zinc-900 rounded-3xl ml-[130px]">
       </div>
      
    </div>

  )
}

export default Signup