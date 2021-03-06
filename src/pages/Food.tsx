import Header from "../components/Header"
import Navigation from "../components/Navigation"

function Food (){
  return(
    <div className="w-[390px] h-[844px] border">
        <Header />
        <div className="min-h-full mb-4" >
           <div>
              <input className="pl-4 border rounded-2xl mt-[100px] w-[380px] ml-[5px] h-9" 
               type="text" placeholder="Search..." />
           </div>
           <div className="border shadow-2xl rounded-2xl w-[380px] mt-4 ml-[5px]">
              <div>
                <p className="flex rounded-t-lg justify-center align-middle pt-1 text-white bg-amber-600 h-9"> 
                   Patissier</p>
                <img src="src/assets/patissier.jpg" alt="imagem de um doce patissier" />
                <div className="flex pl-2 mt-4 gap-2">
                <img className="w-6 h-6" src="src/assets/map.png" alt="iconi do google maps" />
                <p className=" text-gray-600"> R. Cônego Valadão, 725 - Gopouva, Guarulhos - SP, 07040-000</p>
              </div>
                <p className=" text-gray-500 mt-4 pl-2">
                Modern take on old school Vietnamese street food. You'll love it, we promise!</p>
           </div>
                <a className="flex flex-row mb-5 bg-amber-600 border rounded-2xl mt-8 w-40 justify-center h-9 pt-1 text-gray-800 align-middle ml-[113px] "
                href=" ">VER PRODUTOS</a>

          </div>


          <div className="border shadow-2xl rounded-2xl w-[380px] mt-4 ml-[5px]">
              <div>
                   <p className="flex rounded-t-lg justify-center align-middle pt-1 text-white bg-amber-600 h-9"> 
                   Cursos Online</p>
                   <img src="src/assets/cooking.jpg" alt="imagem de um doce patissier" />
                   <div className="flex pl-2 mt-4 gap-2">
                   <img className="w-6 h-6" src="src/assets/map.png" alt="iconi do google maps" />
                   <p className=" text-gray-600">Online</p>
                  </div>
                    <p className=" text-gray-500 mt-4 pl-2">
                    Artisan Sausage truck is a spot for bomb sausage made from ground pork, beef, or poultry, along with salt, special blend of spices and other flavorings and combos. Some sausages include other ingredients for flavor. Stop by, and check for yourself!</p>
             </div>
                   <a className="flex flex-row mb-5 bg-amber-600 border rounded-2xl mt-8 w-40 justify-center h-9 pt-1 text-gray-800 align-middle ml-[113px] "
                   href=" ">VER PRODUTOS</a>

          </div>
          </div>

          <Navigation />
    </div>

  )
}
export default Food