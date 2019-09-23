import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		padding: theme.spacing(15, 20),
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: "inline",
	},
	title: {
		fontWeight: 600,
	},
	image: {
		height: theme.spacing(11),

		width: theme.spacing(11),
	},
	speaker: {
		marginLeft: theme.spacing(5),
	},
	listItem: {
		padding: theme.spacing(3),
	},
}))

export default function AlignItemsList() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography className={classes.title} variant="h4">
				Speakers
			</Typography>
			<br />
			<List>
				<ListItem className={classes.listItem}>
					<ListItemAvatar>
						<Avatar className={classes.image} alt="Remy Sharp" src="https://images.unsplash.com/photo-1527351093676-6ac445e98766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant="h4" className={classes.title} color="primary">
								Speaker Name
							</Typography>
						}
						secondary={
							<Fragment>
								<Typography component="span" variant="body1" className={classes.inline} color="textPrimary">
									Ali Connors s{" — I'll be in your neighborhood doing errands this…"}
								</Typography>
							</Fragment>
						}
						className={classes.speaker}
					/>
					<ListItemText
						primary={
							<Typography variant="h5" className={classes.title}>
								Topic Name
							</Typography>
						}
						className={classes.speaker}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
				<ListItem className={classes.listItem}>
					<ListItemAvatar>
						<Avatar className={classes.image} alt="Remy Sharp" src="https://images.unsplash.com/photo-1527351093676-6ac445e98766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant="h4" className={classes.title} color="primary">
								Speaker Name
							</Typography>
						}
						secondary={
							<Fragment>
								<Typography component="span" variant="body1" className={classes.inline} color="textPrimary">
									Ali Connors s{" — I'll be in your neighborhood doing errands this…"}
								</Typography>
							</Fragment>
						}
						className={classes.speaker}
					/>
					<ListItemText
						primary={
							<Typography variant="h5" className={classes.title}>
								Topic Name
							</Typography>
						}
						className={classes.speaker}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />
				<ListItem className={classes.listItem}>
					<ListItemAvatar>
						<Avatar className={classes.image} alt="Remy Sharp" src="https://images.unsplash.com/photo-1527351093676-6ac445e98766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant="h4" className={classes.title} color="primary">
								Speaker Name
							</Typography>
						}
						secondary={
							<Fragment>
								<Typography component="span" variant="body1" className={classes.inline} color="textPrimary">
									Ali Connors s{" — I'll be in your neighborhood doing errands this…"}
								</Typography>
							</Fragment>
						}
						className={classes.speaker}
					/>
					<ListItemText
						primary={
							<Typography variant="h5" className={classes.title}>
								Topic Name
							</Typography>
						}
						className={classes.speaker}
					/>
				</ListItem>
			</List>
		</div>
	)
}
