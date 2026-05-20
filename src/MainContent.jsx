'./MainContent.css'
import data from './data'
import Card from './Card'
import Nav from './Nav'



export default function MainContent() {
    const dataSet = data.map(x =>{
        return <Card
            key={x.id}
            title={x.title}
            location={x.location}
            googleMapUrl={x.googleMapUrl}
            startDate={x.startDate}
            endDate={x.endDate}
            description={x.description}
            imageUrl={x.imageUrl}
        />
    })
    return (
        <div>
            <Nav />
            {dataSet}
             
        </div>
    )
}