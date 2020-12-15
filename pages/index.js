import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout"
import MDList from "../components/MDList"
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const imgStyle = {
  width: '300px',
  height: '300px',
  boxShadow: '5px 5px 20px gray',
  margin: 10,
}

const aboutMe = {
  width: '100%', 
  height: '700px', 
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  margin: 'auto', 
  textAlign: 'justify', 
  backgroundImage: 'url("https://i.imgur.com/eXAeGwZ.jpg")', 
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'center', 
  backgroundColor: '#203647', 
  alignItems: 'center', 
  textAlign: 'center',

  
}

const Index = () => {

  return (<Layout >
    
    <div style={{backgroundColor: '#203647', paddingBottom: 50}}>
    <img className="profilepic" src="https://i.imgur.com/uO5laeX.jpg?1"/>
    </div>
    <div className="aboutme">
      <h3 className="aboutme-title">About Me</h3>
      <p className="aboutme-p">I am a software engineer with a background in customer facing engineering roles.  I have experience with large budget, industry critical projects that required extensive compliance-oriented design, and unique customer requirements.  I have quickly adapted to software development and plan on applying past knowledge to my new career in order to develop applications which will allow clients to perform daily tasks at optimum efficiencies.
      </p>
      </div>

      <h3 id="skills" style={{backgroundColor: '#EEFBFB'}}>Skills</h3>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: 'auto', flexWrap: 'wrap', backgroundColor: '#EEFBFB', paddingBottom: 70}}>
        <img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"/>
        <img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png"/>
        <img style={imgStyle} src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png"/>
        <img style={imgStyle} src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"/>
        <img style={imgStyle} src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"/>
        <img style={imgStyle} src="https://ih1.redbubble.net/image.1305874484.9819/flat,750x1000,075,f.jpg"/>
        <img style={imgStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerMgC8YiCGH7WzGhMCQxU_Fn5hFWedV8coQ&usqp=CAU"/>
        <img style={imgStyle} src="https://ucarecdn.com/f49e8fc4-876f-49ef-934f-89812fc4125e/"/>
        <img style={imgStyle} src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png"/>
        <img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/220px-Bootstrap_logo.svg.png"/>
        <img style={imgStyle} src="https://colinstodd.com/images/posts/matcss-min.png"/>
        <img style={imgStyle} src="https://d2m06gn7cjwia2.cloudfront.net/express.png"/>
        <img style={imgStyle} src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/141_Git_logo_logos-512.png"/>
        <img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"/>
      </div>
  </Layout>)
}

export default Index

