import React from "react";
import { makeStyles, Typography, Grid, CardContent, CardMedia, Link, Card } from '@material-ui/core'
import mockData from "../mockData";

const Projects = ({title, dark, id}) => {

    const classes = useStyles();

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
          <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3" className={classes.title}>{title}</Typography>
                <Grid container className={classes.grid}>
                    {
                        mockData.map(({ title, image, link }, index)=>(
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia image={image} className={classes.caratula} titulo="thumbnail"/>
                                    <CardContent>
                                        <Link href={link} color="primary" target="_blank" rel="noopener noreferrer" className={classes.link}>
                                            {title}
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
        minHeight: "100vh"
    },
    sectiondark: {
        background: "#00774f",
        color: "#9ce9de",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
        padding: theme.spacing(5),
    },
    grid: {
        marginTop: theme.spacing(6),
    },
    card: {
        maxWidth: 345,
        minHeight: 200,
        margin: theme.spacing(3),
        "&:hover" : {
            transform: "scale(1.1)",
            transition: ".5s",
        },
    },
    caratula: {
        height: 0,
        paddingTop: '56.25%', //16:9
    },
    link: {
        textDecoration: "none",
        fontWeight: 700,
    },
    title: {
        textAlign: "center",
    }
}))

export default Projects;