import { Path, Svg, SvgProps } from "react-native-svg";

export const EmailIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M18.3333 5.00001C18.3333 4.08334 17.5833 3.33334 16.6666 3.33334H3.33329C2.41663 3.33334 1.66663 4.08334 1.66663 5.00001M18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6666 16.6667H3.33329C2.41663 16.6667 1.66663 15.9167 1.66663 15V5.00001M18.3333 5.00001L9.99996 10.8333L1.66663 5.00001"
        stroke={props.stroke ?? props.color ?? "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
