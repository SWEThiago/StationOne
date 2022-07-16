function Navigation () {
  return(
    <nav className="border bg-white w-[390px] h-24  absolute">
    <footer className="flex justify-center gap-24 pt-4 text-slate-400">
      <a className="hover:text-amber-600" href="http://localhost:3000/food">Food</a>
      <a className="hover:text-amber-600" href="http://localhost:3000/orders">Orders</a>
      <a className="hover:text-amber-600" href="http://localhost:3000/profile">Profile</a>
      </footer>   

       <div className="h-2 w-32 mt-9 border bg-zinc-900 rounded-3xl ml-[130px]">
       </div>
 </nav>
  )
}

export default Navigation