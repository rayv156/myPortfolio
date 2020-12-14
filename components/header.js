

const Header = () => {

    const navbarStyle = {
        backgroundColor: 'rgb(0, 0, 0, 0.3)', position: 'absolute'
    }
    
    return(
        <header>
            <nav style={navbarStyle}>
           <div className="nav-wrapper" >
           <ul id="nav-mobile" className="center hide-on-med-and-down">
           <li><a href="/" style={{textDecoration: 'none', color: 'white'}}><div className="underline" >Skills</div></a></li>
                <li><a className="navbar-brand" href="/resume" style={{color: 'white'}}><div className="underline" >Resume</div></a></li>
                </ul>
                    <a href="/" className="brand-logo center" style={{textDecoration: 'none', color: 'white'}}>Ray Velasquez</a>
                    <a href="#" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
               
                    <li><a href="/projects" style={{textDecoration: 'none', color: 'white'}}><div className="underline" >Projects</div></a></li>
                    <li><a href="/blog" style={{textDecoration: 'none', color: 'white'}}><div className="underline">Blog</div></a></li>
                </ul>
            </div>
            </nav>

            <ul className="sidenav" id="mobile">
                <li><a href="/" style={{textDecoration: 'none', color: 'black'}}><div >Skills</div></a></li>
                <li><a className="navbar-brand" href="/resume" style={{color: 'black'}}><div >Resume</div></a></li>
                    <li><a href="/projects" style={{textDecoration: 'none', color: 'black'}}><div >Projects</div></a></li>
                    <li><a href="/blog" style={{textDecoration: 'none', color: 'black'}}><div>Blog</div></a></li>
                </ul>

        </header>
        
    
    )
}

export default Header