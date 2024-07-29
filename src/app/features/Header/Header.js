import "../../../styles/Header.css";
import { FaReddit } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

function Header() {
    const [searchTermLocal, setSearchTermLocal] = useState('');

    const onSearchTermChange = (e) => {
        searchTermLocal(e.target.value);
    };

    const onSubmitTerm = (e) => {
        e.preventDefault();
    };

    return(
        <header className="header">
            <div className="flex">
                <FaReddit className="logo"/>
                <p> Reddit<span>Minimal</span></p>
            </div>
            <form className="flex">
                <input type="text" placeholder="Search" value={searchTermLocal}/>
                <button onSubmit={onSubmitTerm}><HiOutlineSearch /></button>
            </form>
        </header>
    );
}

export default Header;