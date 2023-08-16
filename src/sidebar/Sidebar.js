import { FaHouse, FaBolt, FaClockRotateLeft, FaSquareYoutube, FaClapperboard, FaRegUser, FaItunesNote, FaChessKnight, FaJira, FaRegSquarePlus, FaPersonSkiing, FaPenClip, FaTruckFast, FaTag, FaRegPenToSquare, FaGear, FaRegFlag } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.isMenuOpen)
    if (!isMenuOpen)
        return false;



    return (
        <>
            <div className="h-screen overflow-y-auto pr-5">
                <div className=" flex flex-col items-start border-b-2 mb-3">
                    <Link to='/'>
                        <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                            <FaHouse /> <p className=" pl-3">Home</p>
                        </button>
                    </Link>

                    <Link to='/shorts'>
                        <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                            <FaBolt /> <p className=" pl-3">Shorts</p>
                        </button>
                    </Link>

                    <Link to="/subscriptions">
                        <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                            <FaSquareYoutube /> <p className=" pl-3">Subscriptions</p>
                        </button>
                    </Link>

                </div>
                <div className=" flex flex-col items-start border-b-2 mb-3">
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaClapperboard /> <p className=" pl-3">Library</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaClockRotateLeft /> <p className=" pl-3">History</p>
                    </button>
                </div>
                <div className=" flex flex-col justify-start border-b-2 mb-3 gap-y-3">
                    <p>Sign in to like videos, comment, and subscribe.</p>
                    <button href="#" className=" flex items-center border-2 border-inherit rounded-3xl p-2 gap-1 w-2/4 mb-3 text-center">
                        <FaRegUser /> <p className=" pl-3">Sign In</p>
                    </button>
                </div>
                <div className=" flex flex-col items-start mt-3">
                    <p>Explore</p>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaJira /><p className=" pl-3">Trending</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaTruckFast /> <p className=" pl-3">Shopping</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaItunesNote /> <p className=" pl-3">Music</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaClapperboard /> <p className=" pl-3">Movies</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaChessKnight /> <p className=" pl-3">Gaming</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaPersonSkiing /> <p className=" pl-3">Sports</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaPenClip /> <p className=" pl-3">Learning</p>
                    </button>

                </div>
                <div className="  border-t-2  mb-3">
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaRegSquarePlus /> <p className=" pl-3">Browse channels</p>
                    </button>
                </div>
                <div className=" flex flex-col items-start border-b-2 border-t-2 mt-3 mb-3">
                    <h2>More from YouTube </h2>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">YouTube Premium</button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">YouTube Music</button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">YouTube Kids</button>
                </div>
                <div className=" flex flex-col items-start border-b-2 mb-3">
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaGear /> <p className=" pl-3">Settings</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaRegFlag /> <p className=" pl-3">Report History</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        <FaTag /> <p className=" pl-3">Help</p>
                    </button>
                    <button className="SlideButton flex flex-row  items-center p-2 hover:bg-slate-300 rounded-xl">
                        < FaRegPenToSquare />  <p className=" pl-3">Send Feedback</p>
                    </button>
                </div>
                <div className=" flex flex-col  gap-y-3 border-b-2 mb-3">
                    <p>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers.</p>
                    <p> TermsPrivacyPolicy & SafetyHow YouTube worksTest new features.</p>
                    <p>&#169;2023 Google LLC</p>
                </div>
            </div>



        </>
    )
}
export default Sidebar;