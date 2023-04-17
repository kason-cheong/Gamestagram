import { useEffect, useState } from 'react'

interface MapProps {
  address: string
}

function Map({ address }: MapProps) {
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    async function initMap() {
      const geocoder = new google.maps.Geocoder()
      geocoder.geocode({ address: address }, function (results, status) {
        if (status === 'OK' && results !== null) {
          const center = results[0].geometry.location
          const newMap = new google.maps.Map(
            document.getElementById('map') as HTMLElement,
            {
              center,
              zoom: 18,
            }
          )
          const marker = new google.maps.Marker({
            position: center,
            map: newMap,
          })
          setMap(newMap)
        } else {
          console.error(
            'Geocode was not successful for the following reason: ' + status
          )
        }
      })
    }
    initMap()
  }, [address])

  return <div id="map" className="w-1/4 h-40" />
}

export default Map

// const center: google.maps.LatLngLiteral = {
//   lat: -36.86462674976452,
//   lng: 174.77603170364966,
// }

// const containerStyle = {
//   width: '400px',
//   height: '400px',
// }

// return (
//   <LoadScript googleMapsApiKey="YAIzaSyDqnrwPtVodXJxOUQ_OqFnDn2fTs3wrY4k">
//     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   </LoadScript>
// )
