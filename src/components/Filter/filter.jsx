import './filter.css';
import { useState } from 'react';

export default function Filter({ setType }) {
    const types = [
        'All', 'Crime', 'Weather', "Desease", 'Tech & Society'
    ];
    const [selectedType, setSelectedType] = useState('All');
    return (
        <div className='filter container'>
            <div className="filter-content">
                {types.map((name, index) => (
                    <p key={index} onClick={() => {
                        setType(name);
                        setSelectedType(name);
                    }} className={name === selectedType ? 'active' : ''}>
                        {name}
                    </p>
                ))}
            </div>
        </div>
    );
}
