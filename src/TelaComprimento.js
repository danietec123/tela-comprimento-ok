import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const TelaComprimento = () => { /*item de seleção para o resgistro*/
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const navigation = useNavigation(); /*permite a navegação entra as telas*/

  const handleAdicionar = () => { /*funçao que faz parte do botao adicionar, registra os valores item, altura e peso, para quando eu adicionar ele salva*/
  
  };

  const formatarAltura = (text) => { /*formatação do input, como vai aparecer para o registro*/ 
  const formattedText = text.replace(/\D/g, ''); /*\D/ signiica substitue por numeros */
    return formattedText;
  };

  const formatarPeso = (text) => { /*formatação do input, como vai aparecer para o registro*/ 
    const formattedText = text.replace(/[^0-9.]/g, ''); /*numeros de 0 ate 9, com . e g*/
    return formattedText;
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Ícone de voltar */}
      <Icon name="arrow-left" size={20} color="#000" onPress={() => navigation.goBack()} style={styles.iconBack} />
      </View>
      <Text style={styles.titulo}>Comprimento</Text>
      <View style={styles.imageContainer}>
      <Image
    source={require('../assets/img/comprimento.png')}
    style={{ width:48, height: 50 }} //  largura e altura do imagem do icon
       />

      </View>

      <DropDownPicker
        items={[
          { label: 'Selecione', value: null },
          { label: 'Peso', value: 'Peso' },
          { label: 'Altura', value: 'Altura' }
        ]}
        defaultValue={null}
        placeholder="Selecione"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}
        open={open}
        setOpen={setOpen}
        value={selectedItem}
        setValue={(value) => {
          setSelectedItem(value);
        }}
        zIndex={2000}
        zIndexInverse={2000}
      />

      {selectedItem === 'Altura' && (
        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          value={altura}
          onChangeText={(text) => setAltura(formatarAltura(text))}
          keyboardType="numeric"
          maxLength={5}
        />
      )}

      {selectedItem === 'Peso' && (
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          value={peso}
          onChangeText={(text) => setPeso(formatarPeso(text))}
          keyboardType="numeric"
          maxLength={5}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="Adicionar"
          color='#30cfa9'
          onPress={handleAdicionar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20, // Adicione margem inferior para separar do ícone
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Margem inferior do título
    marginTop: -350, // Margem superior do título, ajustada para alinhar com a borda superior
  },
  imageContainer: {
    marginBottom: 20, // Adicione margem inferior para separar da imagem
  },
  image: {
    width: 88,
    height: 55, // Largura e altura da imagem do ícone
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    backgroundColor: '#ffffe0',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  dropdownMenu: {
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '48%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: { /*botao adicionar*/
    width: '80%',
    marginBottom: 20, // Ajuste a margem inferior conforme necessário
    marginTop: 70, // Mover o botão "Adicionar" um pouco para cima
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#30cfa9',
  },
  iconBack: { // ícone de voltar
    position: 'absolute', // Posicionamento absoluto
    top: -330, // Distância do topo
    left: -185, // Distância da esquerda
  },
});
export default TelaComprimento;
