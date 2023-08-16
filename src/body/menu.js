const Menu = ()=>{
    return(
            <>
            <div className=" flex justify-evenly mx-5 w-full items-center">
                <button className="SlideButton  bg-slate-300 rounded-xl    p-2">All</button>
                <button className="SlideButton  bg-slate-300 rounded-xl    p-2">News</button>
                <button className="SlideButton  bg-slate-300 rounded-xl    p-2">Songs</button>
                <button className="SlideButton  bg-slate-300 rounded-xl    p-2">Games</button>
                <button className="SlideButton  bg-slate-300 rounded-xl    p-2">Comedy</button>
                <button className="SlideButton  bg-slate-300 rounded-xl    p-2">Action</button>
                <button className="SlideButton  bg-slate-300 rounded-xl    p-2">Romance</button>

            </div>
            </>
    )
}
export default Menu;