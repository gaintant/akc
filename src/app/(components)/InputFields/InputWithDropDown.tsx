export default function InputWithDropDown(props: any) {
    const listOfDropdown: Array<string> = props.listOfDropdown
    console.log(props)
    return (
        <div className="dropdown">
            <label>{props.label}
                {props.isRequired &&
                    <div className="inline-block"> * </div>
                }
            </label>
            <br></br>
            <select className="border-gray-200 border-4 h-10 rounded-md
             placeholder-gray-400 p-2">
                <option value="" disabled hidden>
                    Select an item
                </option>
                {listOfDropdown.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}