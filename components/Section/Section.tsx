import { Flex } from "../Styled/Flex.style";
import { StyledButton } from "../Styled/Button.style";
import { StyledImage } from "../Styled/Image.style";
import { StyledText } from "../Styled/Text.style";
import Typewriter from "typewriter-effect"
import phoenix from "../../public/images/Portfolio-Banner.svg";

export interface SectionProps {
  className?: string;
}

const Section: React.FC<SectionProps> = ({ className }) => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      className={className}
      equalSections={true}
      gap="10px"
    >
      <div>
        <StyledText fontSize="50px" className="greeting">
          Hi. I'm
        </StyledText>
        <StyledText
          color="orange"
          fontSize="70px"
          fontWeight="700"
          className="name"
        >
          Ahmad Jinadu
        </StyledText>
        <StyledText
          className="job"
          color="orange"
          fontSize="50px"
          fontWeight="700"
        >
          {/* Software Engineer */}
        <Typewriter
          options={{
            strings: ["Software Engineer", "Frontend Engineer", "Fullstack Engineer", "Mobile Engineer", "AI Enthusiast"],
            autoStart: true,
            loop: true,
          }}
        />
        </StyledText>

        
        <StyledText fontSize="35px" className="intro">
          Let's build solutions that would solve real-life problems together.
        </StyledText>
        {/* <h1>Scientist & Super-hero & Smasher of Worlds</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sint
          maxime autem tempore doloribus, assumenda nam optio dolores, qui est
          nihil animi enim magnam! Blanditiis quaerat alias eum molestiae
          repellat. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Earum sint maxime autem tempore doloribus, assumenda nam optio
          dolores, qui est nihil animi enim magnam! Blanditiis quaerat alias eum
          molestiae repellat. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Earum sint maxime autem tempore doloribus, assumenda
          nam optio dolores, qui est nihil animi enim magnam! Blanditiis quaerat
          alias eum molestiae repellat.
        </p> */}
        <Flex equalSections={false} isResponsive={true}>
          <StyledButton
            margin="20px 20px 20px 0px"
            text="Contact Me"
          ></StyledButton>
          <StyledButton
            margin="20px 20px"
            width="160px"
            text="View Portfolio"
          ></StyledButton>
        </Flex>
      </div>
      <StyledImage
        src={phoenix}
        alt="Mock up Image"
        width="1200"
        height="1200"
        className="section-image"
      />
    </Flex>
  );
};

export default Section;
