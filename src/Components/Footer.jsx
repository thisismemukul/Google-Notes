import React from "react";

const Footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <>
        <p className="text-center text-white footer">Copyright @ {year}</p>
        </>
    );
};
export default Footer;