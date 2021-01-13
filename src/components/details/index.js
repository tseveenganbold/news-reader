import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import NewsCard from "../newsCard/index";
import useStyles from "./styles.js";
import Background from "../background/index";
import HomePage from "../homePage/index";
import Instruction from "../instruction/index";

const Details = ({ articles, activeArticle }) => {
	const classes = useStyles();

	if (!articles.length) {
		return <HomePage />;
	}

	return (
		<>
			<Instruction />
			<Grow in>
				<Grid
					className={classes.container}
					container
					alignItems="stretch"
					spacing={3}
				>
					{articles.map((article, i) => (
						<Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
							<NewsCard article={article} activeArticle={activeArticle} i={i} />
						</Grid>
					))}
				</Grid>
			</Grow>
			<Background />
		</>
	);
};

export default Details;
