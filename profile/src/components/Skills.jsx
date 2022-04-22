import React from "react";
import { makeStyles, Typography, Card, Grid, CardContent, CardMedia, Link } from '@material-ui/core'
import js from '../assets/javascript-logo.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import node from '../assets/nodejs.png'
import express from '../assets/express.png'
import sequelize from '../assets/sequelize.png'
import sql from '../assets/sql.png'
import git from '../assets/git.png'
import postman from '../assets/postman.png'
import vsc from '../assets/visual.png'

const Skills = ({title, dark, id}) => {

    const classes = useStyles();

    const skills = [
        {
            title: "JavaScript",
            picture: js,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            title: "HTML",
            picture: html,
            link: "https://www.w3.org/html/"
        },
        {
            title: "CSS",
            picture: css,
            link: "https://www.w3schools.com/css/"
        },
        {
            title: "React JS",
            picture: react,
            link: "https://reactjs.org/"
        },
        {
            title: "Redux",
            picture: redux,
            link: "https://redux.js.org"
        },
        {
            title: "Node JS",
            picture: node,
            link: "https://nodejs.org"
        },
        {
            title: "Express JS",
            picture: express,
            link: "https://expressjs.com"
        },
        {
            title: "Sequelize",
            picture: sequelize,
            link: "https://sequelize.org"
        },
        {
            title: "PostgreSQL",
            picture: sql,
            link: "https://www.postgresql.org"
        },
        {
            title: "Git",
            picture: git,
            link: "https://git-scm.com/"
        },
        {
            title: "VSCode",
            picture: vsc,
            link: "https://code.visualstudio.com/"
        },
        {
            title: "Postman",
            picture: postman,
            link: "https://postman.com"
        },

    ]

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>

            <Typography variant="h3" className={classes.title}>{title}</Typography>
                    <Grid container className={classes.grid}>
                        {
                            skills.map(({ title, picture, link }, index)=>(
                                <Grid item key={index} xs={8} sm={6} md={2}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Link href={link} target="_blank" rel="noopener noreferrer">
                                        <CardMedia image={picture} className={classes.media} titulo={title}/>
                                        <h1 className={classes.name}>{title}</h1>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                            ))
                        }
                    </Grid>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme)=> ({
    section: {
        minHeight: "100vh",
        backgroundColor: "#9ce9de"
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
        padding: theme.spacing(5),
        display: "table",
    },
    grid: {
        marginTop: theme.spacing(6),
    },
    card: {
        maxWidth: 200,
        minHeight: 150,
        margin: theme.spacing(3),
        "&:hover" : {
            transform: "scale(1.1)",
            transition: ".5s",
            opacity: "1",
        },
    },
    name: {
        fontSize: "18px",
        position: "fixed",
        color: "#006d46",
    },
    media: {
        width: "auto",
        height: "auto",
        padding: '3rem',
    },
    title: {
        color: "#006d46",
        textAlign: "center"
    },
}))

export default Skills;