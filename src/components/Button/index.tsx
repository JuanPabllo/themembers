import { IButtonProps } from "./interfaces";
import { ButtonElement } from "./styles";

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <ButtonElement {...rest}>{children}</ButtonElement>
);

export default Button;
