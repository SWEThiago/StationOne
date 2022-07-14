import { gql, useQuery } from "@apollo/client";
import { FormEvent, useState } from "react";

const LOGIN_APP = gql`
query LOGIN_APP {
  subscriber(where: {email: "Thiago@gmail.com"}) {
    password
  }
}
`



function Profile () {
  const { data } = useQuery<{}>(LOGIN_APP)
  console.log(data);
  return (
    <div className="w-[390px] h-[844px] border">
        <div className="border fixed bg-red-900 w-[390px] h-24"></div>

            <nav className="border fixed bg-white w-[390px] h-24 mt-[780px]">
                <footer className="flex justify-center gap-24 pt-4 text-slate-400">
                       <a className="hover:text-amber-600" href="http://localhost:3000/food">Food</a>
                       <a className="hover:text-amber-600" href="http://localhost:3000/orders">Orders</a>
                       <a className="hover:text-amber-600" href="http://localhost:3000/profile">Profile</a>
                </footer>   

                 <div className="h-2 w-32 mt-9 border bg-zinc-900 rounded-3xl ml-[130px]">
                </div>
             </nav>

    </div>

  )
}
export default Profile