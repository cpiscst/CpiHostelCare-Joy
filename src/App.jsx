

import roomImage from "../src/assets/room.png";
import dinnerImage from "../src/assets/dinner.png";
import eventImage from "../src/assets/event.png";
import cctvImage from "../src/assets/cctv.png";
import wifiImage from "../src/assets/wifi.png";
import cleanerImage from "../src/assets/cleaner.png";
import housingdirectorImage from "../src/assets/housingdirector.png";
import hometutorImage from "../src/assets/hometutor.png";
import hostelsuperImage from '../src/assets/hostelsuper.png'
import hostelmanegerImage from '../src/assets/hostelmaneger.png'
import contactImage from '../src/assets/contact.png'
import logoImage from '../src/assets/logo.png'
import bannerImage from '../src/assets/banner1.jpg'
function App() {
  return (
    <>
      <div className="max-w-[1220px] my-0 mx-auto">
        {/* Navbar Section */}
        <nav className="flex justify-between items-center bg-gray-300 h-[60px] px-2">
          <div>
            <a href={"/"}>
            <img className='h-[50px] w-[50px]' src={logoImage} alt='logoImage'/>
            </a>
           
          </div>

          <div>
            <ul className="flex space-x-3 text-gray-800 text-xl">
              <li className="cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2">
                Home
              </li>
              <li className="cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2">
                About
              </li>
              <li className="cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2">
                Contact
              </li>
              <li className="cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2">
                Blog
              </li>
            </ul>
          </div>

          <div className="space-x-2">
            <button className="p-2 cursor-pointer bg-gray-600 text-white rounded">
              SignIn
            </button>
            <button className="p-2 bg-gray-600 cursor-pointer text-white rounded">
              SignUp
            </button>
          </div>
        </nav>

        {/* Bannar Section */}
        <div className="items-center  flex justify-between  border-gray-200 p-2">
         <div>
         <div className="text-center">
              <h2 className="md:text-7xl text-5xl font-bold uppercase text-gray-900 text-center">
                Welcome
                <span className="block">to</span>
                <span className="block ">
                  <span className="text-purple-400">Cpi</span> Hostel Care
                </span>
              </h2>
              <button className="border-2 p-3 mt-5 bg-amber-500 text-white rounded-xl px-10 text-xl font-semibold">
                Get Started
              </button>
            </div>
         </div>
        <div>
        <img className="h-[500px] w-[500px] " src={bannerImage} alt="bannerImage"/>
        </div>
        </div>
        {/* Service Section */}
        <div>
          <h2 className="text-5xl text-center py-10 font-bold">Our Service</h2>

          <div className="grid grid-cols-4 gap-5 ">
            <div className=" h-[150px] w-[220px] bg-yellow-100  border-2 border-yellow-200 text-center rounded-2xl">
              <figure className="flex w-full justify-center">
                <img
                  className="h-[100px] w-[150px] p-2"
                  src={roomImage}
                  alt="roomImage"
                />
              </figure>
              <h6 className="uppercase text-3xl font-semibold  text-black">
                Room
              </h6>
            </div>

            <div className=" h-[150px] w-[220px] bg-yellow-100  border-2 border-yellow-200 text-center rounded-2xl">
              <figure className="flex w-full justify-center">
                <img
                  className="h-[100px] w-[150px] p-2"
                  src={dinnerImage}
                  alt="dinnerImage"
                />
              </figure>
              <h6 className="uppercase text-3xl font-semibold  text-black">
                Meal
              </h6>
            </div>

            <div className=" h-[150px] w-[220px] bg-yellow-100  border-2 border-yellow-200 text-center rounded-2xl">
              <figure className="flex w-full justify-center">
                <img
                  className="h-[100px] w-[150px] p-2"
                  src={eventImage}
                  alt="eventImage"
                />
              </figure>
           
              <h6 className="uppercase text-3xl font-semibold  text-black">
                Event
              </h6>
            </div>

            <div className=" h-[150px] w-[220px] bg-yellow-100  border-2 border-yellow-200 text-center rounded-2xl">
              <figure className="flex w-full justify-center">
                <img
                  className="h-[100px] w-[150px] p-2"
                  src={cctvImage}
                  alt="cctvImage"
                />
              </figure>
             

              <h6 className="uppercase text-3xl font-semibold  text-black">
                Security
              </h6>
            </div>

           

            <div className=" h-[150px] w-[220px] bg-yellow-100  border-2 border-yellow-200 text-center rounded-2xl">
              <figure className="flex w-full justify-center">
                <img
                  className="h-[100px] w-[150px] p-2"
                  src={wifiImage}
                  alt="wifiImage"
                />
              </figure>
              <h6 className="uppercase text-3xl font-semibold  text-black">
                Wifi
              </h6>
            </div>
            <div className=" h-[150px] w-[220px] bg-yellow-100  border-2 border-yellow-200 text-center rounded-2xl">
              <figure className="flex w-full justify-center">
                <img
                  className="h-[100px] w-[150px] p-2"
                  src={cleanerImage}
                  alt="cleanerImage"
                />
              </figure>
              <h6 className="uppercase text-3xl font-semibold  text-black">
                Cleaning
              </h6>
            </div>
            <div className=" h-[150px] w-[220px] bg-yellow-100  border-2 border-yellow-200 text-center rounded-2xl">
              <figure className="flex w-full justify-center">
                <img
                  className="h-[100px] w-[150px] p-2"
                  src={hometutorImage}
                  alt="hometutor"
                />
              </figure>
              <h6 className="uppercase text-3xl font-semibold  text-black">
                Home Tutor
              </h6>
            </div>
          </div>
        </div>

        {/* Our Member */}
        <div className="mt-10 ">
          <h2 className="text-5xl font-bold text-center my-8">Our Member</h2>
          <div className="grid grid-cols-3 gap-5">
            <div className="h-[350px] w-[300px] border-2 rounded-xl flex justify-center">
             <div> <figure className="flex justify-center pt-1">
                <img src={housingdirectorImage} className="h-[200px]" alt="housing directorImage "/>
              </figure>
              <div className="p-6 text-center">
                <h6 className="text-3xl font-semibold ">Assad </h6>
                <p>Driector Of Housing</p>
                <p>01715256987</p>
              </div>
              </div>
            </div>

            <div className="h-[350px] w-[300px] border-2 rounded-xl p-2 flex justify-center">
             <div>
             <figure className="flex justify-center pt-1">
                <img src={hostelsuperImage} className=" h-[200px]" alt="hostel super Image"/>
              </figure>
              <div className="p-6 text-center">
                <h6 className="text-3xl font-semibold ">Kashem Ali</h6>
                <p>Hostel Super</p>
                <p>01845269852</p>
              </div>
             </div>
            </div>

            <div className="h-[350px] w-[300px] border-2 rounded-xl p-2 flex justify-center ">
             <div>
             <figure className="flex justify-center pt-1">
                <img src={hostelmanegerImage} className="h-[200px]" alt="hostel maneger "></img>
              </figure>
              <div className="p-6 text-center">
                <h6 className="text-3xl font-semibold ">Abdul Ali</h6>
                <p>Hostel Maneger</p>
                <p>01645289125</p>
              </div>
             </div>
            </div>
          </div>
        </div>
        <div className="bg-sky-100 mt-8 p-8 flex item-center justify-between">
        
          <div className="item-center space-y-3">
          <h2 className="font-bold text-4xl font-stretch-condensed py-4">Contact Us</h2>
            <input type="text" placeholder="Name" className=" rounded bg-white  font-bold text-md p-2 block  "/>
            <input type="text" placeholder="E-Mail" className="rounded bg-white  font-bold text-md p-2 block "/>
            <input type="text" placeholder="Message" className=" rounded bg-white  font-bold text-md p-2 block  "/>
            <button className="rounded font-bold text-xl bg-yellow-500 p-2 mt-4 text-white  ">Submit</button>
       
          </div>
          <div>
          <img className="h-[300px] w-full" src={contactImage} alt="contactImage"/>
          </div>
          
        </div>
        <footer className="bg-gray-700 p-4   flex justify-between text-white mt-10">
          <div>
            <h2 className="font-bold text-xl">Sign Up For Our Page</h2>
            <button className="border-2 p-2 my-6 font-semibold bg-amber-200 text-xl rounded-xl px-8 text-black">
              Subscribe{" "}
            </button>
          </div>

          <div>
            <ul>
              <h2 className="text-xl font-bold">Institute</h2>
              <li>Description</li>
              <li>Project</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <ul>
              <h2 className="text-xl font-bold">Student</h2>
              <li>Final Project</li>
              <li>Exchange</li>
              <li>Virtual Classroom</li>
            </ul>
          </div>
          <div>
            <ul>
              <h2 className="text-xl font-bold">Blogs</h2>
              <li>Graphic Design</li>
              <li>Interior Design</li>
              <li>Fashion Design</li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
