import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface IProps {
  id: number
  name: string
  onPressHandler: () => void
}

const ParticipantItem: React.FC<IProps> = ({ name, onPressHandler }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>

      <TouchableOpacity
        style={styles.btnContainer}
        onPress={onPressHandler}
      >
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    marginTop: 8,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  nameContainer: {
    height: '100%',
    padding: 16,

    flex: 1,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
  },
  nameText: {
    color: '#FFF',
    fontSize: 16,
  },
  btnContainer: {
    width: 56,
    height: 56,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#E23C44',
    borderRadius: 5,
  },
  btnText: {
    color: '#FFF',
    fontSize: 24,
  },
})

export default ParticipantItem
