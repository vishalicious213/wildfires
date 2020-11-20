const LocationInfoBox = ({ info }) => {
    return (
        <div className='location-info'>
            <p><strong>Title: </strong>{ info.title }</p>
            <p><strong>ID: </strong>{ info.id }</p>
            <p><strong>Date: </strong>{ info.date }</p>
        </div>
    )
}

export default LocationInfoBox