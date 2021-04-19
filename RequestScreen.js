import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import MyHeader from '../components/MyHeader'
import {ListItem} from 'react-native-elements'
import db from '../config';
import firebase from 'firebase';

export default class RequestScreen extends Component{
    constructor(){
        super();
        this.state= {
            userId: firebase.auth().currentUser.email,
            barterName: "",
            reasonToRequest: ""
        }

    }

    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }

    addRequest= (barterName,reasonToRequest)=>{
        var userId= this.state.userId
        var randomRequestId= this.createUniqueId()
        db.collection('requested_barter').add({
            "user_id": userId,
            "barter_name": barterName,
            "reason_to_request": reasonToRequest,
            "request_id" : randomRequestId
        })
        this.setState({
            barterName: '',
            reasonToRequet: ''
        })
        return alert("Barter requested Successfully")

    }
    render(){
        return(
            <View style= {{flex: 1}}>
                <MyHeader title= "Request Barter" navigation = {this.props.navigation}/>
                <KeyboardAvoidingView style= {styles.KeyboardStyle}>
                <TextInput
                style= {styles.formTextInput}
                 placeholder={"enter barter name"}
                onChangeText={(text)=>{
                this.setState({
                barterName: text
                })
                }}
                value= {this.state.barterName}
                />

               <TextInput
                style= {[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines= {8}
                placeholder={"why you need this barter"}
                onChangeText={(text)=>{
                this.setState({
                reasonToRequest: text
                })
                }}
                value= {this.state.reasonToRequest}
                />


                    <TouchableOpacity
                    style= {styles.button}
                    onPress={()=>{this.addRequest(this.state.barterName,this.state.reasonToRequest)}}
                    >
                        <Text>Request</Text>
                    </TouchableOpacity>
                    </KeyboardAvoidingView>
                    
            </View>
        )
    }
}

const styles= StyleSheet.create({
    KeyboardStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    formTextInput:{
        width: "75%",
        height:35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius:10,
        borderWidth: 1,
        marginTop:20,
        padding:10

    },

    button:{
        width:300,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "#ff9800",
        shadowColor: "#000",
        ShadowOffset: {
        width:0,
        height:8
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.3,
        elevation: 16,
        padding:10
    },
}) 
