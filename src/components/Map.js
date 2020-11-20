import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

// Takes in centerpoint of map and zoom level
const Map = ({ center, zoom}) => {
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                    <LocationMarker lat={center.lat} lng={center.lng} />
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