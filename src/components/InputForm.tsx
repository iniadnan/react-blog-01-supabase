interface Props {
    addClass?: string,
    type: string
    name: string
    id: string
    title: string
    placeholder?: string | undefined
    value?: string | undefined
}

function InputForm(props: Props) {
    return (
        <div className={props.addClass}>
            <label htmlFor={props.id} className="text-base text-gray-700 inline-block pb-2">{props.title}</label>
            <input type={props.type} id={props.id} className="bg-gray-100 w-full focus:outline-none py-2 px-4 rounded" defaultValue={props.value} placeholder={props.placeholder} />
        </div>
    )
}

export default InputForm