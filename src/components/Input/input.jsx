import './input.css'
export default function Input({ search, value }) {
    return (
        <div className='input'>
            <form onSubmit={(e)=> e.preventDefault()} >
                <input type="text" value={value} placeholder='Search...' onChange={(e) => search(e)} />
            </form>
        </div>
    )
}
