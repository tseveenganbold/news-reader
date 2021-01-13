import React, { useState } from "react";
import { extend, Canvas } from "react-three-fiber";
import { Text } from "troika-three-text";
import { homePageData } from "./homePageData";
import * as THREE from "three";
import {
	FooterText,
	TryText,
	TextLeftBottom,
	TextLeftTop,
	TextRightTop,
	Canva,
} from "./styles/homePage";

extend({ Text });

const HomePage = () => {
	const [rotation, setRotation] = useState([0, 0, 0, 0]);
	const [opts, setOpts] = useState({
		fontSize: 12,
		color: "#99ccff",
		maxWidth: 200,
		lineHeight: 1,
		letterSpacing: 0,
		textAlign: "justify",
		materialType: "MeshPhongMaterial",
	});
	const onMouseMove = (e) => {
		setRotation([
			((e.clientY / e.target.offsetHeight - 0.2) * -Math.PI) / 8,
			((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
			0,
		]);
	};
	return (
		<>
			<div>
				<TryText>
					Click the mic button on the right <br />
					left corner and try asking:
				</TryText>
				<Canvas
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
					}}
					pixelRatio={window.devicePixelRatio}
					onMouseMove={onMouseMove}
				>
					<text
						position-z={-180}
						rotation={rotation}
						{...opts}
						text={homePageData.text1}
						anchorX="left"
						anchorY="bottom"
					>
						{opts.materialType === "MeshPhongMaterial" ? (
							<meshPhongMaterial attach="material" color={opts.color} />
						) : null}
					</text>

					<pointLight position={[-100, 0, -160]} />
					<pointLight position={[0, 0, -170]} />
					<pointLight position={[100, 0, -160]} />
				</Canvas>
				<Canvas
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
					}}
					pixelRatio={window.devicePixelRatio}
					onMouseMove={onMouseMove}
				>
					<text
						position-z={-180}
						rotation={rotation}
						{...opts}
						text={homePageData.text2}
						anchorX="right"
						anchorY="top"
					>
						{opts.materialType === "MeshPhongMaterial" ? (
							<meshPhongMaterial attach="material" color={opts.color} />
						) : null}
					</text>

					<pointLight position={[-100, 0, -160]} />
					<pointLight position={[0, 0, -170]} />
					<pointLight position={[100, 0, -160]} />
				</Canvas>
			</div>
			<TextRightTop
				href="https://www.linkedin.com/in/tseveendorj-ganbold-603770139/"
				target="_blank"
			>
				LinkedIn
			</TextRightTop>
			<TextLeftTop href="#">News Reader</TextLeftTop>
			<TextLeftBottom href="https://github.com/tseveenganbold" target="_blank">
				Code/Github/
			</TextLeftBottom>
			<FooterText>Made by Tseveendorj Ganbold with ♥</FooterText>
		</>
	);
};

export default HomePage;
