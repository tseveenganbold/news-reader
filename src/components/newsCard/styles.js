import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
	media: {
		height: 250,
		opacity: "0.8",
	},
	border: {
		border: "solid",
	},
	fullHeightCard: {
		height: "100%",
	},

	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		borderBottom: "10px solid #25282c",
		backgroundColor: "#25282c",
		color: "white",
		borderRadius: "30px",
	},

	activeCard: {
		borderBottom: "10px solid #22289a",
	},
	grid: {
		display: "flex",
	},
	details: {
		display: "flex",
		justifyContent: "space-between",
		margin: "20px",
		color: "#96a7b3",
	},
	title: {
		padding: "0 16px",
	},
	cardActions: {
		padding: "0 16px 8px 16px",
		display: "flex",
		justifyContent: "space-between",
	},
});
