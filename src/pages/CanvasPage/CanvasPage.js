import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './CanvasPage.css'
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { headerData } from '../../data/headerData'

import CanvasLogo from '../../assets/png/Canvas-Images/Canvas.jpeg'
import CanvasRedesign from '../../assets/png/canvas-redesign.png';
import CanvasRedesign2 from '../../assets/png/canvas-redesign.png';

// Images
import houseGame from '../../assets/House-Gussr/house-game.png'
import houseHome from '../../assets/House-Gussr/house-home.png'
import houseLeaderboard from '../../assets/House-Gussr/house-leaderboard.png'
import houseLogin from '../../assets/House-Gussr/house-login.png'
import houseResults from '../../assets/House-Gussr/house-results.png'
import houseScore from '../../assets/House-Gussr/house-score.png'
import houseSignUp from '../../assets/House-Gussr/house-sign-up.png'

function CanvasPage() {
    const falseText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nisi sed mi semper ultrices. Aenean at condimentum metus. Nulla malesuada felis dolor, in pellentesque sem interdum lobortis. Proin nec justo sed metus molestie cursus quis sed sem. Proin et mauris venenatis, ultricies orci sit amet, tempus nunc. Nam mollis consectetur neque ut feugiat. Nullam eleifend, purus eget mollis euismod, sapien justo consequat nisl, vel mollis velit velit et mauris. Praesent efficitur orci tristique turpis efficitur volutpat. Sed eu tristique lorem. Praesent elementum odio ut ex sodales, eget laoreet purus tempor. Nulla blandit, tortor id ultrices vehicula, tellus odio pellentesque velit, consequat consectetur nisl risus ut justo. Vivamus eleifend lectus nec sapien pellentesque, eu congue ante ornare. In sed commodo neque. Quisque non dignissim velit. Nulla facilisi. In aliquet mollis turpis, sit amet consectetur tellus rutrum id. Suspendisse euismod mi quis tincidunt efficitur. Curabitur augue erat, condimentum in tortor nec, sollicitudin tincidunt mi. Aliquam blandit aliquet urna, ac fringilla sem elementum vel. Nulla rutrum ultrices lacus et hendrerit. Nullam sodales, lectus blandit hendrerit dapibus, magna neque aliquet erat, at luctus turpis tortor sed lacus.";

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
                <img className='title-image' src={CanvasRedesign}></img>
            </div>
           <div className="projectPage-container">
            <div className="overview sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Overview</h1>
              </div>
              <div className='project-sub-section-content'>
                {falseText} 
              </div>

            </div>
            <div className="design sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Design</h1>
              </div>
              <div className='project-sub-section-content'>
                <div className='canvas-image-wrap'>
                  <img className='game-play-images' src={CanvasRedesign}></img>
                </div>
                <div className='canvas-image-wrap'>
                  <img className='game-play-images' src={CanvasRedesign2}></img>
                </div>
              </div>

            </div>
            <div className="game-play sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Important Features for Students</h1>
              </div>
              <div className='project-sub-section-content'>
                  {falseText}
              </div>
            </div>
            <div className="tech-stack sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Tech Stack</h1>
              </div>
              <div className='project-sub-section-content'>
                {falseText} 
              </div>

            </div>
            <div className="conclusion sub-section">
              <div className='project-sub-section-title'>
                <h1 className='project-titles'>Conclusion</h1>
              </div>
              <div className='project-sub-section-content'>
                {falseText} 
              </div>

            </div>
           </div>    
        </div>
    )
}

export default CanvasPage
