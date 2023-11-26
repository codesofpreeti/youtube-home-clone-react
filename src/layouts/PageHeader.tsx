import logo from "../assets/logo.png";
import {Menu} from "lucide-react";
 
const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button><Menu/></button>
        <a href="/">
          <img src={logo} className="h-6" alt="it's a logo" />
        </a>
      </div>
      <div>search bar</div>
      <div>profile notifs and studio</div>
    </div>
  );
};

export default PageHeader;
