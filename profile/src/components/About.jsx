import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";
import profile from "../assets/perfil2.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import cv from "../assets/MarciaCV-English.pdf";
import cvSp from "../assets/MarciaCV-Español.pdf";
import { FormattedMessage, useIntl } from "react-intl";


const About = ({ title, dark, id }) => {
  const classes = useStyles();
  const intl = useIntl();
  const [button, setButton] = useState(false);

  const lang = localStorage.getItem('lang')

  useEffect(()=>{
    if(lang === 'en-UK') setButton(true)
    else return setButton(false)
  }, [button, lang]) // eslint-disable-line

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Card className={classes.card}>
          <CardMedia
            image={profile}
            className={classes.media}
            title="picture"
          />
          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
              text={intl.formatMessage({ id: "app.hi" })}
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px",
                color: "#00774f",
              }}
              startDelay={100}
              cursorColor="black"
              typeSpeed={100}
            />
            <TypeWriterEffect
              text= {intl.formatMessage({ id: "app.fullstack" })}
              textStyle={{
                fontSize: "1.2rem",
                fontWeight: "500px",
                color: "black",
              }}
              startDelay={2500}
              cursorColor="black"
              typeSpeed={100}
            />
            <Typography variant="h6" color="textSecondary">
            <FormattedMessage id="app.profile" defaultMessage="I am a well-organized, ambitious, and hardworking person. I am
              always energetic and eager to learn new skills. Recently, I have
              completed the Bootcamp 'Soy Henry' where I have gained knowledge
              of different technologies. I have experience working as part of a
              team and individually."/>
            </Typography>
          </CardContent>
          <CardActions>
            {
              button? (
                <Button variant="contained" className={classes.pdfbutton}>
              <a href={cv} download>
              <FormattedMessage id="app.cv" defaultMessage="Download CV"/>
              </a>
            </Button>
              ): (
                <Button variant="contained" className={classes.pdfbutton}>
              <a href={cvSp} download>
              <FormattedMessage id="app.cv" defaultMessage="Download CV"/>
              </a>
            </Button>
              )
            }
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
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
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "80vw"
    },
  },
  media: {
    width: "600px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5),
  },
  cardcontent: {
    marginTop: theme.spacing(2),
    "& h6": {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  pdfbutton: {
    position: "absolute",
    bottom: "1rem",
    right: "3rem",
    [theme.breakpoints.down("sm")]: {
      bottom: "0.1rem",
      right: "0.1rem",
    },
    backgroundColor: "#00774f",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "#00774f",
    },
  },
  title: {
    textAlign: "center",
  },
}));

export default About;
