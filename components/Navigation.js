import React, { cloneElement } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Grid from "@material-ui/core/Grid"
import Slide from "@material-ui/core/Slide"

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		color: "black",
		backgroundColor: "#fff",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	button: {
		color: "#9a9a9a",
		whiteSpace: "nowrap",
		fontSize: "16px",
		lineheight: "26px",
		fontWeight: 400,
		textTransform: "none",
		margin: theme.spacing(0, 0.5),
		"&:hover": {
			backgroundColor: "white",
			color: "black",
		},
	},
	center: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}))

const ElevationScroll = props => {
	const { children, window } = props
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	})

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	})
}

const HideOnScroll = props => {
	const { children, window } = props
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined })

	return (
		<ElevationScroll {...props}>
			<Slide appear={false} direction="down" in={!trigger}>
				{children}
			</Slide>
		</ElevationScroll>
	)
}

export default props => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<HideOnScroll {...props}>
				<AppBar className={classes.appBar}>
					<Grid container alignItems="center" justify="center">
						<Grid item xs={10} className={classes.center}>
							<Toolbar>
								<Button className={classes.button} href="#conferenceThemes">
									Conference Themes
								</Button>
								<Button className={classes.button} href="#workshops">
									Competitions And Workshops
								</Button>
								<Button className={classes.button} href="#speakers">
									Speakers
								</Button>
								<Button className={classes.button}>Partners</Button>
								<Button className={classes.button}>Schedule</Button>
								<Button className={classes.button}>Registration</Button>
								<Button className={classes.button}>FAQs</Button>
							</Toolbar>
						</Grid>
					</Grid>
				</AppBar>
			</HideOnScroll>
		</div>
	)
}
