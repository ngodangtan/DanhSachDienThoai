import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types'
// Child component

export default class Heading extends Component {
    render() {
        return (
            <View>
                <Text style={style.header}>{this.props.message}</Text>
                <Text style={style.header}>{this.props.message1}</Text>
            </View>
        )
    }
}

Heading.propTypes = {
    message: PropTypes.string,
    message1: PropTypes.string
}
Heading.defaultProps = {
    message: 'Trung Tâm Tin Học',
    message1: 'Ngô Đăng Tân'
}
const style = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 2,
        color: 'red',
        fontWeight:"bold"

    }
})


