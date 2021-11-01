import { StyledButton } from "../Styled/Button.style";
import { Flex } from "../Styled/Flex.style";
import { FaGithub, FaLink, FaVuejs } from "react-icons/fa";
import { StyledGlassCardProps } from "styled-components";

interface GlassCardProps extends StyledGlassCardProps {
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  className,
  title,
  icons,
  description,
}) => {
  return (
    <Flex justifyContent="center" direction="column" className={className}>
      <Flex className="box" isResponsive={true}>
        <span></span>
        <div className="content">
          <Flex
            justifyContent="flex-end"
            gap="5px"
            alignItems="center"
            style={{ fill: "red" }}
            isResponsive={true}
          >
            {/* <SiPython fontSize={15} style={{ fill: "black" }} />
            <SiVuedotjs fontSize={15} style={{ fill: "black" }} />
            <SiTypescript fontSize={15} color="red" style={{ fill: "black" }} /> */}
            {icons?.map((icon, index) => (
              <div key={index}>
                {icon}
              </div>
            ))}
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <h2>{title}</h2>
          </Flex>
          <p>{description}</p>
          <Flex justifyContent="space-between" isResponsive={true}>
            <StyledButton
              icon={<FaLink />}
              text="Website"
              reverseShadow={true}
            />
            <StyledButton
              icon={<FaGithub />}
              text="Github"
              reverseShadow={true}
            />
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
};

export default GlassCard;
