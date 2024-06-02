import React, { useState } from 'react';
import { View, TextInput, Button, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const App = () => {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

  const handleEnviar = () => {
  
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite sua pergunta"
        value={pergunta}
        onChangeText={setPergunta}
        style={styles.input}
      />
      <TextInput
        placeholder="Resposta"
        value={resposta}
        editable={false}
        style={styles.input}
      />
      <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: 0.8,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;