import React from "react";
import { makeStyles, Typography, Card, Grid, Link, CardMedia, CardContent } from '@material-ui/core'
import gmail from '../assets/Gmail.png'
import git from '../assets/GitHub.png'
import outlook from '../assets/Outlook.png'
import linkedin from '../assets/LinkedIn.png'
import whatsapp from '../assets/Whatsapp.png'

const Contact = ({title, dark, id}) => {

    const classes = useStyles();

    const social = [
        {
            title: "github",
            picture: git,
            link: "https://github.com/marciadev"
        },
        {
            title: "linkedin",
            picture: linkedin,
            link: "https://www.linkedin.com/in/marciadev/"
        },
        {
            title: "gmail",
            picture: gmail,
            link: "mailto:marcialeite483@gmail.com"
        },
        {
            title: "outlook",
            picture: outlook,
            link: "mailto:maar94_th@hotmail.com"
        },
        {
            title: "whatsapp",
            picture: whatsapp,
            link:  "https://api.whatsapp.com/send?phone=+59891363358&text=Hi!"
        }

    ]

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3" className={classes.title}>{title}</Typography>
                    <Grid container className={classes.grid}>
                        {
                            social.map(({ title, picture, link }, index)=>(
                                <Grid item key={index} xs={6} sm={4} md={2}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Link href={link} target="_blank" rel="noopener noreferrer">
                                        <CardMedia image={picture} className={classes.media} titulo={title}/>
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
        minHeight: "50vh",
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
    },
    grid: {
        marginTop: theme.spacing(6),
        justifyContent: "space-between",
    },
    card: {
        maxWidth: 345,
        minHeight: 100,
        margin: theme.spacing(2),
        "&:hover" : {
            transform: "scale(1.1)",
            transition: ".5s",
        },
    },
    media: {
        width: "auto",
        height: "auto",
        padding: '40%',
    },
    title: {
        textAlign: "center",
        color: "#006d46"
    }
  }))

export default Contact;