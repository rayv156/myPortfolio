import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout"
import MDList from "../components/MDList"
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const myProjects = [
  {
    name: "RecipE-book",
    git: "https://github.com/rayv156/recipe_book_client",
    live: "https://expo.io/@rayv156/projects/recipe_book_client",
    description: "A mobile app to search and save favorite recipes.  The app was uses a Rails backend and React Native in the frontend.  The user credentials use bcrypt, jwt and secure store.  Checkout the github repository for more details!",
    img1: "https://i.imgur.com/oqv8LQl.png"
  },
  {
    name: "Workout Log",
    git: "https://github.com/rayv156/workouts_client_frontend",
    live: "https://naughty-yalow-c5e710.netlify.app/",
    description: "A full stack app for organizing a workout log and viewing at-home workouts.  The app allows users to create a history of workout notes with a centralized location to compare against past results.  It was constructed with Rails on the backend and React in the frontend.  CORS and jwt authentication with bcrypt were implemented as well.  If you got into a funk during the last few months, get back in shape with this app and track your progress!",
    img1: "https://i.imgur.com/akuLVxN.png"
  },
  {
    name: "SignSource",
    git: "https://github.com/rayv156/project3_frontend",
    live: "https://jovial-roentgen-e872a8.netlify.app/",
    description: "A MERN stack app for storing useful words/phrases for American Sign Language; the app uses all the RESTful routes and full CRUD.  The app implements JWT user authentication, renders the specific user’s word library, and uses a YouTube API call to show the top 3 results for further learning of a particular word/phrase in ASL. Used JavaScript, React, Express, Node.js, MongoDB, Mongoose, HTML, CSS and Bootstrap.  The code allows for a pleasant user experience and a quick reference learning guide",
    img1: "https://i.imgur.com/Zz8UyRx.png"
  },
  {
    name: "Side Bet Scrambler",
    git: "https://github.com/rayv156/side-bet-scrambler",
    live: "https://side-bet-scrambler.herokuapp.com/",
    description: "A golf scorecard full-stack app which uses an MVC file structure, all the RESTful routes and full CRUD.  The app implements user authentication to provide a user specific landing page, renders the specific golf course’s scorecard, and allows for the user to maintain a golf round history for handicap purposes if desired.  Used JavaScript, React, Express, MongoDB, Mongoose, HTML, CSS and Bootstrap.  The code demonstrates a mobile friendly UI and a simple, user friendly scorecard.",
    img1: "https://i.imgur.com/H5VkkiJ.png"
  },
  {
    name: "College Football App",
    git: "https://github.com/rayv156/College-Football-App",
    live: "https://rayv156.github.io/College-Football-App/",
    description: "The web app is a quick view at any Division I college football team’s incoming recruits, current rosters, weekly matchups, and returning players metrics for each college football team from 2010-present.  Used HTML, CSS, JavaScript, jQuery, jQueryUI, and an AJAX request to pull from the College Football Data API.  The project demonstrates responsive design and was created with the user’s experience as a priority",
    img1: "https://i.imgur.com/LI1CLr8.png"
  },
  {
    name: "Tic Tac Toe",
    git: "https://github.com/rayv156/Tic-Tac-Toe-App",
    live: "https://rayv156.github.io/Tic-Tac-Toe-App/",
    description: "Used HTML, CSS, JavaScript, jQuery. The program allows for a 3x3 to 5x5 tic tac toe game and runs through the logic of determining the result of the game",
    img1: "https://i.imgur.com/b27EHBd.png"
  },
  {
    name: "Calculator",
    git: "https://github.com/rayv156/Calculator",
    live: "https://rayv156.github.io/Calculator/",
    description: "Used HTML, CSS, JavaScript, jQuery.  The program is a simple go-to calculator which utilized hover effects and push effects.",
    img1: "https://i.imgur.com/UFEVFce.png"
  }
]



const Projects = ({allMD}) => {

  return (<Layout>
    <div style={{display: 'flex', flexWrap: 'wrap', margin: 'auto', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(26,46,60)'}}>
    {myProjects.map((item)=>{

return (

   <div className="card" style={{width: '354px', margin: '20px', boxShadow: '5px 5px 20px black'}}>
     <div className="card-image" style={{border: 'solid black'}}>
      <img className="center-block" src={item.img1} style={{width: '350px', height: '500px'}} alt=""/>
</div>
      <div className="card-content" style={{color: 'black'}}><h6 className="card-title activator grey-text text-darken-4">{item.name}<i className="material-icons right" style={{fontSize: 30}}>more_vert</i></h6></div>
      <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{item.name}<i className="material-icons right">close</i></span>
      <p style={{color: 'black'}}>{item.description}</p>
    </div>
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

