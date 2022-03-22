import type { NextPage } from "next";
import { Flex } from "../components/Styled/Flex.style";
import { StyledSection } from "../components/Styled/Section.style";
import { StyledGlassCard } from "../components/Styled/GlassCard.style";
import { StyledText } from "../components/Styled/Text.style";
import { StyledSkillCard } from "../components/Styled/SkillCard.style";
import {
	SiRedux,
	SiReact,
	SiPython,
	SiTypescript,
	SiVuedotjs,
	SiNextdotjs,
	SiAdonisjs,
	SiJavascript,
	SiTailwindcss,
	SiStyledcomponents,
	SiVuetify,
	SiStrapi,
} from "react-icons/si";
import { appTheme } from "../theme/theme";

const Home: NextPage = () => {
	const glassCardData = [
		{
			key: 1,
			title: "Shara Mobile App",
			description:
				"Shara is a  mobile application help merchants grow their business and increase their sales by offering Shara financing to their most trusted customers.",
			icons: [
				<SiReact fill="black" />,
				<SiTailwindcss fill="black" />,
				<SiTypescript fill="black" />,
				<SiRedux fill="black" />,
			],
			websiteLink: "https://shara.co/",
		},
		{
			key: 2,
			title: "Crypto Wallet",
			description:
				"This is a crypto wallet application I created for practice. This allows users to buy and sell cryptocurrencies. It also keeps track of the values and exchange rates of the various cryptocurrencies and transactions they have made on the platform.",
			icons: [
				<SiNextdotjs fill="black" />,
				<SiTypescript fill="black" />,
				<SiTailwindcss fill="black" />,
				<SiRedux fill="black" />,
			],
		},
		{
			key: 3,
			title: "Personal Portfolio",
			description:
				"This is something I started working on at a later stage of my career. It’s fun to look at the various ways I can present my and also evaluate my growth as an engineer. This is a project I would really love to focus on expanding and improving in the future.",
			icons: [
				<SiNextdotjs fill="black" />,
				<SiTypescript fill="black" />,
				<SiStyledcomponents fill="black" />,
			],
		},
		{
			key: 4,
			title: "Game Store",
			description:
				"This is a web application where users buy video games online. The admin side of the application has a dashboard where the admin can keep track of activities on the application. Activities like orders, sales performance for a game or platform, etc can be tracked.",
			icons: [
				<SiVuetify fill="black" />,
				<SiAdonisjs fill="black" />,
				<SiJavascript fill="black" />,
			],
		},
		{
			key: 5,
			title: "Art Portfolio",
			description:
				"I’m a bit of an artist myself. This art portfolio is a showcase of my various artworks. It includes some artistic ways of blending website developer and art. It has similar structure to my personal portfolio.",
			icons: [
				<SiReact fill="black" />,
				<SiStyledcomponents fill="black" />,
				<SiTypescript fill="black" />,
			],
		},
		{
			key: 6,
			title: "Game Tracker",
			description:
				"This is an application where users keep track of their in-game stats of various games. Users can track other activities like the uptime of a particular session, the number of hours spent on a particular game. There are also leaderboards for various in-game stats.",
			icons: [
				<SiReact fill="black" />,
				<SiStyledcomponents fill="black" />,
				<SiTypescript fill="black" />,
				<SiStrapi fill="black" />,
			],
		},
	];

	const skillCardData = [
		{
			key: 1,
			title: "React",
			description:
				"I’ve been building web applications using React for more than 4 years. I’ve always enjoyed the innovative ways I can build React projects faster and more efficiently. Over the years, I’ve learned about ReactNative, styled-components, TailwindCSS, Headless-UI and much more.",
			icon: <SiReact />,
			iconBackground: "#61DAFB",
			value: 90,
		},
		{
			key: 2,
			title: "Vue",
			description:
				"Sometimes, React can be a bit overwhelming. I’ve always admired VueJS for its simplicity and beginner-friendliness. I’ve built a lot of powerful applications using VueJS. I also enjoy using frameworks like Nuxt, NativescriptVue and Vuetify for my Vue projects.",
			icon: <SiVuedotjs />,
			iconBackground: "#42B983",
			value: 85,
		},
		{
			key: 3,
			title: "Typescript",
			description:
				"With my background with strongly typed languages like C++ and Java. The switch from Javascript to Typescript felt natural. I’ve always enjoyed the additional syntax that enables faster errors-handling.",
			icon: <SiTypescript />,
			iconBackground: "#3178C6",
			value: 86,
		},
		{
			key: 4,
			title: "Redux",
			description:
				"Redux is one of my favorite state management libraries. With the advent of the Redux Toolkit, I’ve been able to maintain standard practice across my projects. It also helps speed up development.",
			icon: <SiRedux />,
			iconBackground: "#764ABC",
			value: 85,
		},
		{
			key: 5,
			title: "Next",
			description:
				"Next is probably my favorite React framework. It gives a smooth developer experience to bring react applications into production. My favorite features of Next are its built-in file-system routing, internationalization, and zero-config for automatic compilation.",
			icon: <SiNextdotjs />,
			iconBackground: "#000",
			value: 85,
		},
		{
			key: 6,
			title: "Python",
			description:
				"Python is one of the first programming languages I learned. During my Computer Science degree, I used python for most of my projects. Python’s convenience has made it my go-to language for my machine learning and artificial intelligence projects.",
			icon: <SiPython />,
			iconBackground: "#234A6B",
			value: 85,
		},
	];
	return (
		<div>
			<StyledSection />
			<Flex
				justifyContent="center"
				direction="column"
				background={appTheme.colors.dark}
			>
				<Flex justifyContent="center" margin="100px 0px 20px 0px">
					<StyledText
						fontSize="50px"
						color="orange"
						fontWeight="700"
						isUnderlined={true}
					>
						My Skills
					</StyledText>
				</Flex>
				<Flex justifyContent="center" margin="10px 0px 50px 0px">
					<StyledText
						fontSize="1em"
						color="orange"
						fontWeight="300"
						isItalized={true}
						textAlign="center"
					>
						"from one thing, know ten thousand things"
					</StyledText>
				</Flex>
				<Flex
					justifyContent="space-between"
					flexWrap="wrap"
					gap="70px"
					width="1200px"
					margin="0px auto 150px auto"
					alignItems="center"
				>
					{skillCardData.map((data, index) => (
						<StyledSkillCard
							key={index}
							title={data.title}
							description={data.description}
							icon={data.icon}
							iconBackground={data.iconBackground}
							value={data.value}
							progressRadius={40}
						/>
					))}
				</Flex>
			</Flex>
			<Flex
				justifyContent="center"
				direction="column"
				background={appTheme.colors.darker}
				padding="0px 20px"
			>
				<Flex justifyContent="center" margin="100px 0px 20px 0px">
					<StyledText
						fontSize="50px"
						color="orange"
						fontWeight="700"
						isUnderlined={true}
					>
						What I've Done
					</StyledText>
				</Flex>
				<Flex justifyContent="center" margin="10px 0px 100px 0px">
					<StyledText
						fontSize="1em"
						color="orange"
						fontWeight="300"
						isItalized={true}
						textAlign="center"
					>
						“The true science of martial arts means practicing them in such a
						way that they will be useful at any time, and to teach them in such
						a way that they will be useful in all things.”
					</StyledText>
				</Flex>
				<Flex
					justifyContent="space-evenly"
					flexWrap="wrap"
					gap="100px"
					width="1500px"
					margin="0px 0px 150px 0px"
				>
					{glassCardData.map((data, index) => (
						<StyledGlassCard
							key={index}
							title={data.title}
							description={data.description}
							icons={data.icons}
							websiteLink={data?.websiteLink}
						/>
					))}
				</Flex>
			</Flex>
		</div>
	);
};

export default Home;
