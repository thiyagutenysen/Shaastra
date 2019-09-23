import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
	root: {
		padding: theme.spacing(5),
		backgroundImage: "linear-gradient(to bottom, #121212 0%, #323232 100%)",
		color: "white",
		height: "auto",
	},
	icons: {
		width: theme.spacing(3),
		margin: theme.spacing(1),
	},
	center: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(3),
		},
	},
	address: {
		[theme.breakpoints.down("md")]: {
			fontSize: "18px",
		},
	},
	logo: {
		width: "90%",
		marginTop: theme.spacing(1),
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(3),
		},
	},
})

const Footer = ({ classes }) => {
	return (
		<section>
			<Grid container className={classes.root}>
				<Grid item xs={12} lg={6} align="center">
					<Grid container justify="center" align="center">
						<Grid item xs={12} lg={6} align="center">
							<img src="/static/logo1.svg" alt="shaastra logo" id="shaastra" className={classes.logo} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Grid container className={classes.center}>
						<Grid item xs={12} lg={6} align="center">
							<Typography variant="h5" className={classes.address}>
								Indian Institute of Technology Madras
								<br />
								Adyar, Chennai - 600036.
							</Typography>
							<br />
							<Typography variant="h6" className={classes.address}>
								For more info, visit <br />
								<Link href="www.shaastra.org" style={{ color: "dodgerblue" }}>
									www.shaastra.org
								</Link>
							</Typography>
						</Grid>
						<Grid item xs={12} lg={6} align="center">
							<Link href="https://www.facebook.com/Shaastra">
								<img src="/static/facebook.svg" alt="" className={classes.icons} />
							</Link>
							<Link href="https://www.instagram.com/shaastra_iitm">
								<img src="/static/instagram.svg" alt="" className={classes.icons} />
							</Link>
							<Link href="https://www.twitter.com/ShaastraIITM">
								<img src="/static/twitter.svg" alt="" className={classes.icons} />
							</Link>
							<Link href="https://www.linkedin.com/company/shaastra-iit-madras">
								<img src="/static/linkedin.svg" alt="" className={classes.icons} />
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section>
	)
}

export default withStyles(styles)(Footer)
