import {
  ScrollView,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native'
import { registerRootComponent } from 'expo'
import ParticipantInput from './components/participantInput'
import EventInfo from './components/eventInfo'
import ParticipantItem from './components/participantItem'
import { useState } from 'react'

type Participant = {
  id: number
  name: string
}

const App = () => {
  const [participants, setParticipants] = useState<Participant[]>([])

  const addParticipant = (name: string) => {
    if (name == '') {
      ToastAndroid.show('Insira um nome para adicionar.', ToastAndroid.LONG)
      return false
    }

    if (participants.find((p) => p.name == name)) {
      ToastAndroid.show('Participante ja existe.', ToastAndroid.LONG)
      return false
    }

    setParticipants((oldValue) => [
      ...oldValue,
      { id: oldValue.length + 1, name },
    ])

    return true
  }

  const removeParticipant = (id: number) => () => {
    const newValue = [...participants]
    const pIndex = newValue.findIndex((p) => (p.id = id))
    newValue.splice(pIndex, 1)

    setParticipants(newValue)
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <EventInfo />
      <ParticipantInput onAddHandler={addParticipant} />
      <ScrollView>
        {participants.map((p) => (
          <ParticipantItem
            key={p.id}
            onPressHandler={removeParticipant(p.id)}
            {...p}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 26,

    padding: 24,
    paddingTop: 48,

    backgroundColor: '#131016',
  },
})

export default registerRootComponent(App)
