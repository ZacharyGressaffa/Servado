import { StyleSheet, Text, View, Button, FlatList, SectionList, TouchableOpacity, Dimensions, Pressable } from 'react-native'
import React,{ Component } from 'react'
import { useNavigation } from '@react-navigation/core'

import { restaurantData, productData } from '../global/data';
import MenuCard from '../components/MenuCard';
import { colors } from '../global/styles.js';

const SCREEN_WIDTH = Dimensions.get('window').width
//const initialLayout = SCREEN_WIDTH;

export default class MenuScreen extends Component {
  render() {
    const index = this.props.route.params.index
    const {meal,price,foodImages} = restaurantData[index].productData[0]
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <View style ={styles.headerTextView}>
          <Text style ={styles.headerText}>What Do You Want To Eat From?</Text>
        </View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Cart')}}>
          <View style ={styles.cartContainer}>
            <View style ={styles.cartCounterContainer}>
              <Text style ={styles.cartText}>Cart</Text>
                <View style ={styles.cartCounter}>
                  <Text style ={styles.cartNum}>0</Text>
                </View>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <View style ={{flex:1}}>
            <View style ={styles.menuCard}>
              <MenuCard
                screenWidth={SCREEN_WIDTH*.9}
                images={foodImages}
                meal ={meal}
                price ={price}
                onPressMenuCard={()=>{this.props.navigation.navigate("Payment")}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
  }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.yellow,
    alignItems: 'center',
    paddingBottom:50
  },
  cardView: {
    alignItems:'center',
    backgroundColor:colors.white,
    width:'100%',
    borderRadius:30,
  },

  headerText:{
    color:colors.darkBlue,
    fontSize:25,
    fontWeight:"bold",
    
  },
  headerTextView:{
    alignItems:'center',
    width:'100%',
    //backgroundColor:colors.darkBlue,
    paddingVertical:3,
    paddingTop:20
    
  },
  menuCard:{
    marginTop:1,
    paddingBottom:50,

  },
  cartContainer:{
    backgroundColor:colors.darkBlue,
    alignContent:"center",
    marginTop:15,
    marginBottom:5,
    justifyContent:"center",
    borderColor:colors.darkBlue,
    borderWidth:1,
    borderRadius:25,

        
  },

  cartCounterContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  cartText:{
    padding:10,
    fontWeight:"bold",
    fontSize:18,
    color:colors.white,
    marginLeft:25
  },

  cartCounter:{ 
    borderWidth:2,
    marginRight:10,
    borderColor:colors.white,
    borderRadius:6,
    paddingBottom:2,
    marginRight:30
  },

  cartNum:{
    paddingHorizontal:3,
    fontWeight:"bold",
    fontSize:18,
    color:colors.white,
  },
  
})