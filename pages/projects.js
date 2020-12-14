import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout"
import MDList from "../components/MDList"
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const myProjects = [
  {
    name: "Side Bet Scrambler",
    git: "https://github.com/rayv156/side-bet-scrambler",
    live: "https://side-bet-scrambler.herokuapp.com/",
    img1: "https://i.imgur.com/xe9dEFz.png"
  },
  {
    name: "College Football App",
    git: "https://github.com/rayv156/College-Football-App",
    live: "https://rayv156.github.io/College-Football-App/",
    img1: "https://i.imgur.com/1i7k8Ro.png"
  },
  {
    name: "Tic Tac Toe",
    git: "https://github.com/rayv156/Tic-Tac-Toe-App",
    live: "https://rayv156.github.io/Tic-Tac-Toe-App/",
    img1: "https://i.imgur.com/s2vCX1o.png"
  },
  {
    name: "Calculator",
    git: "https://github.com/rayv156/Calculator",
    live: "https://rayv156.github.io/Calculator/",
    img1: "https://i.imgur.com/nCQwVBH.png"
  }
]



const Projects = ({allMD}) => {

  return (<Layout>
    <div style={{display: 'flex', flexWrap: 'wrap', margin: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: 70}}>
    {myProjects.map((item)=>{

return (

   <div className="card large" style={{width: '350px', margin: 'auto'}}>
     <div className="card-image">
      <img className="center-block" src={item.img1} alt=""/>
</div>
      <div className="card-content"><h3>{item.name}</h3></div>
    <div className="card-action">
<a href={item.git}><h6>{item.git}</h6></a>
<a href={item.live}><h6>{item.live}</h6></a>
</div>
</div>


)
})}
</div>
  </Layout>)
}

export default Projects

