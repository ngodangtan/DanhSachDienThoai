import React, { Component } from "react";
import { View, Text ,StyleSheet} from "react-native";
import PropTypes from 'prop-types'
// Child component
export default class Footer extends Component {
    render() {
        return (
            <View>
                <Text style={styles.tieu_de_footer}>{this.props.tieu_de}</Text>
            </View>
        )
    }
}

Footer.propTypes = {
    tieu_de: PropTypes.string
}
Footer.defaultProps = {
    tieu_de: 'ngodangtan1994@gmail.com'
}

const styles = StyleSheet.create({
    tieu_de_footer: {
        alignItems: 'center',
        fontSize:18,
        
        
    }

});
