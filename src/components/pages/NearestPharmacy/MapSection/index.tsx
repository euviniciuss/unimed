import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { HStack } from 'native-base'
import MapView, { Marker } from 'react-native-maps'

export type IMarker = {
  id: number
  name: string
  address: string
  latitude: number
  longitude: number
}

export function MapSection() {
  const navigation = useNavigation()

  const [markers, setMarkers] = useState<IMarker[]>([
    {
      id: 1,
      name: 'Farmácia do trabalhador',
      address: 'Rua Gardênia de teste',
      latitude: -2.5180957003210636,
      longitude: -44.209035074256676
    },
    {
      id: 2,
      name: 'Unifarma',
      address: 'Rua teste de teste',
      latitude: -2.51694970949144,
      longitude: -44.20483954808304,
    }
  ])

  return(
    <HStack flex={1} pb={4} mt={4} borderRadius={2}>
      <MapView 
        style={{ flex: 1 }}
        initialRegion={{
          latitude: markers[0].latitude,
          longitude: markers[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {
          markers.map(marker => (
            <Marker 
              key={marker.id}
              coordinate={{
                latitude: marker.latitude, 
                longitude: marker.longitude,
              }}
              onPress={() =>  navigation.navigate('detailsPharmacy', { marker }) }
            />
          ))
        }
      </MapView>
    </HStack>
  )
}