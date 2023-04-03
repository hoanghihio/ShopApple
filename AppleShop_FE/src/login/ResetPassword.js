import { View, Text, StyleSheet, ScrollView, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import styles from '../styles/StylesResetPassword'

const ResetPassword = ({ navigation }) => {

  const goback = () => {
    navigation.navigate("ForgotPassword")
  }

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={goback}>
          <Image style={{ width: 30, height: 30 }}
            source={require('../../assets/chevron_big_left.png')} />
        </TouchableOpacity>
        <View style={styles.ViewsPassword}>
          <Text style={styles.text}>Create new password</Text>
        </View>
        <View>
          <Text style={{ fontSize: 15, color: '#444444' }}>Enter your new password must be different</Text>
          <Text style={{ fontSize: 15, color: '#444444' }}>from previous used passwords</Text>
        </View>
        <View style={styles.ViewsInput}>
          <View>
            <Text style={styles.textinput}>Enter New Passsword</Text>
            <View style={styles.input}>
              <TextInput style={styles.input1}
              placeholder='Mời bạn nhập mật khẩu mới'/>
            </View>
          </View>
          <View>
            <Text style={styles.textinput}>Confirm Passsword</Text>
            <View style={styles.input}>
              <TextInput style={styles.input1}
              placeholder='Nhập lại mật khẩu mới'/>
            </View>
          </View>
        </View>  
      <View style={{ top: 65 }}>
        <TouchableOpacity style={styles.submit}>
          <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Submit</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default ResetPassword
