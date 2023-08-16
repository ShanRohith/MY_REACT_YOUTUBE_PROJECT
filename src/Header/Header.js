import { useState,useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { FaSistrix } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SEARCH_SUGGESTIONS_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../sidebar/sideBarSlice";


const Header = () => {

    const dispatch = useDispatch();
    const [query,setQuery] = useState('');
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);

    const toggleSidebar = ()=>{
        dispatch(toggleMenu())
    }
    
    const handleChange =(e)=>{
        setQuery(e.target.value)
    }

    useEffect(() => {
        const timer = setTimeout(()=>{
           getSuggestions();
         },500);
         return()=>{clearTimeout(timer)}         
       },[query])

    const getSuggestions =async()=>{
        const fetchSuggestions = await fetch(SEARCH_SUGGESTIONS_URL+query);
        const suggesteData = await fetchSuggestions.json();
        setSuggestions(suggesteData[1])
    }

    return (
     <>
        <header className=" md:flex flex-row items-center justify-between max-w-7xl m-auto  mt-5">
            <div className=" basis-3/4 flex justify-evenly ml-2">
                <div className=" basis-1/4 flex items-center"> 
                    <button onClick={()=>toggleSidebar()}  className=" mr-3"><FaBars/></button>                             
                    <Link to='/'>
                        <button onClick={()=>toggleSidebar()} className=" flex gap-1 items-center "><FaYoutube/> YouTube<sup>IN</sup></button>
                    </Link>
                </div>

                <div className=" basis-3/4 flex w-9/12 justify-center"> 
                    
                    <input onChange={(e)=>handleChange(e)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} value={query} className=" w-6/12 rounded-bl-xl rounded-tl-xl border-2 border-inherit bg-slate-50 pl-2" type="text" placeholder="search" />
                    <button className=" rounded-br-xl rounded-tr-xl border-2 border-inherit bg-slate-50 p-1 px-2 border-l-0">
                        <FaSistrix/>
                    </button>
                    <button className=" mx-4 bg-slate-50  rounded-3xl  p-2">
                        <FaMicrophone/>
                    </button>
            
                </div>
            </div>


            <div className=" flex">
                <button className="hover:bg-slate-300 rounded-full p-2 mr-2">
                    <FaEllipsisVertical />
                </button>
                <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300  rounded-full">
                    <FaRegUser /> <p className=" pl-1">Sign in</p>
                </button>
            </div>
        </header>
        <div className=" absolute left-96 w-1/3 bg-white rounded-2xl ">               
                    <ul>
                        
                        {
                           showSuggestions && suggestions.map((element,index)=>{
                                return <li className=" flex gap-x-4 items-center p-2 hover:bg-slate-500" key={index}> <FaSistrix/>{element}</li>
                            })
                        }
                    </ul>
              
        </div>
    </>
        
    )
}
export default Header;