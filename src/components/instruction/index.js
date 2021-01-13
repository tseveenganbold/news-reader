import React from "react";
import Background from "../background/index.js";
import { BackgroundDiv, Transbox, TransboxText } from "./styles.js";

const Instruction = () => {
	return (
		<>
			<BackgroundDiv>
				<Transbox>
					<TransboxText>
						Try saying 'Yes Please' after Alan AI <br />
						asks you if you would like him to <br />
						read the headlines
					</TransboxText>
				</Transbox>
				<Transbox>
					<TransboxText>
						Click the button and try saying <br /> 'Go back'.
					</TransboxText>
				</Transbox>
				<Transbox>
					<TransboxText>
						Click the button and try saying <br />
						'Open the article number 2'
					</TransboxText>
				</Transbox>
			</BackgroundDiv>
		</>
	);
};

export default Instruction;
