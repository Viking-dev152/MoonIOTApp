import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import {useState} from 'react'

const {height, width} = Dimensions.get("window")

export default function Login(props) {

  const [username, setUsername] = useState({value:'anurag.mscint230301001', error:''});
  const [password, setPassword] = useState({value:'an@12345', error:''});

  const handleLogin = async() => {

    try {

      const apiURL = 'https://moonhub.moonpreneur.com/LMSService/api/Account/getUserToken';
      const response = await fetch (apiURL, {


        method: 'POST', headers:{'Content-Type': 'application/json','Security-key': 'IOI2R-RO1WTR-PMQWRT-PRS70-L2TPN',},

        body: JSON.stringify({

          userName: username.value,
          password: password.value,

          iPAddress: '127.0.0.1',

          rememberMe: true


        }),

      });

      if (!response.ok){

        console.error(`http error status: {response.status}`)

      }

      const result = await response.json();

      if (result.statusCode === 200 && result.length>0){

        await AsyncStorage.setItem('loginresponse', JSON.stringify(result));
        console.log(result);

        props.navigation.navigate("drawer")

      }

      else {

        console.error("login failed")

      }

    }

    catch (error) {

      console.error('Error during Login', error);

    }

  }

  return (


    <ScrollView contentContainerStyle = {{alignContent: 'center', paddingBottom: 20}}>

      <View style={styles.container}>

        <Text style = {styles.headerText}>Login</Text>

      </View>

      <View style  ={styles.formContainer}>

        <TextInput placeholder='Email' value = {username.value} onChangeText={(text) => setUsername({value: text, error:''})} error = {!!username.error} errorText = {username.error} keyboardType='email-address' style = {styles.input}/>
        <TextInput placeholder='Password' keyboardType='email-address' value={password.value} onChangeText={(text) => setPassword({value: text, error:''})} error = {!!password.error} errorText = {password.error} secureTextEntry={true} style = {styles.input}/>
      
      </View>

      <TouchableOpacity style = {styles.button} onPress = {handleLogin}> 

        <Text style={{color: 'orange', fontWeight: 'bold'}}>Login</Text>

      </TouchableOpacity>

      <StatusBar style="auto" />

    

    </ScrollView>

  );

}

const styles = StyleSheet.create({
  container: {

    height: height*0.35,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center'

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

  },

  headerText: {

    color: '#345c74',
    fontSize: 35,
    fontWeight: 'bold',
    width: '50%',
    textAlign: 'center',

  },

  formContainer: {

    width:'100%',
    backgroundColor: 'white',
    height: '60%',
    paddingTop: '10%',
    paddingHorizontal: 20,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    marginTop: 30


  }

  

});