

const Header = () => {

    const navbarStyle = {
        backgroundColor: 'rgb(0, 0, 0, 0.3)', position: 'absolute'
    }
    
    return(
        <header>
            <nav style={navbarStyle}>
           <div className="nav-wrapper" >
                <a href="/" className="brand-logo right" style={{textDecoration: 'none', color: 'white'}}>Ray Velasquez</a>
                <a href="#" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="#skills" style={{textDecoration: 'none', color: 'white', fontSize: 20}}><div className="underline" >Skills</div></a></li>
                        <li><a href="/resume" style={{color: 'white', fontSize: 20}}><div className="underline" >Resume</div></a></li>
                        <li><a href="/projects" style={{textDecoration: 'none', color: 'white', fontSize: 20}}><div className="underline" >Projects</div></a></li>
                        <li><a href="/blog" style={{textDecoration: 'none', color: 'white', fontSize: 20}}><div className="underline">Blog</div></a></li>
                    </ul>
            </div>
            </nav>

            <ul className="sidenav" id="mobile" style={{backgroundImage: 'url("https://i.imgur.com/25FpjT4.png")', backgroundPosition: 'center'}}>
                <li><a href="#skills" style={{textDecoration: 'none', color: 'black'}}><div >Skills</div></a></li>
                <li><a className="navbar-brand" href="/resume" style={{color: 'black'}}><div >Resume</div></a></li>
                    <li><a href="/projects" style={{textDecoration: 'none', color: 'black'}}><div >Projects</div></a></li>
                    <li><a href="/blog" style={{textDecoration: 'none', color: 'black'}}><div>Blog</div></a></li>
                </ul>

        </header>
        
    
    )
}

export default Header