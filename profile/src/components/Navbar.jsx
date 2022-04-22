import { AppBar, Toolbar, List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from "@material-ui/core";
import React, { useState, useContext } from "react";
import image from '../assets/portfolio.png'
import { makeStyles } from '@material-ui/core'
import { Link, animateScroll as scroll } from 'react-scroll'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone' 
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone' 
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone' 
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone' 
import MenuIcon from '@material-ui/icons/Menu' 
import CancelIcon from '@material-ui/icons/Cancel'
import ukflag from '../assets/UK-flag.png'
import spflag from '../assets/SPAIN-flag.png'
import { langContext } from './../context/langContext';
import { FormattedMessage } from "react-intl";

const links = [
    {
        id: "about",
        text: <FormattedMessage id="app.about" defaultMessage="About Me"/>,
        icon: <InfoTwoToneIcon fontSize="large"/>
    },
    {
        id: "skills",
        text: <FormattedMessage id="app.skills" defaultMessage="Skills"/>,
        icon: <EmojiObjectsTwoToneIcon fontSize="large"/>
    },
    {
        id: "projects",
        text: <FormattedMessage id="app.projects" defaultMessage="My Projects"/>,
        icon: <BuildTwoToneIcon fontSize="large"/>
    },
    {
        id: "contact",
        text: <FormattedMessage id="app.get" defaultMessage="Get In Touch"/>,
        icon: <ContactMailTwoToneIcon fontSize="large"/>
    },
]

const Navbar = () => {

    const classes = useStyles();
    const idioma = useContext(langContext);

    const [open, setOpen] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    const handleEnglish = () => {
        idioma.setLanguage('en-UK');
    }
      const handleSpanish = () => {
        idioma.setLanguage('es-ES')
    }

    return (
        <>
            <AppBar position="sticky" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <img onClick={scrollToTop} src={image} className={classes.logo} alt="logo"/>
                    <List className={classes.menu}>
                        {
                            links.map(({id, text}, index)=>(
                                <Link key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-70}>{text}</Link>
                            ))
                        }
                    </List>
                    <figure className={classes.language}>
                        <img onClick={handleEnglish} src={ukflag} alt='EN-LANG' height="20px" width="30px" className={classes.english}/>
                        <img onClick={handleSpanish} src={spflag} alt='ES-LANG' height="20px" width="30px" />
                    </figure>
                    <IconButton edge="end" className={classes.menubutton} onClick={()=>setOpen(!open)}>
                    <MenuIcon fontSize="large"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
                <IconButton onClick={()=>setOpen(false)} className={classes.cancelIcon}>
                    <CancelIcon fontSize="large"/>
                </IconButton>
                <Divider/>
                {
                    links.map(({id, text, icon}, index)=>(
                        <Link key={index} className={classes.sidebar} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-70}>
                            <ListItem component="h5">
                                <span><ListItemIcon>{icon}</ListItemIcon></span>{text}
                            </ListItem>
                            </Link>
                    ))
                }
            </Drawer>
        </>
    )
}

const useStyles = makeStyles((theme)=> ({
    root: {
        background: "#008d62",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999, 
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logo:{
        height: "4rem",
        objectFit:  "contain",
        "&:hover" : {
            cursor: "pointer"
        }
    },
    menu: {
        [theme.breakpoints.down("sm")] : {
            display: "none"
        },
        "& a":{
            color: "#57bd9e",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3),
        },
        "& a:hover":{
            cursor: "pointer",
            color: "#9ce9de",
            borderBottom: "3px solid #9ce9de",
        }
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")] : {
            display: "block", 
            color: "#57bd9e",
            position: "absolute",
            top: 0,
            right: 10,
        }
    },
    cancelIcon: {
        color: "tomato",
        position: "absolute",
        top: 0,
        right: 10,
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("sm")] : {
            width: "60vw",
        },
        "& h5": {
            margin: theme.spacing(8, 2, 2, 2),
            fontSize: "1.2rem",
            color: "#006d46",
            fontWeight: "bold"
        },
        "& h5:hover": {
            color: "#2ca880",
            cursor: "pointer"
        },
    },
    language:{
        margin: theme.spacing(3),
        "&:hover": {
            cursor: "pointer",
        }
    },
    english: {
        paddingRight: "1.5rem"
    }
}))

export default Navbar;