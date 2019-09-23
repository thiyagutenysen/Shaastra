import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import AccountCircle from "@material-ui/icons/Email"
import Fab from "@material-ui/core/Fab"
import RightIcon from "@material-ui/icons/TrendingFlat"
import QuestionAnswer from "@material-ui/icons/QuestionAnswer"

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		backgroundColor: "rgb(246, 246, 246)",
		padding: theme.spacing(10),
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	icon: {
		transition: "all 0.2s",
	},
	fab1: {
		backgroundColor: "dodgerblue",
		color: "white",
		width: "100%",
		margin: theme.spacing(2, 2, 0, 0),
		fontSize: "16px",
		boxShadow: "0 5px 15px dodgerblue",
		fontWeight: 400,
		"&:hover": {
			backgroundColor: "rgba(30, 144, 255, 0.9)",
			"& svg": {
				transform: "translateX(40%)",
			},
		},
	},
	contact: {
		fontSize: "32px",
		fontWeight: 700,
	},
}))

export default () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container justify="center" alignItems="center">
				<Grid item xs={1} />
				<Grid item xs={5}>
					<Typography variant="h6" className={classes.contact}>
						We're getting better every day — suggest improvements.
					</Typography>
				</Grid>
				<Grid item xs={1} />
				<Grid item xs={3}>
					<TextField
						className={classes.margin}
						id="input-with-icon-textfield"
						variant="outlined"
						placeholder="Email Address"
						fullWidth
						margin="normal"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						className={classes.margin}
						id="input-with-icon-textfield"
						variant="outlined"
						placeholder="Message"
						fullWidth
						margin="normal"
						multiline
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<QuestionAnswer />
								</InputAdornment>
							),
						}}
					/>
					<Fab variant="extended" className={classes.fab1} href="#aboutUs">
						Send&nbsp;&nbsp;
						<RightIcon className={classes.icon} />
					</Fab>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</div>
	)
}
