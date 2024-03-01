

function Navbar(){
    return(
        <>
        <div className="nav">
          <div className="logo">
           <h2>R_InVision</h2>
          </div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">For Buyer</a></li>
      <li><a href="#">For Builder</a></li>
      <li><a href="#">About-us</a></li>
      <li><a href="#">More</a></li>
    </ul>
    <div className="sign-up">
      <ul >
      
        {/* <input placeholder="search" ></input> */}
        <li><a href="#">Sign In</a></li>
      </ul>
      {/* <div className="humberger-menu">
        <a href=""> <GiHamburgerMenu/> </a>
      </div> */}
    </div>
  </div>
        </>
    );
}

export default Navbar;