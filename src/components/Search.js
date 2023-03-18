import {useState} from "react";

function Search({cb = Function.prototype}) {
    const [value, setValue] = useState("");
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    };

    const handleSubmit = () => {
        cb(value)
    };

    return(
        <div>
            <div >
                <input className='form-control' type="search"
                       id="search-field"
                       placeholder="Search..."
                       onKeyDown={handleKey}
                       onChange={(e) => setValue(e.target.value)}
                       value={value}
                />
                <button className="btn btn-outline-success"
                        onClick={handleSubmit}
                >Search
                </button>
            </div>
        </div>
    )
}
export default Search