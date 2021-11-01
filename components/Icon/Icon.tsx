import { StyledIconProps } from "styled-components";
// import {}

interface IconProps extends StyledIconProps {
  className?: string;
}

const Icon: React.FC<IconProps> = ({ className, icon, color, size }) => {
  return <>{icon}</>;
};

export default Icon;
