interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className=" py-3 w-[22rem] mt-10 text-white hover:bg-red-700 rounded-md bg-red-600">{text}</button>
    )
}

export default Button;