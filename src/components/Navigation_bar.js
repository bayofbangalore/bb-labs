import logo from "./pngs/bb_labs.png";
export default function Navigation(){
    return(
        <>
        <nav>
            <div className="navigation">
                <h2 className="title_logo"><img className="logo" src={logo}/>Bay of bengalore</h2>
                <h3 className="item1"><a href="#">AI Software</a></h3>  
                <h3 className="item2"><a href="#">Industries</a></h3>
                <h3 className="item3"><a href="#">Customers</a></h3>
                <h3 className="item4"><a href="#">Resources</a></h3>
                <h3 className="item5"><a href="#">News</a></h3>
                <h3 className="item6"><a href="#">Company</a></h3>
            </div>
        </nav>
        </>
    )
}