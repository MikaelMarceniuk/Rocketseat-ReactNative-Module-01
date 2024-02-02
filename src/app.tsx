import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'
import ParticipantInput from './components/participantInput'
import EventInfo from './components/eventInfo'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <EventInfo />
      <ParticipantInput
        onPressHandler={(newParticipant) => console.log(newParticipant)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,

    padding: 24,
    paddingTop: 48,

    backgroundColor: '#131016',
  },
})

export default registerRootComponent(App)
