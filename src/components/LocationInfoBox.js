const LocationInfoBox = ({ info }) => {
    return (
        <div className='location-info'>
            <p><strong>Date: </strong>{ info.date }</p>
            <p><strong>ID: </strong>{ info.id }</p>
            <p><strong>Title: </strong>{ info.title }</p>
        </div>
    )
}

export default LocationInfoBox