import { useEffect, useState } from 'react'

function Map() {
  const center: google.maps.LatLngLiteral = {
    lat: -36.86462674976452,
    lng: 174.77603170364966,
  }
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    async function initMap() {
      const newMap = await new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center,
          zoom: 18,
        }
      )
      const marker = new google.maps.Marker({ position: center, map: newMap })
      setMap(newMap)
    }
    // const script = document.createElement('script')
    // script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDqnrwPtVodXJxOUQ_OqFnDn2fTs3wrY4k&callback=initMap`
    // script.async = true
    // document.body.appendChild(script)

    // return () => {
    //   document.body.removeChild(script)
    // }
    initMap()
  }, [])

  return (
    // <div className="h-full w-full float-right ">
    <div id="map" className="w-1/4 h-40" />
    // {/* </div> */}
  )
}

export default Map
