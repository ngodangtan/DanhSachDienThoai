import React, { Component } from "react";
import { View, Text ,StyleSheet} from "react-native";
import PropTypes from 'prop-types'
// Child component
export default class content extends Component {
    render() {
        return (
            <View>
                <Text style={styles.content}>{this.props.hoten}</Text>
                <Text style={styles.content}>{this.props.email}</Text>
            </View>
        )
    }
}

content.propTypes = {
    hoten: PropTypes.string,
    email: PropTypes.string
}
content.defaultProps = {
    hoten: 'Ngô Đăng Tân',
    email: 'Email: ngodangtan1994@gmail.com'
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        fontSize:24,
        color:'green'
    }

});
