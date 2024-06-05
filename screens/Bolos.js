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
        

       </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'#F2A7D9',
  },
 
});
