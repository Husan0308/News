import './header.css';
import Input from '../Input/input.jsx';

export default function Header({search, value}) {
    return (
        <header>
            <div className='header container'>
                <h1>NEWS</h1>
                <Input search={search} value={value} />
            </div>
        </header>
    )
}