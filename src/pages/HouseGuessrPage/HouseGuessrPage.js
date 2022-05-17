import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './HouseGuessrPage.css'
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { headerData } from '../../data/headerData'

// Images
import houseGame from '../../assets/House-Gussr/house-game.png'
import houseHome from '../../assets/House-Gussr/house-home.png'
import houseLeaderboard from '../../assets/House-Gussr/house-leaderboard.png'
import houseLogin from '../../assets/House-Gussr/house-login.png'
import houseResults from '../../assets/House-Gussr/house-results.png'
import houseScore from '../../assets/House-Gussr/house-score.png'
import houseSignUp from '../../assets/House-Gussr/house-sign-up.png'

function HouseGuessrPage() {

    const falseText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nisi sed mi semper ultrices. Aenean at condimentum metus. Nulla malesuada felis dolor, in pellentesque sem interdum lobortis. Proin nec justo sed metus molestie cursus quis sed sem. Proin et mauris venenatis, ultricies orci sit amet, tempus nunc. Nam mollis consectetur neque ut feugiat. Nullam eleifend, purus eget mollis euismod, sapien justo consequat nisl, vel mollis velit velit et mauris. Praesent efficitur orci tristique turpis efficitur volutpat. Sed eu tristique lorem. Praesent elementum odio ut ex sodales, eget laoreet purus tempor. Nulla blandit, tortor id ultrices vehicula, tellus odio pellentesque velit, consequat consectetur nisl risus ut justo. Vivamus eleifend lectus nec sapien pellentesque, eu congue ante ornare. In sed commodo neque. Quisque non dignissim velit. Nulla facilisi. In aliquet mollis turpis, sit amet consectetur tellus rutrum id. Suspendisse euismod mi quis tincidunt efficitur. Curabitur augue erat, condimentum in tortor nec, sollicitudin tincidunt mi. Aliquam blandit aliquet urna, ac fringilla sem elementum vel. Nulla rutrum ultrices lacus et hendrerit. Nullam sodales, lectus blandit hendrerit dapibus, magna neque aliquet erat, at luctus turpis tortor sed lacus.";
    const overviewText = "Geoguessr, Wordle, and Heads-Up have all become increasingly popular in the past couple months filling a void in guessing game entertainment. HouseGuessr, a spin off of Geoguessr, allows users to play through a series of rounds and guess prices of different home around the United States based on their interior and exterior images as well as their location. With the rising prices of real estate especially in the California area, this sort of game will bring enjoyment as judging the cost of homes in different areas of the United States may shock some new players.";
    const designText = "When first coming up with iterations of the User Interface Design, we wanted to make sure that first and foremost it felt like a game. We wanted to stay with pastel colors as well as a lighter theme that would be more inviting for a new player. By having the background of each page overlaid by a cartoon image it brings the feeling of fun and lightheartedness that we wanted to bring to the game. At first we wanted to have the game a more of a solo experience that could be played whenever but we noticed that in similar games such as GeoGuessr, players really enjoyed the leaderboard feature where they could compare themselves with other players to see how well they stack up against them. The homepage was the page that took the longest to design as we were unsure what users would want to see when they first logged in. We decided to display their most recent 4 games as a reminder of how they have recently been performing as well as their overall score that is being used on the leaderboard. The homepage is also where users are able to quickly navigate to the leaderboard and check their progress compared to their peers.";
    const techStackText = "Building a full-stack web application such as HouseGuessr means the correct selection of technology to use was essential to the success of the application. On the front-end we decided to use React as we believed that using the component based structure would help our development be as efficient as possible. To obtain images of houses we first planned on pulling from Zillow’s API as they previously had image, square footage as well as cost endpoints. Although this would have been the best solution, unfortunately Zillow recently decided to move their API to another service that doesn’t allow users to pull from their endpoints. Since we were not able to use any API to obtain images as well as home costs we built a web scraper that would scrape images as well as costs of houses. Since we had to resort to using a web scraper, we were also not able to publish our site publicly as Zillow’s home images could not be used for redistribution. To comply with their privacy policy we decided to close the site to only verified users that were provided a secret key by us when registering an account. This would mean only close friends and family would be able to play. To store all of our data we used MySql to store player’s past games as well as their tokens. We also used MySql to store all of our house images and data to be randomly presented to users.";
    const conclusionText = "Although the application is not finished yet, we believe that our visual design as well as the structure of our front-end and back-end interaction will be sufficient to bring a phenomenal gameplay experience to any user. Going forward we are hoping to work with these real estate sites in accessing their data for a cost so that we can bring our site public for other users to enjoy. This would also mean that we would have to increase our server capabilities to allow for more users but we believe that this game could bring lots of enjoyment for young adult or even older players who are interested in real estate prices and trends around the United States.";

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase().includes(search.toLowerCase())
    })

    const useStyles = makeStyles((t) => ({
        search : {
            color: theme.tertiary, 
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',  
            backgroundColor: theme.secondary, 
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80, 
            },
            [t.breakpoints.down('sm')]: {
                width:'350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": 
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                <title>{headerData.name} | HouseGuessr</title>
            </Helmet>
            <div className="projectPage-header" style={{backgroundColor:theme.primary}}>
                <Link to="/">
                        <AiOutlineHome className={classes.home}/>
                </Link>
                <img className='title-image' src={houseGame}></img>
            </div>
           <div className="projectPage-container">
            <div className="overview sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Overview</h1>
              </div>
              <div className='project-sub-section-content'>
                {overviewText} 
              </div>

            </div>
            <div className="design sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Design</h1>
              </div>
              <div className='project-sub-section-content'>
                {designText} 
              </div>

            </div>
            <div className="game-play sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Game Play</h1>
              </div>
              <div className='project-sub-section-content'>
                <div className='image-wrap'>
                  <img className='game-play-images' src={houseLogin}></img>
                  <p>Login Screen for users who have already created accounts</p>
                </div>
                <div className='image-wrap'>
                  <img className='game-play-images' src={houseSignUp}></img>
                  <p>Sign Up Screen for users to create accounts with Dev provided secret key</p>
                </div>
                <div className='image-wrap'>
                  <img className='game-play-images' src={houseHome}></img>
                  <p>Home Screen where users can see their past games and start a new game</p>
                </div>
                <div className='image-wrap'>
                  <img className='game-play-images' src={houseGame}></img>
                  <p>Game Play Screen where users will guess prices of homes based on location and images of home</p>
                </div>
                <div className='image-wrap'>
                  <img className='game-play-images' src={houseResults}></img>
                  <p>Results Screen where users can see how close their guesses were and facts of each home</p>
                </div>
                <div className='image-wrap'>
                  <img className='game-play-images' src={houseScore}></img>
                  <p>Final Score Screen where user's final score is calculated</p>
                </div>
                <div className='image-wrap'>
                  <img className='game-play-images' src={houseLeaderboard}></img>
                </div>
              </div>

            </div>
            <div className="tech-stack sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Tech Stack</h1>
              </div>
              <div className='project-sub-section-content'>
                {techStackText} 
              </div>

            </div>
            <div className="conclusion sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Conclusion</h1>
              </div>
              <div className='project-sub-section-content'>
                {conclusionText} 
              </div>

            </div>
           </div>    
        </div>
    )
}

export default HouseGuessrPage;
