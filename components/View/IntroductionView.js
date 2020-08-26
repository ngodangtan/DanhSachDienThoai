import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { introductionViewStyles } from '../styles/styles';
import Heading from "./heading";
import Content from "./contents"
import Footer from "./footer";
export default class IntroductionView extends Component{
    render(){
        return(
            <View style={introductionViewStyles.container}>
                <Heading message={'Trung Tâm Tin Học'} message1={'Bài tập React Native Danh sách điện thoại'} />
                <Content hoten={'Ngô Đăng Tân'} email={'ngodangtan1994@gmail.com'} />
         
                <Footer tieu_de={'SĐT: 0764267324'} />
            </View>
        )
    }
}