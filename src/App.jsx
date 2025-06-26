import { useState } from 'react';
import Header from './components/Header/header';
import Filter from './components/Filter/filter';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import mockData from './mock/mock-data';
import notImg from './images/404.jpg'

export default function App() {
    const [value, setValue] = useState('');
    const [data, setData] = useState(mockData);
    const [type, setType] = useState('All');
    const [visible, setVisible] = useState(6);
    const updateData = (searchTerm, currentType) => {
        const filteredData = mockData.filter(item => {
            let matchesSearchText = item.title && item.title.toLowerCase().startsWith(searchTerm.toLowerCase());
            let matchesType = (currentType === 'All' || item.type === currentType);
            return matchesSearchText && matchesType;
        });
        setData(filteredData);
        setVisible(6);
    };


    const search = (e) => {
        const searchTerm = e.target.value;
        setValue(searchTerm);
        updateData(searchTerm, type);
    };

    const handleTypeChange = (newType) => {
        setType(newType);
        updateData(value, newType);
        setVisible(6);
    };

    return (
        <>
            <Header value={value} search={search} />
            <Filter setType={handleTypeChange} />
            <hr className='filter-hr container' />
            {data.length ? <Main data={data.slice(0, visible)} /> : <img className='not-found container' src={notImg} alt='404 topilmadi' />}
            {data.length > visible ?
                <button className="show-more" onClick={() => setVisible(visible + 6)}>See More</button>
                : null}
            <Footer />
        </>
    );
}
