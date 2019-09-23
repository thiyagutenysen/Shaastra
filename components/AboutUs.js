import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
	root: {
		maxHeight: "100vh",
		backgroundImage: "linear-gradient(to bottom, #121212 0%, #323232 100%)",
		color: "white",
		padding: theme.spacing(7),
	},
}))

export default () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container spacing={7} aignItems="center" justify="center">
				<Grid item xs={6}>
					<Typography variant="h4">Shaastra</Typography>
					<br />
					<Typography variant="body1">Shaastra is the annual technical festival of Indian Institute of Technology Madras. Being the first in the world to be ISO 9001:2015 certified and completely student run, Shaastra stands out from the rest in being the largest and one of the most unique tech festivals ever celebrated in India. Through its diverse events, workshops, professional shows, exhibitions, lectures and competitions, Shaastra thrives to give its participants a memorable experience. It thus serves as a platform for young minds from across the nation to expand their techno-innovation skills and create an impact in society.</Typography>
					<br />
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h4">STeP</Typography>
					<br />
					<Typography variant="body1">
						Shaastra Tech and Policy constitutes a 3 month long competition that culminates at a 3 day conference during shaastra. We aim to make the world a better place by implementing policies aided by technology. The competition gives participants a chance to come up with life-changing policies that engage the use of upcoming technology. <br />
						<br />
						In the 3 day conference, we bring to all the tech and policy enthusiasts workshops, panel discussions, lectures and more.{" "}
					</Typography>
					<br />
				</Grid>
			</Grid>
		</div>
	)
}
