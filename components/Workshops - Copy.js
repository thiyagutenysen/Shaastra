import React from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Fab from "@material-ui/core/Fab"
import RightIcon from "@material-ui/icons/TrendingFlat"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: "rgb(246, 246, 246)",
	},
	center: {
		display: "flex",
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	titleBox: {
		padding: theme.spacing(3),
		boxShadow: "rgba(0, 0, 0, 0.12) 0px 30px 60px",
		marginBottom: theme.spacing(2),
		top: "-50%",
		transform: "translateY(-50%)",
	},
	title: {
		fontWeight: 700,
		fontSize: "30px",
	},
	icon: {
		transition: "all 0.2s",
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
			"& svg": {
				transform: "translateX(40%)",
			},
		},
	},
	image: {
		height: theme.spacing(25),
		width: "90%",
		textAlign: "center",
		margin: "auto",
	},
	padding: {
		padding: theme.spacing(0, 5, 5, 5),
	},
}))

const competetions = [
	{
		imageUrl: "https://i.ibb.co/V235wz1/IMG01.jpg",
		title: "Shaastra Relaunch",
		date: "August 8, 2019",
		description: "Women who take a career break are forced to sit back at home in most cases due to a lack of the practical knowledge required to cope up with the fast-changing job market. Thus, in an attempt to encourage women who had taken a break to get back on track, Shaastra came up with the first of its kind Career returnship conference. The two-day skill-oriented conference had lectures, panels and workshops where the participants honed their skills, were mentored and set back on track for their relaunch!",
		type: "Competetion",
	},
	{
		imageUrl: "https://i.ibb.co/gWc8YWC/IMG02.jpg",
		title: "Shaastra Green Energy Summit & Rural Energy Challenge (2018)",
		date: "August 8, 2019",
		description: "Targeting the clean energy inadequacy in rural India, we organised the Rural energy Challenge, a semester long competition where teams identified avenues that had potential for ‘Green Energy’ solutions, conceptualised a product and indulged in village visits to study the environment and the feasibility of their models. The students were provided constant mentorship and the best ideas were incubated taking them one step forward towards implementation.",
		type: "Competetion",
	},
	{
		imageUrl: "https://i.ibb.co/CvBmBBr/IMG03.jpg",
		title: "Shaastra Accessibility Summit (2017)",
		date: "August 8, 2019",
		description: "All of us hate being excluded or pitied upon. In an attempt to get rid of this exclusion in physical environments, public spaces, technology, education and transport to name a few, Shaastra hosted an accessibility summit bringing together stakeholders in accessibility and assistive technologies. Students were encouraged to ideate on making the environment obstacle-free and liberate the specially-challenged from their everyday struggle. It gave students a platform to come up with solutions that would make our country truly accessible.",
		type: "Competetion",
	},
	{
		imageUrl: "https://images.unsplash.com/photo-1533258439784-28006397342d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
		title: "Competetion 4",
		date: "August 8, 2019",
		description: "One lien description about the competetion",
		type: "Competetion",
	},
]

export default () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.center}>
				<Paper className={classes.titleBox}>
					<Typography variant="h5" className={classes.title}>
						Social Impact in the past
					</Typography>
				</Paper>
			</div>
			<Grid container spacing={3} className={classes.padding} justify="center" direction="row" alignItems="center">
				{competetions.map(({ title, imageUrl, description, date, type }) => (
					<Grid className={classes.center} item xs={12} md={3}>
						<Card className={classes.card}>
							<CardHeader title={title} subheader={date} />
							<CardMedia className={classes.image} image={imageUrl} title={title} />
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									{description}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
				<Fab variant="extended" className={classes.fab1} href="#aboutUs">
					View All&nbsp;&nbsp;
					<RightIcon className={classes.icon} />
				</Fab>
			</Grid>
		</div>
	)
}
/*
<a href="https://ibb.co/RQkfhQz"><img src="https://i.ibb.co/gtLNvtz/IMG06.jpg" alt="IMG06" border="0"></a>
<a href="https://ibb.co/thM0qTh"><img src="https://i.ibb.co/vBxN36B/IMG05.jpg" alt="IMG05" border="0"></a>
<a href="https://ibb.co/P6NYnLp"><img src="https://i.ibb.co/cr1vHB5/IMG04.jpg" alt="IMG04" border="0"></a>
<a href="https://ibb.co/pZ2b22m"><img src="https://i.ibb.co/CvBmBBr/IMG03.jpg" alt="IMG03" border="0"></a>
<a href="https://ibb.co/myPKpy7"><img src="https://i.ibb.co/gWc8YWC/IMG02.jpg" alt="IMG02" border="0"></a>
<a href="https://ibb.co/FgnCHyr"><img src="https://i.ibb.co/V235wz1/IMG01.jpg" alt="IMG01" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>picture to url</a><br />
*/