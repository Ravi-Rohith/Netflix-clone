interface ButtonProps {
    text: string;
    onClick: any
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className=" py-3 w-[20rem] mt-10 text-white hover:bg-red-700 rounded-md bg-red-600">{text}</button>
    )
}

export default Button;