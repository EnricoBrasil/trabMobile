import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';


export default function App() {
  const handleOnClick = () =>{
    alert("ola")
  };
  return (
      <SafeAreaView style={styles.bdy}>
        <ScrollView>

        <View style={styles.header}>
          <Image
          source={require('./assets/chocolate.jpg')}
          style={{width:420, height:150}}
          realizeMode="contain"
          />
        </View>
        
          <View style={styles.boxTitulo}>
            <Text style={styles.titulo}>Sobre nós</Text>
          </View>

        
          <View style={styles.boxTexto}>
            <Text style={styles.texto}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>

          <View style={styles.boxTitulo} onPress={handleOnClick}>
            <Text style={styles.titulo}>Nossos Bolos</Text>
          </View>

          <View style={styles.boxTexto}>
          <Image
          source={require('./assets/cenoura.jpg')}
          style={{width:320, height:350, borderTopLeftRadius:30, borderTopRightRadius:30}}
          realizeMode="contain"
          />

          <View>
            <Text style={styles.tituloCard}>Bolo de cenoura</Text>
          </View>

          <View>
            <Text style={styles.tituloCard}>R$ 30,00</Text>
          </View>
          </View>

          <View style={styles.boxTexto}>
          <Image
          source={require('./assets/rosa.jpg')}
          style={{width:320, height:350, borderTopLeftRadius:30, borderTopRightRadius:30}}
          realizeMode="contain"
          />

          <View>
            <Text style={styles.tituloCard}>Bolo Rosa</Text>
          </View>

          <View>
            <Text style={styles.tituloCard}>R$ 55,00</Text>
          </View>
          </View>

          <View style={styles.boxTexto}>
          <Image
          source={require('./assets/estranho.jpg')}
          style={{width:320, height:350, borderTopLeftRadius:30, borderTopRightRadius:30}}
          realizeMode="contain"
          />

          <View>
            <Text style={styles.tituloCard}>Bolo de Festa</Text>
          </View>

          <View>
            <Text style={styles.tituloCard}>R$ 45,00</Text>
          </View>
          </View>

      
          <View style={styles.boxFooter}>
            <Text style={styles.textoFooter}>© 2015-2024 bolodavovo</Text>
          </View>
        
       </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'#F2A7D9',
  },
  
  tituloArea:{
    justifyContent:'center',
    display:'flex',
  },

  boxTitulo:{
    marginTop:'15%',
    marginLeft:110,
    backgroundColor:'#F2A7D9',
    borderRadius:30,
    width:200,
  },
  
  titulo: {
    fontSize:35,
    color:'white',
    textAlign:'center',
    borderRadius:300,
  },

  boxTexto: {
    backgroundColor:'#F2A7D9',
    marginTop:30,
    borderRadius:30,
    width:320,
    height:500,
    marginLeft:50,
  },

  texto: {
    color:'white',
    textAlign:"justify",
    padding:20,
    fontSize:18
  },

  boxFooter: {
    backgroundColor:'#F2A7D9',
    marginTop:40,
  },

  textoFooter: {
    fontSize:20,
    textAlign: 'center',
    padding:20,
    color:'white'
  },

  estiloModal:{
    backgroundColor:'white',
  },

  tituloCard:{
    color:'white',
    fontSize:30,
    marginLeft:5,
  }
});
