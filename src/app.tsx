import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'
import ParticipantInput from './components/participantInput'
import EventInfo from './components/eventInfo'
import ParticipantItem from './components/participantItem'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <EventInfo />
      <ParticipantInput
        onPressHandler={(newParticipant) => console.log(newParticipant)}
      />
      <ScrollView>
        <ParticipantItem name="Mikael Campos Marceniuk" />
        <ParticipantItem name="Nicolas Campos Marceniuk" />
        <ParticipantItem name="Agatha Campos Marceniuk" />
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
