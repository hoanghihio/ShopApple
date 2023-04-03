import React, {useEffect, useState} from 'react';
import {ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView, View, StyleSheet, Text, Button, ToastAndroid} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';
import styles from '../styles/StyleProfileScreen';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const ProfileScreen = ({navigation}) => {
  const [avatar, setAvatar] = useState(null);
  const [productId, setProductId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const nextScreen = () => {
    navigation.navigate('EditProfile');
  };

  const nextScreen1 = () => {
    navigation.navigate('MyTabs');
    ToastAndroid.show('Bạn đã đăng xuất thành công', ToastAndroid.SHORT);
  };

  const nextScreen2 = () => {
    navigation.navigate('HomeSupportPage');
  };

  const nextScreen3 = () => {
    navigation.navigate('HomePageScreen');
  };

  const nextScreen4 = () => {
    navigation.navigate('CartOrder', { productId: productId });
  };

  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 0.5,
    };
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('Bạn đã không chụp lại hình ảnh của mình');
      } else if (response.error) {
        console.log('Hình ảnh của bạn bị lỗi: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setAvatar(source);
        if (typeof response.uri === 'object') {
          setAvatar(response.uri.toString());
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <TouchableOpacity onPress={nextScreen3}>
          <Image
            source={require('../../assets/backone.png')}
            style={styles.image1}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.UploadImage}>
        <Image
          source={require('../../assets/phuoc.jpg')}
          style={styles.nameimage}
          onPress={takePhoto}
        />
        <Text style={ {fontSize: 18, color: '#000000', fontWeight: '500',marginBottom:10}}>
          Welcome, Võ Ngọc Phước
        </Text>
        <Text style={{fontSize: 16, color: '#242424',paddingBottom: 5,borderRadius: 15, backgroundColor: '#AEAEAE', padding: 5}}>
          xuanhoanggn@gmail.com
        </Text>
      </View>
      <View style={styles.list}>
        <View style={styles.viewlist}>
          <Text style={styles.acc}>Account</Text>
          <View styles={styles.viewitem}>
            <ListItem
              title="Information"
              leading={<Icon name="account" size={24} />}
              onPress={nextScreen}
            />
            <ListItem
              title="Change Password"
              leading={<Icon name="key" size={24} />}
            />
            <Text style={styles.acc}>Shopping</Text>
            <ListItem 
            title="Payment" 
            leading={<Icon name="atm" size={24} />} 
            />
            <ListItem onPress={nextScreen4}
            title="Cart" 
            leading={<Icon name="cart" size={24} />} 
            />
            <ListItem
              onPress={nextScreen2}
              title="Support"
              leading={<Icon name="car" size={24} />}
            />
            <ListItem
              title="Voucher"
              leading={<Icon name="sale" size={24} />}
            />
          </View>
          <View style={styles.signout}>
            <TouchableOpacity onPress={nextScreen1} >
              <Text style={styles.textSignOut}>
                SignOut
              </Text>
            </TouchableOpacity>
          </View>          
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;