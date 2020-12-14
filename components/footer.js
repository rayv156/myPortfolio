const Footer = () => {
    return(<>
    <footer >
       <div className="container" style={{textAlign: 'center'}}>
  <div style={{position: 'fixed', left: 0, bottom: 0, width: '102%', backgroundColor: '#EEFBFB', boxShadow: '5px 5px 20px gray', display: 'flex', justifyContent: 'space-evenly'}}>
    <div className="col">
    <a href="https://www.linkedin.com/in/velasquezray"><ion-icon name="logo-linkedin" style={{fontSize: '50px', color: '#12343b'}}></ion-icon></a>
    </div>
    <div className="col">
    <a href="https://github.com/rayv156"><ion-icon name="logo-github" style={{fontSize: '50px', color: '#12343b'}}></ion-icon></a>
    </div>
  </div>
  </div>
    </footer>
    </>
    )
}

export default Footer