type ButtonProps = {
    text: string;
};

export const ButtonPrimary: React.FC<ButtonProps> = ({ text }) => {
    return (
        <div className="bg-clrPrimary h-fit cursor-pointer text-clrWhite max-w-fit text-lg rounded-2xl font-bold px-6 py-3">
            {text}
        </div>
    );
};

export const ButtonGhost: React.FC<ButtonProps> = ({ text }) => {
    return (
        <div className="bg-transparent h-fit cursor-pointer shadow-inner text-clrWhite max-w-fit rounded-2xl text-lg font-bold px-6 py-3">
            {text}
        </div>
    );
};
