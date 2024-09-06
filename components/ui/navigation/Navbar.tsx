import LowerNav from "./components/lowerNav";
import UpperNav from "./components/upperNav";

const Navbar = () => {
    return (
<div className="sticky top-0 z-50"> 
<UpperNav />
<LowerNav />
</div>
    )
}

export default Navbar;
