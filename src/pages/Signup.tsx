import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";


const CREATE_SUBSCRIBER_MUTATION = gql`
mutation createSubscriber ($name: String!, $email: String!, $password: String!){
  createSubscriber(data: {name: $name, email: $email, password: $password}){
    id
  }
}
`


function Signup (){

const navigate = useNavigate()

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [createSubscriber, { loading } ] = useMutation(CREATE_SUBSCRIBER_MUTATION)



async function handleSubscribe(event: FormEvent){
  event.preventDefault();
 
  await createSubscriber({
    variables:{
      name,
      email,
      password,
    }
  })
  navigate('/food')
}

  return( 
    <div className="w-[390px] h-[844px] border">
        <div className="flex flex-row justify-center gap-6">
            <span className=" text-amber-600 text-7xl">. . .</span>
               <strong className="text-2xl mt-10">Signup</strong> 
            <span className=" text-amber-600 text-7xl">. . .</span>
        </div>

            <div className="mt-6">
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                  <h2 className="mx-4 text-zinc-500">Nome</h2>

                  <input className="border rounded-md px-5 mx-4 h-10"
                   type="text" placeholder="Enter name..." 
                   onChange={event => setName(event.target.value)}
                   />

                  <h2 className="mx-4 text-zinc-500">Email</h2>

                  <input className="border rounded-md px-5 mx-4 h-10"
                   type="email" placeholder="Enter email..." 
                   onChange={event => setEmail(event.target.value)}
                   />

                  <h2 className="mx-4 text-zinc-500">Password</h2>

                  <input className="border rounded-md px-5 mx-4 h-10"
                   type="password" placeholder="Enter password..."
                   onChange={event => setPassword(event.target.value)}
                    />

                   <button className=" gap-5 border rounded-3xl p-2 m-6 bg-amber-600 text-neutral-50 mt-[40px] hover:bg-amber-700 transition-colors disabled:opacity-50"
                   type="submit"
                   disabled={loading} 
                    >
                      SIGNUP
                   </button>
              </form>
                 
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