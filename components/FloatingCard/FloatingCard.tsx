import { StyledButton } from "../Styled/Button.style";
import { StyledImage } from "../Styled/Image.style";
import { Flex } from "../Styled/Flex.style";

interface FloatingCardProps {
  className?: string;
  imageSrc: string;
  flexDirection?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  className,
  imageSrc,
  flexDirection,
}) => {
  return (
    <Flex
      direction={flexDirection}
      alignItems="center"
      justifyContent="space-between"
      className={className}
      equalSections={true}
    >
      <div className="card-info">
        <h2>Project 1</h2>
        <h1>Avengers Assemble</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est
          cum, perferendis aliquam officiis minima ipsam sequi? Facere, qui
          illum. Iusto eaque suscipit itaque perferendis nostrum tempora ipsa
          tempore optio.
        </p>
        <Flex equalSections={false}>
          <StyledButton
            margin="20px 20px"
            width="160px"
            text="Visit Site"
          ></StyledButton>
          <StyledButton
            margin="20px 20px"
            width="160px"
            text="View Github"
          ></StyledButton>
        </Flex>
      </div>
      <Flex justifyContent="center" className="box-container">
        <div className="box">
          <div className="content">
            <StyledImage
              src={imageSrc}
              alt="Mock up Image"
              className="card-image"
              height="1000"
              width="1000"
            />
            {/* <h2>Card One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              voluptatibus dolorum, doloribus maiores odit sed magnam modi
              architecto aliquid et, quaerat, recusandae atque? Qui ab vero nisi
              ad soluta quia.
            </p> */}
          </div>
        </div>
      </Flex>
    </Flex>
  );
};

export default FloatingCard;
