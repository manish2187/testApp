import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { MenuItem, InputLabel, TextField, AppBar } from '@material-ui/core';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    color: "black",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
   // setAge(event.target.value);
  };

  return (
    <div className={"test"}>
      <main className={classes.content}>
       
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            <Grid container md={12}>
              <Grid item md={2} style={{display:"flex"}}>
                
                 <svg width="255" height="50" viewBox="0 0 255 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M84.8704 38.52H94.1725L82.5086 11.7703H73.6639L62 38.52H71.1487L72.9403 33.8572H83.0789L84.8704 38.52ZM75.4178 27.3606L78.0109 20.6347L80.6014 27.3606H75.4178ZM111.897 39.1322C117.121 39.1322 121.237 37.2228 123.867 33.7817L118.189 28.6982C116.626 30.6857 114.756 31.8319 112.357 31.8319C108.621 31.8319 106.103 29.2349 106.103 25.1465C106.103 21.0554 108.621 18.4584 112.357 18.4584C114.756 18.4584 116.626 19.6045 118.189 21.5921L123.867 16.5086C121.237 13.0701 117.121 11.1581 111.897 11.1581C103.321 11.1581 97.032 16.9293 97.032 25.1465C97.032 33.361 103.321 39.1322 111.897 39.1322ZM148.911 38.52H158.214L146.55 11.7703H137.705L126.041 38.52H135.19L136.981 33.8572H147.12L148.911 38.52ZM139.459 27.3606L142.052 20.6347L144.642 27.3606H139.459ZM162.52 38.52H175.672C184.592 38.52 190.73 33.4392 190.73 25.1465C190.73 16.8511 184.592 11.7703 175.672 11.7703H162.52V38.52ZM171.518 31.4894V18.8009H175.292C179.064 18.8009 181.657 21.0554 181.657 25.1465C181.657 29.2349 179.064 31.4894 175.292 31.4894H171.518ZM207.427 31.5272L219.624 17.3122V11.7703H196.105V18.7631H207.922L195.723 32.9807V38.52H220.234V31.5272H207.427ZM245.698 38.52H255L243.333 11.7703H234.491L222.827 38.52H231.976L233.768 33.8572H243.906L245.698 38.52ZM236.245 27.3606L238.836 20.6347L241.429 27.3606H236.245Z" fill="#292D48"></path><path d="M22.0629 1.59041C21.9239 1.95032 21.7027 2.55016 21.5636 2.93531C21.2603 3.78772 21.1023 4.10342 20.8242 4.41282C20.3565 4.93057 19.3643 5.17682 18.6249 4.96214C18.1888 4.83586 17.8538 4.5391 16.7794 3.32048C16.2739 2.74589 15.9768 2.46176 15.8883 2.46176C15.7746 2.46176 14.3652 3.07423 13.7838 3.37099L13.5752 3.48464L13.6132 4.56435C13.6321 5.16419 13.6637 5.90294 13.689 6.21865C13.7206 6.75534 13.7143 6.80585 13.5436 7.13419C13.4109 7.39307 13.2782 7.54461 13.0191 7.71509C12.2796 8.2139 12.1153 8.27704 11.5718 8.28336H11.0789L9.82119 7.64563C9.126 7.29836 8.48768 6.99528 8.3992 6.97002C8.24752 6.93845 8.13377 7.02685 7.38801 7.73403C6.81922 8.27073 6.53482 8.59275 6.52218 8.69377C6.50322 8.84531 7.0657 10.2028 7.55865 11.1815C7.84305 11.7561 7.87465 11.9582 7.71665 12.3749C7.53337 12.8611 6.98986 13.5619 6.57274 13.8398C6.0545 14.187 5.68795 14.2944 5.22027 14.2375C5.00539 14.206 4.66412 14.1807 4.45556 14.1744C4.247 14.1681 3.75405 14.1302 3.35589 14.086C2.88189 14.0355 2.61646 14.0355 2.5659 14.0734C2.52166 14.1113 2.42686 14.2754 2.35102 14.4396C1.85174 15.5698 1.57999 16.2328 1.57999 16.3401C1.57999 16.4222 1.98446 16.8579 2.71758 17.5651C3.52021 18.348 3.88676 18.7458 3.97524 18.9479C4.13324 19.2825 4.14588 19.7434 4.01316 20.2864C3.9626 20.5011 3.86148 20.9621 3.78565 21.303C3.66557 21.8523 3.62133 21.9597 3.40013 22.1996C3.02725 22.6037 2.86293 22.6858 1.61159 23.0962C0.985911 23.3046 0.372877 23.5193 0.240158 23.5824L0.0126399 23.6961L0.00631994 24.9399L0 26.1901L0.202238 26.3164C0.315997 26.3859 0.581435 26.4995 0.789993 26.569C1.70638 26.8784 2.75549 27.2825 3.00829 27.434C3.53917 27.7434 3.75405 28.2106 3.71613 28.9368C3.67189 29.7765 3.64661 29.8081 1.55471 31.5571C1.10599 31.936 1.00487 32.0496 1.03015 32.1569C1.08071 32.3779 1.54839 33.5903 1.76326 34.0575L1.95918 34.4869L3.61501 34.4679C5.78907 34.4363 5.61211 34.3543 6.55378 35.8633C7.07201 36.6905 7.33745 37.2966 7.37537 37.7512C7.41329 38.1617 7.36273 38.3006 6.56642 39.9738C6.29466 40.5547 6.06714 41.0472 6.06714 41.0851C6.06714 41.1861 7.81145 42.872 7.91889 42.872C7.97577 42.872 8.63936 42.5689 9.39143 42.19C10.7439 41.5208 10.7629 41.5144 11.2116 41.5144C11.654 41.5144 11.6793 41.5271 12.2228 41.8617C13.0128 42.3479 13.4804 42.7962 13.7206 43.2887L13.9228 43.6928L13.866 45.0314C13.8028 46.7236 13.8028 46.7109 13.9228 46.8372C13.9797 46.8877 14.3589 47.0582 14.7697 47.2034C15.1805 47.3487 15.6482 47.5191 15.8125 47.5823C16.2928 47.7654 16.2549 47.797 18.1572 45.5681C18.41 45.265 18.5174 45.1956 18.8145 45.1072C19.4212 44.9304 20.1606 45.1135 20.8242 45.606C21.2603 45.9217 21.4056 46.2184 21.886 47.677C22.0756 48.2516 22.2778 48.8072 22.3347 48.9209L22.4421 49.1229L23.6555 49.1103L24.869 49.0914L25.0396 48.7756C25.1344 48.5989 25.305 48.1884 25.4125 47.8601C26.1646 45.6249 26.2846 45.4923 27.7193 45.2019C28.2817 45.0945 28.4271 45.0819 28.7431 45.145C29.4256 45.284 29.5773 45.4229 31.0246 47.1592C31.3216 47.5065 31.6124 47.8096 31.6692 47.8285C31.7324 47.8475 31.9915 47.778 32.2443 47.6707C32.4971 47.557 32.9775 47.3676 33.3061 47.2476C33.6347 47.1277 33.9444 47.0014 33.9886 46.9635C34.0582 46.9004 34.0708 46.5657 34.0518 45.2082L34.0329 43.535L34.2414 43.1119C34.3994 42.7899 34.5132 42.651 34.7281 42.5121C34.8798 42.4174 35.221 42.1964 35.4802 42.0322C35.9984 41.6975 36.5103 41.565 36.9906 41.6344C37.1486 41.6597 37.8249 41.9627 38.5832 42.3416C39.4617 42.7836 39.942 42.9983 40.0305 42.973C40.1759 42.9351 41.6547 41.5271 41.7622 41.325C41.8191 41.2177 41.7369 40.9777 41.2882 39.9675C40.5487 38.2753 40.435 37.9343 40.4855 37.6439C40.5551 37.2524 40.8774 36.6463 41.1997 36.2927C41.8317 35.6044 42.5458 35.434 43.9868 35.636C44.7641 35.7434 45.4846 35.7686 45.6173 35.6865C45.6995 35.6297 46.5527 33.8176 46.6159 33.5524C46.6475 33.4261 46.5717 33.3124 46.1293 32.8578C45.8385 32.5611 45.3456 32.1001 45.0422 31.8349C44.4166 31.2919 44.1701 30.951 44.0184 30.4143C43.9173 30.0607 43.9173 30.0228 44.05 29.3724C44.1195 28.9999 44.2143 28.6084 44.2459 28.5074C44.3407 28.2296 44.998 27.4529 45.2887 27.2888C45.4214 27.213 46.0597 26.9794 46.7044 26.771C47.349 26.5627 47.9684 26.3354 48.0821 26.2659L48.2844 26.1396V24.9968C48.2844 24.3654 48.2591 23.8034 48.2212 23.7403C48.158 23.6203 47.4122 23.3109 46.1672 22.8879C45.788 22.7553 45.3645 22.5974 45.2318 22.528C44.4418 22.1302 43.8478 20.861 44.0437 19.9897C44.1701 19.4214 44.3976 19.131 45.2824 18.4049C46.8055 17.1483 46.7044 17.2494 46.6981 17.0284C46.6981 16.9147 46.5021 16.3591 46.2746 15.7845L45.8512 14.7427L44.05 14.7111C42.7607 14.6858 42.1919 14.6543 42.0592 14.5975C41.7306 14.4522 41.4588 14.206 41.1112 13.7324C40.7194 13.2083 40.5108 12.659 40.4666 12.0592L40.435 11.6488L41.1302 10.247L41.8317 8.85162L41.6547 8.60537C41.5536 8.47278 41.1744 8.07499 40.8142 7.71509C40.2644 7.17839 40.119 7.07105 39.9547 7.07105C39.8409 7.07105 39.2152 7.32361 38.4442 7.68351L37.1297 8.3023H36.4977C35.9036 8.3023 35.8404 8.28967 35.4802 8.09393C35.0188 7.84137 34.7218 7.55092 34.4184 7.04579C34.1466 6.59749 34.0961 6.30073 34.1846 5.68195C34.2162 5.42307 34.2667 4.77272 34.292 4.24865L34.3362 3.28259L34.0582 3.16262C32.0358 2.29759 32.1179 2.32285 31.8967 2.43019C31.783 2.4807 31.5744 2.66381 31.4417 2.82798C31.3027 2.99214 30.8666 3.47202 30.4621 3.90137C29.3688 5.06948 29.0401 5.19576 27.7698 4.93057C27.0304 4.77903 26.5374 4.53278 26.1898 4.14762C25.956 3.88243 25.8738 3.71826 25.6274 2.94794C25.4694 2.45544 25.2482 1.80509 25.1407 1.4957L24.9448 0.946377H23.6303H22.322L22.0629 1.59041ZM25.1344 9.88713C26.7776 10.0387 28.5093 10.4491 29.8554 11.011C34.273 12.8611 37.591 16.6937 38.7728 21.3093C39.1457 22.7742 39.2152 23.3488 39.2152 25.0347C39.2089 26.3101 39.19 26.6826 39.0699 27.3709C38.8929 28.4001 38.5643 29.6566 38.2736 30.4206C37.7237 31.8539 36.6557 33.666 35.6571 34.8531C33.2492 37.7197 29.6342 39.7023 25.975 40.1569C21.7912 40.6747 17.6706 39.5066 14.4095 36.8862C11.5655 34.5942 9.61895 31.3109 8.98064 27.7434C8.54456 25.3062 8.7152 22.7426 9.45463 20.438C10.6681 16.6811 13.2656 13.5619 16.7605 11.6614C18.4732 10.7206 20.6599 10.0766 22.7328 9.88713C24.0031 9.77348 23.9399 9.77348 25.1344 9.88713Z" fill="#292D48"></path><path d="M22.4044 10.992C20.4326 11.1941 18.0626 12.0275 16.4068 13.0946C15.4209 13.7323 14.8837 14.168 13.9926 15.052C11.6163 17.4261 10.2259 20.2927 9.91622 23.475C9.82142 24.4284 9.8783 26.7267 10.011 27.5286C10.3776 29.6691 11.3319 31.8096 12.7918 33.748C13.2279 34.3352 14.6499 35.7748 15.1997 36.1916C17.8477 38.1995 20.8244 39.2097 24.0602 39.2097C24.9071 39.2097 25.2674 39.1781 26.1774 39.0203C28.5348 38.6162 30.0958 38.0037 31.9159 36.7914C33.0598 36.0274 34.2227 34.9603 35.0569 33.9185C35.9354 32.8199 36.8139 31.2792 37.2942 29.9911C38.3749 27.074 38.4697 23.9043 37.5596 20.9683C36.8202 18.5626 35.6447 16.6495 33.8056 14.8689C32.6554 13.7576 31.7327 13.1072 30.2411 12.3685C28.7496 11.6361 27.2013 11.1814 25.5012 10.9857C24.8439 10.9163 23.1439 10.9163 22.4044 10.992ZM26.1332 11.9896C30.5319 12.8042 34.0521 15.4371 35.9544 19.3519C36.8076 21.0946 37.2563 23.0961 37.2436 25.0977C37.2184 31.1656 33.142 36.3747 27.2076 37.9153C25.4317 38.3763 23.0996 38.4078 21.172 37.9974C19.7627 37.7006 18.031 36.9745 16.8113 36.179C14.0874 34.3921 12.2167 31.9106 11.275 28.823C10.6683 26.8404 10.5545 24.8262 10.94 22.6668C11.098 21.7639 11.61 20.1853 12.0144 19.3393C12.4568 18.4174 13.4996 16.8831 14.2327 16.0875C16.1477 14.0038 18.8463 12.5327 21.6903 12.0275C22.1895 11.9391 22.6383 11.8507 22.6888 11.8381C22.7394 11.8255 23.384 11.8255 24.1108 11.8381C25.0967 11.8507 25.6149 11.8949 26.1332 11.9896Z" fill="#292D48"></path></svg>
               
              </Grid>
              <Grid item md={5} style={{display:"flex"}}>
                <div className="activityGrid"> 

                
              <FormControl variant="standard" className={classes.formControl+" headerDropddown"}>
                  <InputLabel id="demo-simple-select-outlined-label">Activity</InputLabel>
                  <ArrowDropDownIcon style={{paddingLeft:"52px",paddingTop:"5px"}}/>
                </FormControl>

                <FormControl variant="standard" className={classes.formControl+" headerDropddown"}>
                  <InputLabel id="demo-simple-select-outlined-label">Tool Guid</InputLabel>
                  <ArrowDropDownIcon style={{paddingLeft:"72px",paddingTop:"5px"}}/>
                </FormControl>
                </div>
              </Grid>
          <Grid item md={3} className="activityGridSearch">
              <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item >
              <TextField className="headerDropddown" id="input-with-icon-grid" label="Search" />
            </Grid>
        </Grid>

              </Grid>

              <Grid item md={2} style={{display:"flex", flexDirection: "column"}}>

                <div color="inherit" className=" notificationGroup">
                 
                    <NotificationsIcon />
                    
                
                  <AccountCircleIcon style={{marginLeft:"4px"}}/>
                  <ArrowDropDownIcon style={{paddingLeft:"32px",paddingTop:"5px"}}/>
                </div>
               
              </Grid>
            </Grid>
            {/* Chart */}
            <Grid container md={12} style={{marginTop:"20px",display:"flex",alignItems:"center"}}>
              <Grid item md={2}>
                <ButtonGroup color="primary" aria-label="outlined primary button group" className="butonGroup">
                  <svg width="25" height="25" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4036 10.7231L24.8866 17.0013L23.5496 15.5856L28.4816 10.834C28.9586 10.3744 28.9716 9.6161 28.5116 9.13955L24.1086 4.57777C23.8856 4.34798 23.5856 4.2171 23.2656 4.21211C22.9486 4.20511 22.6416 4.326 22.4116 4.5468L18.5246 8.29033L21.8996 11.7821C22.1756 12.0708 22.1536 12.5464 21.8646 12.8271C21.6616 13.021 21.3646 13.0819 21.1126 13L16.2166 7.81377L22.6226 1.63649C23.0116 1.26583 23.6356 1.28681 24.0086 1.67346L31.4136 9.34236C31.7866 9.728 31.7866 10.3504 31.4036 10.7231ZM9.27964 29.3359C9.05264 29.5567 8.74465 29.6775 8.42764 29.6695C8.10864 29.6636 7.80564 29.5327 7.58364 29.3059L3.18065 24.7421C2.72165 24.2655 2.73365 23.5142 3.21065 23.0507L5.23565 25.1527C5.51465 25.4415 5.97265 25.4495 6.26164 25.1737C6.55064 24.898 6.55665 24.4414 6.27665 24.1517L4.25465 22.0466L4.79365 21.5261L6.81865 23.6281C7.09564 23.9149 7.55365 23.9249 7.84465 23.6491C8.13264 23.3684 8.13964 22.9138 7.85964 22.6231L5.83565 20.524L6.37565 20.0035L8.39865 22.1035C8.67765 22.3903 9.13765 22.4003 9.42465 22.1245C9.71564 21.8468 9.72064 21.3912 9.44265 21.1005L7.41764 19.0004L7.95665 18.4799L9.98164 20.578C10.2596 20.8687 10.7176 20.8777 11.0076 20.5989C11.1146 20.495 11.1846 20.3652 11.2126 20.2313L7.46364 16.255L0.289646 23.1616C-0.094354 23.5342 -0.094354 24.1586 0.276646 24.5433L7.68164 32.2172C8.05365 32.6028 8.67965 32.6238 9.06365 32.2492L16.1306 25.4435L14.7946 24.0278L9.27964 29.3359ZM22.2186 10.4803C21.2846 9.5162 21.3126 7.97163 22.2806 7.04149C23.2436 6.10935 24.7886 6.13732 25.7196 7.10243C26.6536 8.06854 26.6206 9.61311 25.6576 10.5412C24.6966 11.4734 23.1516 11.4454 22.2186 10.4803ZM23.2636 9.47324C23.6396 9.85888 24.2596 9.86987 24.6516 9.49622C25.0386 9.12156 25.0496 8.50014 24.6736 8.1125C24.2986 7.72485 23.6766 7.71187 23.2886 8.08652C22.9006 8.46117 22.8886 9.0826 23.2636 9.47324ZM27.1966 21.9307L20.8236 27.9302L6.62065 12.8741L12.9956 6.87464L27.1966 21.9307ZM14.0646 11.0728C14.0676 10.9289 14.0156 10.787 13.9136 10.6811L13.2196 9.9478C13.0136 9.729 12.6666 9.71801 12.4456 9.92482L12.0696 10.2775C11.8486 10.4833 11.8396 10.833 12.0456 11.0508L12.7356 11.7891C12.8386 11.895 12.9746 11.9589 13.1216 11.9599C13.2666 11.9659 13.8906 11.4574 13.8906 11.4574C13.9966 11.3565 14.0586 11.2186 14.0646 11.0728ZM23.9306 22.1016C24.1536 21.8937 24.1616 21.5461 23.9526 21.3263L15.9736 12.8691C15.8736 12.7612 15.7376 12.6993 15.5896 12.6963C15.4466 12.6913 15.3036 12.7462 15.1986 12.8441L14.8216 13.1998C14.6006 13.4066 14.5906 13.7523 14.7986 13.9731L22.7766 22.4312C22.8806 22.5371 23.0146 22.6011 23.1636 22.6051C23.3096 22.6101 23.4506 22.5551 23.5576 22.4552L23.9306 22.1016ZM5.97565 12.1877L12.3486 6.18628L10.7026 4.44189L4.33065 10.4443L5.97565 12.1877ZM1.48965 7.42913C1.14265 7.06147 0.958646 6.57692 0.972646 6.07338C0.988646 5.57085 1.20165 5.09729 1.56865 4.75261L5.18065 1.35275C5.94065 0.63142 7.14065 0.668386 7.85964 1.42968L10.0986 3.80249L3.72565 9.80193L1.48965 7.42913ZM2.62665 6.12334L3.79665 7.36619L7.65965 3.72955L6.48665 2.4887L2.62665 6.12334ZM30.4296 30.5008C30.5386 30.8465 30.4396 31.2231 30.1776 31.4709C29.9136 31.7196 29.5316 31.7926 29.1946 31.6637L21.6306 28.7804L27.9966 22.7789L30.4296 30.5008ZM28.4086 27.9092L27.4516 24.873L23.7506 28.3608L26.7286 29.4957L28.4086 27.9092Z" fill="#707070" />
                  </svg>

                  <Button className="custombuttons">Tools</Button>
                </ButtonGroup>
              </Grid>
              <Grid item md={6}>
                <div className="bitcoinField">

                
                <svg width="35" height="35" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M75 37.5C75 47.5166 71.0991 56.9341 64.0166 64.0166C56.9341 71.0991 47.5166 75 37.5 75C27.4834 75 18.0659 71.0991 10.9834 64.0166C3.90088 56.9341 0 47.5166 0 37.5C0 27.4834 3.90088 18.0659 10.9834 10.9834C18.0659 3.90088 27.4834 0 37.5 0C47.5166 0 56.9341 3.90088 64.0166 10.9834C71.0991 18.0659 75 27.4834 75 37.5Z" fill="#FEE158"></path><path d="M75 37.5C75 47.5166 71.0991 56.9341 64.0166 64.0166C56.9341 71.0991 47.5166 75 37.5 75V0C47.5166 0 56.9341 3.90088 64.0166 10.9834C71.0991 18.0659 75 27.4834 75 37.5Z" fill="#FFB528"></path><path d="M37.5 67.0898C53.842 67.0898 67.0898 53.842 67.0898 37.5C67.0898 21.158 53.842 7.91016 37.5 7.91016C21.158 7.91016 7.91016 21.158 7.91016 37.5C7.91016 53.842 21.158 67.0898 37.5 67.0898Z" fill="#FFB528"></path><path d="M67.0898 37.5C67.0898 53.8154 53.8154 67.0898 37.5 67.0898V7.91016C53.8154 7.91016 67.0898 21.1846 67.0898 37.5Z" fill="#FE8C01"></path><path d="M48.7426 37.043C48.2505 36.5508 47.7143 36.1201 47.1445 35.751C48.4907 34.2407 49.3125 32.2515 49.3125 30.0718C49.3125 27.7983 48.4218 25.6538 46.8061 24.0381C45.1889 22.4209 43.0459 21.5303 40.771 21.5303H39.6972V17.2852H35.3027V21.5303H25.6289V25.9248H29.2178V49.0752H25.6289V53.4697H35.3027V57.7148H39.6972V53.4697H41.9428C47.25 53.4697 51.5683 49.1514 51.5683 43.8442C51.5683 41.2808 50.5649 38.8652 48.7426 37.043ZM33.6123 25.9248H40.771C41.8725 25.9248 42.9111 26.3584 43.6977 27.145C44.4843 27.9316 44.9179 28.9717 44.9179 30.0718C44.9179 32.3364 43.0942 34.1821 40.8384 34.2173H33.6123V25.9248ZM41.9428 49.0752H33.6123V38.6147L37.5 38.6133L41.9428 38.6118C43.3315 38.6118 44.644 39.1582 45.6357 40.1514C46.6274 41.1431 47.1738 42.4541 47.1738 43.8442C47.1738 46.7285 44.8271 49.0752 41.9428 49.0752Z" fill="#FEE158"></path><path d="M51.5684 43.8442C51.5684 49.1514 47.25 53.4697 41.9429 53.4697H39.6973V57.7148H37.5V49.0752H41.9429C44.8271 49.0752 47.1738 46.7285 47.1738 43.8442C47.1738 42.4541 46.6274 41.1431 45.6357 40.1514C44.644 39.1582 43.3315 38.6118 41.9429 38.6118L37.5 38.6133V34.2173H40.8384C43.0942 34.1821 44.918 32.3364 44.918 30.0718C44.918 28.9717 44.4844 27.9316 43.6978 27.145C42.9111 26.3584 41.8726 25.9248 40.771 25.9248H37.5V17.2852H39.6973V21.5303H40.771C43.0459 21.5303 45.189 22.4209 46.8062 24.0381C48.4219 25.6538 49.3125 27.7983 49.3125 30.0718C49.3125 32.2515 48.4907 34.2407 47.1445 35.751C47.7144 36.1201 48.2505 36.5508 48.7427 37.043C50.5649 38.8652 51.5684 41.2808 51.5684 43.8442Z" fill="#FFB528"></path></svg>

                <span>Real-time bitcoin graph</span>
                </div>
              </Grid>
              <Grid item md={2}>
                <FormControl variant="standard" className={classes.formControl+" commudity1"}>
                  <InputLabel id="demo-simple-select-outlined-label">Commodity1</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Commodity1"
                    
                  >
                    <MenuItem value="" className="commudity1-option">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10} className="commudity1-option">Option1</MenuItem>
                    <MenuItem value={20} className="commudity1-option">Option2</MenuItem>
                    <MenuItem value={30} className="commudity1-option">Option3</MenuItem>
                    <MenuItem value={30} className="commudity1-option">Option4</MenuItem>
                  </Select>
                </FormControl>

              </Grid>

              <Grid item md={2}>
                <FormControl variant="standard" className={classes.formControl+" commudity2"}>
                  <InputLabel id="demo-simple-select-outlined-label">Commodity2</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Commodity1"
                  >
                   
                   <MenuItem value="" className="commudity2-option">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10} className="commudity2-option">Option1</MenuItem>
                    <MenuItem value={20} className="commudity2-option">Option2</MenuItem>
                    <MenuItem value={30} className="commudity2-option">Option3</MenuItem>
                    <MenuItem value={30} className="commudity2-option">Option4</MenuItem>
                  </Select>
                </FormControl>

              </Grid>
            </Grid>


            <Grid container md={12} style={{marginTop:"10px",display:"flex",alignItems:"center"}}>
              <Grid item md={2}>
                
              </Grid>
              <Grid item md={6}>
              
              </Grid>
              <Grid item md={2}>
               

              </Grid>

              <Grid item md={2}>
              

              </Grid>
            </Grid>
            <Grid item md={2} >
              <Divider />
              <List>{mainListItems}</List>
              <Divider />


            </Grid>

            <Grid item md={10} style={{backgroundColor:"#FFFDF7"}} >

<Grid container md={12} style={{alignItems:"center"}}>
              <Grid item md={2}>
                
              </Grid>
              <Grid item md={5}>
              
              </Grid>
              <Grid item md={2}>
                <div style={{display:"flex",justifyContent:"center"}}>
                <div className="block-commudity1"></div>
                <span>Data set 1</span>
                </div>
               

              </Grid>

              <Grid item md={3}>
              <div style={{display:"flex",justifyContent:"center"}}>
              <div className="block-commudity2"></div>
                <span>Data set 2</span>
              </div>

              </Grid>
            </Grid>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>

          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
