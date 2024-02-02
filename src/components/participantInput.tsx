import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

interface IProps {
  onAddHandler: (newParticipante: string) => void
}

const ParticipantInput: React.FC<IProps> = ({ onAddHandler }) => {
  const [nomeParticipante, setNomeParticipante] = useState('')

  const onPressHandler = () => {
    onAddHandler(nomeParticipante)
    setNomeParticipante('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        value={nomeParticipante}
        onChangeText={setNomeParticipante}
      />
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => onPressHandler()}
      >
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
  },
  input: {
    flex: 1,

    height: 56,
    padding: 16,

    backgroundColor: '#1F1E25',
    borderRadius: 5,

    color: '#FFF',
    fontSize: 16,
  },
  btnContainer: {
    width: 56,
    height: 56,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#31CF67',
    borderRadius: 5,
  },
  btnText: {
    color: '#FFF',
    fontSize: 24,
  },
})

export default ParticipantInput
