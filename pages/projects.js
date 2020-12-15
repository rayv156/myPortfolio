import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout"
import MDList from "../components/MDList"
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const myProjects = [
  {
    name: "Workout Log",
    git: "https://github.com/rayv156/workouts_client_frontend",
    live: "https://naughty-yalow-c5e710.netlify.app/",
    img1: "https://i.imgur.com/akuLVxN.png"
  },
  {
    name: "SignSource",
    git: "https://github.com/rayv156/project3_frontend",
    live: "https://jovial-roentgen-e872a8.netlify.app/",
    img1: "https://i.imgur.com/Zz8UyRx.png"
  },
  {
    name: "Side Bet Scrambler",
    git: "https://github.com/rayv156/side-bet-scrambler",
    live: "https://side-bet-scrambler.herokuapp.com/",
    img1: "https://i.imgur.com/H5VkkiJ.png"
  },
  {
    name: "College Football App",
    git: "https://github.com/rayv156/College-Football-App",
    live: "https://rayv156.github.io/College-Football-App/",
    img1: "https://i.imgur.com/LI1CLr8.png"
  },
  {
    name: "Tic Tac Toe",
    git: "https://github.com/rayv156/Tic-Tac-Toe-App",
    live: "https://rayv156.github.io/Tic-Tac-Toe-App/",
    img1: "https://i.imgur.com/b27EHBd.png"
  },
  {
    name: "Calculator",
    git: "https://github.com/rayv156/Calculator",
    live: "https://rayv156.github.io/Calculator/",
    img1: "https://i.imgur.com/UFEVFce.png"
  }
]



const Projects = ({allMD}) => {

  return (<Layout>
    <div style={{display: 'flex', flexWrap: 'wrap', margin: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: 70, paddingBottom: 70, backgroundColor: 'rgb(26,46,60)'}}>
    {myProjects.map((item)=>{

return (

   <div className="card" style={{width: '350px', margin: '20px', boxShadow: '5px 5px 20px black'}}>
     <div className="card-image" >
      <img className="center-block" src={item.img1} style={{width: '350px', height: '500px'}} alt=""/>
</div>
      <div className="card-content"><h6>{item.name}</h6></div>
    <div className="card-action" style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
<a href={item.git}><ion-icon name="logo-github" style={{fontSize: 50}}></ion-icon></a>
<a href={item.live}><ion-icon name="globe-outline" style={{fontSize: 50}}></ion-icon></a>
</div>
</div>


)
})}
</div>
  </Layout>)
}

export default Projects

