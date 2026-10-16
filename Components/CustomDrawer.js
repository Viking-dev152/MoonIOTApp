import { StatusBar } from 'expo-status-bar';
import { BackHandler, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import { useNavigation } from "@react-navigation/native";
import {useRef} from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {Ionicons, MaterialIcons} from '@expo/vector-icons';

export default function CustomDrawer(props) {

    const refrbsheet = useRef();
    const navigation = useNavigation();

  return (

    <View style={styles.container}>

        <DrawerContentScrollView {...props}>

            <TouchableOpacity style = {styles.closeButton} onPress = {() => props.navigation.closeDrawer()}>

                <Ionicons name = "arrow-back-outline" size = {30} color = 'white' />

            </TouchableOpacity>

            <DrawerItemList {...props} />

        </DrawerContentScrollView>

        <View>

            <TouchableOpacity onPress = {async() => {

              props.navigation.closeDrawer();
              navigation.navigate('Login')

            }} style = {styles.option}>

              <MaterialIcons name = "logout" size = {24} color = "#f58084" />
              <Text style = {styles.optionText}>Logout</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {styles.option}>

              <MaterialIcons name = "exit-to-app" size = {24} color = "#f58084" />
              <Text style = {styles.optionText}>Exit</Text>

            </TouchableOpacity>

            <RBSheet ref = {refrbsheet} useNativeDriver = {true} customStyles={{wrapper:{backgroundColor:'transparent'}, draggableIcon: {backgroundColor:'black'}, container:styles.RBSheetContainer}}>

              <View style = {styles.sheetContent}>

                <Text style = {styles.exitText}>Are you sure you want to exit this app?</Text>

                <TouchableOpacity style = {styles.button} onPress = {() => BackHandler.exitApp()}>

                  <Text style = {styles.buttonText}>Yes</Text>

                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress = {() => refrbsheet.current.close()}>

                  <Text style = {styles.buttonText}>No</Text>

                </TouchableOpacity>

              </View>

            </RBSheet>

        </View>

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

  closeButton: {

    width: 40,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#f58084'

  },

  footer:{

    padding:20,
    borderTopWidth: 1,
    borderTopColor: '#CCC',

  },

  option: {

    flexDirection: 'row',
    marginBottom: 10

  },

  optionText: {

    fontWeight: 'bold',
    marginLeft: 5,
    color: '#f58084',
    marginTop: 3,
    fontSize: 14

  },

  RBSheetContainer: {

    backgroundColor: '#f58084',
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    paddingVertical: 30,
    height: '50%'
      
  },

  sheetContent: {

    alignItems: 'center',

  },

  exitText: {

    fontSize: 17,
    textColor: 'white',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'

  },

  button: {

    alignItems: 'center',
    marginTop: 20,
    width: 100,
    paddingVertical: 10,
    borderRadius: 14,
    paddinghorizontal: 10,
    backgroundColor: '#FFF2F2'

  },

  buttonText: {

    color: '#345c74',
    textColor: '#345c74',
    fontWeight: 'bold',
    fontSize: 15,

  }

});