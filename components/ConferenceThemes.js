import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(10),
	},
	title: {
		fontSize: "32px",
		fontWeight: 700,
		marginBottom: theme.spacing(6),
	},
	heading: {
		fontSize: "20px",
		color: "dodgerblue",
		fontWeight: 400,
	},
	content: {
		color: "#111111",
		fontSize: "16px",
	},
	margin: {
		marginBottom: theme.spacing(6),
	},
}))

export default () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid container alignItems="center" justify="center">
				<Grid item>
					<Typography variant="h6" className={classes.title}>
						Tracks
					</Typography>
				</Grid>
			</Grid>
			<Grid container alignItems="center" justify="center">
				<Grid xs={1} item />
				<Grid xs={10} item>
					<Grid container spacing={3} justify="center">
						<Grid item xs={4} className={classes.margin}>
							<Typography className={classes.heading}>Water</Typography>
							<br />
							<Typography className={classes.content}>Water is essential to life, yet 844 million people in the world - 1 in 9 - lack access to it. With increasing water scarcity every year, it’s high time everyone needs to step up and identify solutions to conserve and manage water resources properly</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography className={classes.heading}>Policy in Tech</Typography>
							<br />
							<Typography className={classes.content}>With new advancement in technology everyday, it is a necessity to regulate them in a manner which is ethical and isn’t biased towards any entity. This track focuses on leveraging policies for a sustainable and equal benefits of technology</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography className={classes.heading}>Waste Management</Typography>
							<br />
							<Typography className={classes.content}>Today, the entire world is trying to tackle the problem of waste management. The land-fills and oceans are filled with plastic and it is affecting our ecosystem in an irreparable manner. And it is the need of the hour for policymakers and tech enthusiasts to bring about a change </Typography>
						
					</Grid>
				</Grid>
				<Grid item xs={1} />
			</Grid>
		</div>
	)
}
