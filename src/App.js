import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Details from "./components/details/index";
import wordsToNumbers from "words-to-numbers";
import Background from "./components/background/index";

const alanKey =
	"0380433f24f6c0ccf9d26aa739c3d8a62e956eca572e1d8b807a3e2338fdd0dc/stage";

export default function App() {
	const [newsArticles, setNewsArticles] = useState([]);
	const [activeArticle, setActiveArticle] = useState(-1);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		alanBtn({
			key:
				"f9e91f5068b0e926f9d26aa739c3d8a62e956eca572e1d8b807a3e2338fdd0dc/stage",
			onCommand: ({ command, news, number }) => {
				if (command === "newHeadlines") {
					setNewsArticles(news);
					setActiveArticle(-1);
					console.log(news);
				} else if (command === "instructions") {
					setIsOpen(true);
				} else if (command === "highlight") {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
				} else if (command === "open") {
					const parsedNumber =
						number.length > 2
							? wordsToNumbers(number, { fuzzy: true })
							: number;
					const article = news[parsedNumber - 1];

					if (parsedNumber > news.length) {
						alanBtn().playText("Please try that again...");
					} else if (article) {
						window.open(article.url, "_blank");
						alanBtn().playText("Opening...");
					} else {
						alanBtn().playText("Please try that again...");
					}
				}
			},
		});
	}, []);
	console.log(newsArticles);
	return (
		<>
			<Details articles={newsArticles} activeArticle={activeArticle} />
			<Background />
		</>
	);
}
