import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

// Takes in centerpoint of map, zoom level & location data
const Map = ({ eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    // Uses eventData prop to render fire locations on map
    const markers = eventData.map(marker => {
        if(marker.categories[0].id === 8) {
            return (
                <LocationMarker 
                    key={marker.id}
                    lat={marker.geometries[0].coordinates[1]} 
                    lng={marker.geometries[0].coordinates[0]}
                    onClick={(() => setLocationInfo({ id: marker.id, title: marker.title,
                        date: marker.geometries[0].date.substring(0, 10) }))}
                />
            )
        }
        return null
    })

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,   // default latitude
        lng: -122.8756  // default longitude
    },
    zoom: 6
}

export default Map