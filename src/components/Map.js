import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

// Takes in centerpoint of map, zoom level & location data
const Map = ({ eventData, center, zoom}) => {
    // Uses eventData prop to render fire locations on map
    const markers = eventData.map(marker => {
        if(marker.categories[0].id === 8) {
            return (
                <LocationMarker 
                    key={marker.geometries.date}
                    lat={marker.geometries[0].coordinates[1]} 
                    lng={marker.geometries[0].coordinates[0]}
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