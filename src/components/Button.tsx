interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
