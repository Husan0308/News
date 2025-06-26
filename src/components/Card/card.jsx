import './card.css';

export default function Card({ mockdata }) {
    return (
        <div className="card-info">
            <figure class="snip1418">
                <img src={mockdata.img} alt="sample92"/>
            
                <section>
                    <h3>{mockdata.title}</h3>
                    <hr/>
                    <p>{mockdata.name}</p>
                </section>
            </figure>
        </div>

       


)
}
