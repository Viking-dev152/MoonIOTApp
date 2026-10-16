import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import  Home  from '../Screens/Home';
import  Settings  from '../Screens/Settings';
import CustomDrawer from '../Components/CustomDrawer';

const DrawerNavigator = createDrawerNavigator();

export default function Drawer() {
return (
<DrawerNavigator.Navigator
initialRouteName="Home"
drawerContent={(props) => <CustomDrawer {...props} />}
screenOptions={{
drawerActiveBackgroundColor: '#f58084',
drawerActiveTintColor: 'white',
drawerInactiveTintColor: '#f58084',
drawerLabelStyle: {
marginLeft: -25,
fontWeight: 'bold',
},
}}
>
<DrawerNavigator.Screen
name="Home"
component={Home}
initialParams={{ initialRoute: true }}
options={{
headerShown: false,
drawerIcon: ({ color }) => ( <MaterialIcons name="home" size={24} color={color} />
),
}}
/>

  <DrawerNavigator.Screen
    name="Settings"
    component={Settings}
    options={{
      headerShown: false,
      drawerIcon: ({ color }) => (
        <MaterialIcons name="settings" size={24} color={color} />
      ),
    }}
  />
</DrawerNavigator.Navigator>


);
}
