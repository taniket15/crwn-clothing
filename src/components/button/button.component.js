import "./button.styles.scss";

const Button = ({ children, ...restProps }) => {
  return <button className="button" {...restProps}>{children}</button>;
};

export default Button;
