import { ArrowDown2 } from "iconsax-react";
import { Link } from "react-router-dom";

const BrowseCategory: React.FC = () => {
  const navLinks = [
    { name: "Home", hasDropdown: true },
    { name: "Catalog", hasDropdown: true },
    { name: "Blog", hasDropdown: false },
    { name: "Pages", hasDropdown: true },
    { name: "About us", hasDropdown: false },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row md:py-0 items-center justify-center bg-white top-[174px] gap-[20px] lg:gap-[98px] md:gap-[50px] md:justify-around">
      <Link
        to="/category"
        className="cursor-pointer flex text-nowrap items-center justify-center lg:h-[70px] w-[218px] h-[70px] lg:w-[218px] md:h-[65px] md:w-[200px] gap-[16px] bg-primary md:mt-0 mt-[20px]"
      >
        <div className="text-white md:text-[15px]">Browse categories</div>
        <div className="text-white">
          <ArrowDown2 />
        </div>
      </Link>

      <div className="flex flex-col md:flex-row items-center lg:gap-[100px] md:gap-[30px]">
        <div className="hidden lg:flex items-center gap-[29px] text-navText">
          {navLinks.map((link,index)=>(
            <div key={index} className="flex items-center gap-[16px]">
            <div className="cursor-pointer">{link.name}</div>
            {link.hasDropdown &&(
              <div>
              <ArrowDown2 className="cursor-pointer"/>
            </div>
            )}
            
          </div>
          ))}
          
        </div>
        <div className="text-navColor text-nowrap font-bold">
          30 Days Free Return
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
