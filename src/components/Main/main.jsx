import Card from '../Card/card'
import './main.css'
import mockData from '../../mock/mock-data'

export default function Main({ data }) {
    return (
        <main>
            <div className="main-content container">
                {data.map((item) => (
                    <Card key={item.id} mockdata={item} />
                ))}
            </div>
        </main>
    )
}
