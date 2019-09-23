import { createMuiTheme } from "@material-ui/core/styles"

// Create a theme instance.
const theme = createMuiTheme({
	typography: {
		fontFamily: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
	},
	palette: {
		primary: {
			main: "#1e90ff",
		},
		background: {
			default: {
				main: "#fff",
			},
		},
	},
})

export default theme
