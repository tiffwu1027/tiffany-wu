import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import '../styling/Header.css';
import { Home } from './Home';
import { About } from './About';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/core';
import { Research } from './Research';
import { Contact } from './Contact';
import { Fun } from './Fun';
import {Projects } from './Projects';


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: 'grey',
    },
}));



export const Header: React.FC = () => {
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
            primary: indigo,
            secondary: {
                light: indigo[50],
                dark: indigo[200],
                main: indigo[100],

            }
        }
    });
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar className="app-bar" position="static" style={{background: "rgba(0,76,221,0.7)"}}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="About" {...a11yProps(1)} />
                        <Tab label="Research" {...a11yProps(2)} />
                        <Tab label="Projects" {...a11yProps(3)} />
                        <Tab label="Fun" {...a11yProps(4)} />
                        <Tab label="Contact" {...a11yProps(5)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Home></Home>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <About></About>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <Research />
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <Projects />
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                        <Fun />
                    </TabPanel>
                    <TabPanel value={value} index={5} dir={theme.direction}>
                        <Contact />
                    </TabPanel>
                </SwipeableViews>
            </ThemeProvider>
        </div>
    );
}
