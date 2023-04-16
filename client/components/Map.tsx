import React, { useEffect, useState } from 'react'

function Map() {
  const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 }
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    async function initMap() {
      const newMap = await new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center,
          zoom: 8,
        }
      )
      setMap(newMap)
    }
    initMap()
  }, [])

  return <div id="map" style={{ height: '500px', width: '100%' }} />
}

export default Map
