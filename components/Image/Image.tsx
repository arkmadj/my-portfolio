import Image from "next/image";

export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
}

const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
}) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default ImageComponent;
