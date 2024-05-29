import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';


export default function App() {
  return (
      <SafeAreaView style={styles.bdy}>
        <View style={styles.header}>
          <Image
          source={require('./assets/chocolate.jpg')}
          style={{width:420, height:150}}
          realizeMode="contain"
          />
        </View>
        <View>
        <Text style={styles.titulo}>Sobre nós</Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'#F2A7D9',
  },
  bdy: {
    backgroundColor:'#F2A7D9',
  },
  titulo: {
    backgroundColor:'#F2A7D9',
    fontSize:'35px',
    color:'white',
    textAlign:'center',
    marginTop:'40px',
  },
});
