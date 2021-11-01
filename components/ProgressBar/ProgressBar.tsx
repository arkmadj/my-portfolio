import { StyledProgressBarProps } from "styled-components";
import { StyledText } from "../Styled/Text.style";

interface ProgressBarProps extends StyledProgressBarProps {
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  className,
  value,
  radius,
}) => {
  return (
    <div className={className}>
      <div className="percent">
        <svg>
          <circle cx="50%" cy="50%" r={radius}></circle>
          <circle cx="50%" cy="50%" r={radius}></circle>
        </svg>
        <div className="number">
          <h2>
            {value}
            <span>%</span>
          </h2>
        </div>
      </div>
      <StyledText title="Progress" fontSize="15px" />
    </div>
  );
};

export default ProgressBar;
