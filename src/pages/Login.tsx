import { gql, useQuery } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";



const LOGIN_APP = gql`
   query LOGIN_APP($email: String!) {
   subscriber(where: { email: $email}) {
     email
     name
     password
  }
}
`

interface subscriber {
   email: String;
   password: String;
}

function Login (){

 const navigate = useNavigate()
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const pageChange = () => {
   if (email && password)  
      authenticationEmail()
   else console.log("campo vazio")
 }
 
 const { data } = useQuery (LOGIN_APP, {
   variables: {email},
 }); 
   
const authenticationEmail = () => {
   if (data?.subscriber?.email != email) console.log("usuario nao cadastrado")
   else authenticationPassword()
}

 const authenticationPassword = () => {
       if (data?.subscriber?.password === password) navigate('/food')
       else  console.log("senha incorreta" )
}

 async function handleLogin(event: FormEvent){
   event.preventDefault();
   console.log({email, password})
   console.log(data)
   }

   
   return( 
      <>
     
 

      <div className="w-[390px] h-[844px] border">
        <div className="flex flex-row justify-center gap-6">
           <span className=" text-amber-600 text-7xl">. . .</span>
           <strong className="text-2xl mt-10">Login</strong>
           <span className=" text-amber-600 text-7xl">. . .</span>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-2 w-full mt-10">

           <h2 className="mx-4 text-zinc-500">Email</h2>

           <input className="border rounded-md px-5 mx-4 h-10"
              type="text" placeholder="Enter email..."
              onChange={event => setEmail(event.target.value)} 
              />

           <h2 className="mx-4 text-zinc-500">Password</h2>

           <input className="border rounded-md px-5 mx-4 h-10"
              type="password" placeholder="Enter password..."
              onChange={event => setPassword(event.target.value)} 
              />

           <button className=" gap-5 border rounded-3xl p-2 m-6 bg-amber-600 text-neutral-50 mt-[40px] hover:bg-amber-700 transition-colors disabled:opacity-50"

              onClick={pageChange}
           >
              LOGIN
           </button>
        </form>

        <div className="flex justify-center gap-5 p-2 m-6 mt-[20px] text-gray-400">
           FORGOT PASSWORD?
        </div>

        <div className="flex justify-center gap-5 border rounded-3xl p-2 m-6 text-gray-500 mt-[200px] hover:bg-slate-200 transition-colors">
           <a href="http://localhost:3000/signup">SIGNUP</a>
        </div>

        <div className="h-2 w-32 mt-3 border bg-zinc-900 rounded-3xl ml-[130px]">
        </div>

     </div>
     </>
  )

  }
export default Login