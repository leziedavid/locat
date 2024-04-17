import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { green } from '../../constants/color'

const PaymentDetails = () => {
  return (
    <View style={{flex:1}}>
        <View style={styles.container}>
            <View style={{padding:10, height:250, backgroundColor: green.normal}}></View>
        </View>
    </View>
  )
}

export default PaymentDetails

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})