

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
                        <li><a href="/#skills" style={{textDecoration: 'none', color: 'white', fontSize: 20}}><div className="underline" >Skills</div></a></li>
                        <li><a href="/projects" style={{textDecoration: 'none', color: 'white', fontSize: 20}}><div className="underline" >Projects</div></a></li>
                        <li><a href="/blog" style={{textDecoration: 'none', color: 'white', fontSize: 20}}><div className="underline">Blog</div></a></li>
                    </ul>
            </div>
            </nav>

            <ul className="sidenav" id="mobile" style={{backgroundColor: '#203647'}}>
                <hr></hr>
                <li><a href="/#skills" style={{textDecoration: 'none', color: 'black', backgroundColor: 'rgb(256,256,256, 0.3'}}><div >Skills</div></a></li>
                <hr></hr>
                    <li><a href="/projects" style={{textDecoration: 'none', color: 'black', backgroundColor: 'rgb(256,256,256, 0.3'}}><div >Projects</div></a></li>
                    <hr></hr>
                    <li><a href="/blog" style={{textDecoration: 'none', color: 'black', backgroundColor: 'rgb(256,256,256, 0.3'}}><div>Blog</div></a></li>
                    <hr></hr>
                </ul>

        </header>
        
    
    )
}

export default Header