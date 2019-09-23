import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import NavigationIcon from "@material-ui/icons/Navigation"
import CssBaseLine from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Particles from "../components/Particles"
import Navigation from "../components/Navigation"
import AboutUs from "../components/AboutUs"
import ConferenceThemes from "../components/ConferenceThemes"
import Workshops from "../components/Workshops"
import Timeline from '../components/timeline'

import Speakers from "../components/Speakers"
import Footer from "../components/Footer"
import Faq from "../components/Faq"

const useStyles = makeStyles(theme => ({
	particleContainer: {
		width: "100vw",
		margin: 0,
		position: "absolute",
		left: 0,
		top: 0,
		padding: 0,
		maxWidth: "100%",
		overflow: "hidden",
		maxHeight: "100vh",
	},
	container: {
		height: "100vh",
	},
	fab1: {
		backgroundColor: "dodgerblue",
		color: "white",
		margin: theme.spacing(2, 2, 0, 0),
		fontSize: "16px",
		boxShadow: "0 5px 15px dodgerblue",
		fontWeight: 400,
		"&:hover": {
			backgroundColor: "rgba(30, 144, 255, 0.9)",
		},
	},
	fab2: {
		margin: theme.spacing(2, 0, 0, 0),
		fontSize: "16px",
	},
	icon: {
		fontSize: "20px",
		margin: theme.spacing(0, 1, 0, 0),
	},
}))

export default () => {
	const classes = useStyles()
	return (
		<Fragment>
			<CssBaseLine />
			<Navigation />
			<div className={classes.particleContainer}>
				<Particles />
			</div>
			<Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
				<Grid item>
					<Typography variant="h4">Shaastra Tech And Policy</Typography>
				</Grid>
				<Grid item>
					<Fab variant="extended" className={classes.fab1} href="#aboutUs">
						<NavigationIcon className={classes.icon} />
						Learn More
					</Fab>
					<Fab variant="extended" className={classes.fab2}>
						Contact Us
					</Fab>
				</Grid>
			</Grid>
			<div id="aboutUs">
				<AboutUs />
			</div>
			<div id="conferenceThemes">
				<ConferenceThemes />
			</div>
			<div 
				export { default as Timeline } from '../components/timeline.js'
				export default Timeline
			</div>
			<div id="workshops">
				<Workshops />
			</div>
			<div id="speakers">
				<Speakers />
			</div>
			<div id="faq">
				<Faq />
			</div>
			<div id="footer">
				<Footer />
			</div>
		</Fragment>
	)
}
