
function Home() {
  return (
    <div className="w-[390px] h-[844px] border">
        <div>
            <img className="w-[250px] h-[250px] mt-20 ml-[70px]" 
            src="src/assets/doce.jpeg" alt="Logo marca Ateliê Doce Brincadeiro" />
       </div>
            <div className="flex justify-center gap-5 border rounded-3xl p-2 m-6 bg-amber-600 mt-[310px] hover:bg-amber-700 transition-colors">
              <img className="w-6 h-6" 
              src="src/assets/cooking-pot.png" alt="inoni de uma panela cozinhando" />
              <a 
              href="http://localhost:3000/signup">SIGN UP</a>
       </div>
            <div className="flex flex-col text-center border rounded-3xl p-2 m-6 border-amber-500 text-amber-500 hover:bg-amber-100 transition-colors">
              <a
              href="http://localhost:3000/login ">LOG IN</a>
       </div>
             <div className="h-2 w-32 mt-3 border bg-zinc-900 rounded-3xl ml-[130px]">
      </div>
      
    </div>
  )
}

export default Home
