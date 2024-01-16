export const Button = (props) => {
  const buttonStyle = {
    background:props.color,
    height:"50px",
    width:"150px",
    color:"white",
  };
  return (
    <button style={buttonStyle}>{props.text}</button>
  );
};

export default Button;