interface Props {
    addClass?: string,
    type: string
    name: string
    id: string
    title: string
    placeholder?: string | undefined
    value?: string | undefined
    onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<Props> = (props) => {

    const { addClass, type, id, title, placeholder, name, value, onChangeValue } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChangeValue(event)
    }

    return (
        <div className={addClass}>
            <label htmlFor={id} className="text-base text-gray-700 inline-block pb-2">{title}</label>
            <input type={type} id={id} name={name} onChange={handleChange} className="bg-gray-100 w-full focus:outline-none py-2 px-4 rounded" defaultValue={value} placeholder={placeholder} />
        </div>
    )
}

export default InputForm