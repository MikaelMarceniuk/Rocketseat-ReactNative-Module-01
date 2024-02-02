import { View, Text, StyleSheet } from 'react-native'

const EventInfo: React.FC = () => {
  return (
    <View>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
})

export default EventInfo
