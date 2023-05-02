import './blast.module.scss';

interface Props {
    letterClass: string;
    arrayStr: string[];
    indexLetter: number;
}

const Blast = ({ letterClass, arrayStr, indexLetter }: Props) => {
    return (
        <span>
            {arrayStr.map((char, index) => {
                return (
                    <span
                        key={char + index}
                        className={`${letterClass} _${index + indexLetter}`}
                    >
                        {char}
                    </span>
                );
            })}
        </span>
    );
};

export default Blast;
