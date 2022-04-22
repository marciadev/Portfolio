import { makeStyles } from '@material-ui/core'
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useIntl } from 'react-intl'

function App() {

  const classes = useStyles();
  const intl = useIntl();

  return (
    <div className={classes.root}>
      <Navbar/>
      <About title={intl.formatMessage({ id: "app.about" })} id='about' dark={true}/>
      <Skills title={intl.formatMessage({ id: "app.skills" })} id='skills' dark={false}/>
      <Projects title={intl.formatMessage({ id: "app.projects" })} id='projects' dark={true}/>
      <Contact title={intl.formatMessage({ id: "app.get" })} id='contact' dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme)=> ({
  root: {
  }
}))
export default App;
