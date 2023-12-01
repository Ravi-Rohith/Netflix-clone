interface InputProps {
    label: string;
    id: string;
    type: string;
    onchange: any;
    value: any;
}


const Input: React.FC<InputProps> = ({ label, id, type, onchange,value }) => {
    return (
        <div className="relative">

            <input id={id} value={value} onChange={onchange} className="username block rounded-md pt-6 pb-1 px-6 w-[20rem] text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer" type={type} placeholder=" " />
            <label htmlFor={id} className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 cursor-text">{label} </label>
        </div>
    );
}
export default Input;