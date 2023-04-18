import { useCallback, useEffect, useState } from 'react'

interface MapProps {
  address: string
}

function Map({ address }: MapProps) {
  const [map, setMap] = useState<google.maps.Map>()
  const [userLocation, setUserLocation] = useState<google.maps.LatLng>()
  const cachedInitMap = useCallback(initMap, [address, userLocation])
  useEffect(() => {
    cachedInitMap()
  }, [])

  async function initMap() {
    const directionsService = new google.maps.DirectionsService()
    const directionsRenderer = new google.maps.DirectionsRenderer()
    const geocoder = new google.maps.Geocoder()

    // Request user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation(() => new google.maps.LatLng(latitude, longitude))
        },
        (error) => {
          console.error('Error getting user location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }

    // Geocode the specified address
    geocoder.geocode({ address: address }, function (results, status) {
      if (status === 'OK' && results !== null) {
        const center = results[0].geometry.location

        // Create new map centered on the user's location (if available)
        const newMap = new google.maps.Map(
          document.getElementById('map') as HTMLElement,
          {
            center: userLocation ?? center,
            zoom: 18,
          }
        )

        // Add marker for the specified address
        const addressMarker = new google.maps.Marker({
          position: center,
          map: newMap,
        })

        // Render directions from user's location (if available) to specified address
        if (userLocation) {
          directionsService.route(
            {
              origin: userLocation,
              destination: center,
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
              if (status === 'OK') {
                directionsRenderer.setDirections(result)
                directionsRenderer.setMap(newMap)
              } else {
                console.error('Error rendering directions:', status, result)
              }
            }
          )
        }

        setMap(newMap)
      } else {
        console.error(
          'Geocode was not successful for the following reason: ' + status
        )
      }
    })
  }
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
