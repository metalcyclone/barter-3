import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, ScrollView, KeyboardAvoidingView, FlatList, Image, TouchableHighlight, Animated, Dimensions } from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import db from '../config';

export default class SwipealeFlatList extends Component{
    constructor(props){
        super(props);
        this.state = {
            allNotifications: this.props.allNotifications
        }
    }

    updateMarkAsRead= (notification)=>{
        db.collection("all_notifications").doc(notification.doc_id).update({
            "notification_status": "read"
        })
    }
    
    onSwipeValueChange= swipeData=>{
        var allNotifications = this.state.allNotifications
        const {key,value}= swipeData;
        if (value<-Dimensions.get('window').width){
            const newData= [...allNotifications];
            const previousIndex= allNotifications.findIndex(item=>item.key===key);
            this.updateMarkAsRead(allNotifications[previousIndex]);
            newData.splice(previousIndex,1);
            this.setState({allNotifications: newData})
        }
    }

    renderItem= data=>(
        <Animated.View>
            <ListItem 
            leftElement= {<Icon name="barter" type= "font-awesome" color="#696969" />}
        title= {data.item.barter_name}
        subtitle= {data.item.message}
        titleStyle= {{color: 'black', fontWeight: 'bold' }}
     
        bottomDivider
        />
        </Animated.View>
    )

    renderHiddenItem= ()=>(
        <View style= {styles.rowBack}>
            <View style= {[styles.backRightButton,styles.backRightbuttonRight]}>
                <Text style= {styles.backTextWhite}></Text>
            </View>
        </View>
    )

    render(){
        return(
          <View style= {styles.container}>
              <SwipeListView 
              disableRightSwipe
              data= {this.state.allNotifications}
              renderItem= {this.renderItem}
              renderHiddenItem= {this.renderHiddenItem}
              rightOpenValue= {-Dimensions.get('window').width}
              previewOpenValue= {-40}
              previewRowKey= {'0'}
              previewOpenDelay= {3000}
              onSwipeValueChange= {this.onSwipeValueChange}
              />

          </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    backTextWhite:{
        color: '#fff',
        fontWeight: 'bold',
        fontSie: 50,
    },
    rowBack:{
        alignItems: 'center',
        backgroundColor: '#29b6f6',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft: 15
    },
    backRightButton:{
        alignItems: 'center',
        bottom: 0,
        justfyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 100
    },
    backRightbuttonRight:{
        backgroundColor: '#29b6f6',
        right: 0
    }
    
})