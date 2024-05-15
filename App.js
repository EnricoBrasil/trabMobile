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
          <Text></Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'',
  },
  bdy: {
    backgroundColor:'pink',
  }
});
