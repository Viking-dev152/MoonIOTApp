import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function Login(props) {

  return (
    
    <View style={styles.container}>

      <Text>Login Screen</Text>

        <TextInput placeholder='Username' keyboardType='email-address' style = {styles.input}/>
        <TextInput placeholder='Password' keyboardType='email-address' secureTextEntry={true} style = {styles.input}/>

        <TouchableOpacity style = {styles.button} onPress = {() => props.navigation.navigate('Drawer')}> 

            <Text style={{color: 'orange', fontWeight: 'bold'}}>Login</Text>

        </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {

    width: '80%',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    marginTop: 10

  },

  button: {

    width: '70%',
    height: 50,
    backgroundColor: 'lightblue',
    marginTop: 10,
    borderWidth : 1,
    borderRadius:5,
    alignItems: 'center',
    justifyContent: 'center'

  }

});