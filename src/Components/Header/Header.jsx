import { SiStudyverse } from "react-icons/si";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from "./ThemeToggle";


const Header = () => {

    const customStyles = {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        color: 'white',
      };

      const [batch, setBatch] = useState(['Alpha 3.0']);
      


    return (
        <section className="header-container fixed z-10 w-full flex items-center justify-between bg-DarkColorbg h-14">
            <div className="header-left flex px-16 gap-8 w-1/2 items-center">
                <div className="logo-container w-35 flex justify-center gap-1 items-center text-white">
                    <Link to='/' style={customStyles}>
                        <SiStudyverse style={{ color: "white", fontSize: "2.1rem" }} />
                        <span style={{letterSpacing:'1px',fontSize:'0.7rem'}}>Unlocking <br /> <span style={{ color: "#008080" }}>Potential</span></span>
                    </Link>
                </div>
                <div className="Batch-container w-fit">
                    <Link to="/" style={customStyles}>{batch}</Link>
                </div>
                <div className="search-icon-box flex items-center justify-center w-10 h-10 p-1 rounded-full bg-black text-lg text-blue-600 hover:bg-slate-700">
                    <FontAwesomeIcon icon={faSearch} className="text-xl" />
                </div>
            </div>
            <div className="header-right flex items-center justify-between w-32 min-h-fit px-5">
                <ThemeToggle />
                <div className="profile w-8 h-8 rounded-full">
                    <img className="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </section>
    )
}
export default Header