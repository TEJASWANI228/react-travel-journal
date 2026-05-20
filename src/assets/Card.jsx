import './Card.css'
import location from './location.svg'

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="main--container">
                <img src={props.imageUrl} alt="card-image" className="main-img" />
            </div>
            <div className="info">
                <div className="location">
                    <img src={location} alt="location-icon" className="small-icon" />
                    <h6>{props.location}</h6>
                    <a href={props.googleMapUrl}>View on Google Map</a>
                </div>
                <h2 className="title">{props.title}</h2>
                <h6 className="date">{props.startDate}-{props.endDate}</h6>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}