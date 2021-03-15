import React, {useState, useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MoviesTabs from './MoviesTabs';
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageModal from '../components/ImageModal';
import AuthContext from '../contexts/Auth';
import AppDataContext from '../contexts/AppData';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  drawerView: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  userView: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#2e2e2e',
    paddingBottom: 14,
  },
});

export default (props) => {
  const [modalVisible, setModalVisibility] = useState(false);
  const {signOut} = useContext(AuthContext);
  const {refreshData, userData} = useContext(AppDataContext);

  const drawerContent = (
    <View style={styles.drawerView}>
      <View style={styles.userView}>
        <TouchableOpacity
          onPress={() => {
            setModalVisibility(true);
          }}>
          <Image style={styles.image} source={{uri: userData.profilePic}} />
        </TouchableOpacity>
        <View
          style={{
            marginLeft: 14,
            display: 'flex',
            justifyContent: 'space-evenly',
          }}>
          <Text
            style={{
              color: '#fafafa',
              fontSize: 22,
              textAlignVertical: 'center',
            }}>
            Gururu
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fafafa'}}>Não é você? </Text>
            <TouchableOpacity
              onPress={() => {
                signOut();
              }}>
              <Text style={{color: '#fafafa', textDecorationLine: 'underline'}}>
                Sair
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ImageModal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisibility(false);
        }}
        transparent={true}></ImageModal>
    </View>
  );

  const headerOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#0b0b0b',
    },
    headerTitle: () => {
      return (
        <Image
          source={require('../assets/icon05x.png')}
          style={{width: 35, height: 35}}></Image>
      );
    },
    headerTintColor: '#fff',
  };

  const headerRight = (stackNavigation) => {
    return {
      headerRight: (props) => (
        <TouchableOpacity
          style={{
            marginRight: 4,
            paddingHorizontal: 14,
            paddingVertical: 12,
          }}
          onPress={() => stackNavigation.navigate('SearchMovie')}>
          <Icon name="plus" color={props.tintColor} size={20} />
        </TouchableOpacity>
      ),
    };
  };

  const headerLeft = (navigation) => {
    return {
      headerLeft: () => (
        <TouchableOpacity
          style={{paddingHorizontal: 14, paddingVertical: 12}}
          onPress={() => navigation.openDrawer()}>
          <Image
            style={{width: 34, height: 34, borderRadius: 50}}
            source={{uri: userData.profilePic}}
          />
        </TouchableOpacity>
      ),
    };
  };
  return (
    <Drawer.Navigator
      backBehavior="none"
      initialRouteName="MoviesTabs"
      drawerStyle={{backgroundColor: '#1e1e1e'}}
      drawerContent={() => drawerContent}>
      <Drawer.Screen
        name="MoviesTabs"
        component={MoviesTabs}
        options={({navigation}) => {
          return {
            headerShown: true,
            ...headerRight(navigation),
            ...headerOptions,
            ...headerLeft(navigation),
          };
        }}
      />
    </Drawer.Navigator>
  );
};
