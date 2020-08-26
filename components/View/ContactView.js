import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import { contactViewStyles } from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { sendContactInfo } from '../Networking/service'
export default class ContactView extends Component {
    constructor(props) {
        super(props)
        this.state = { HoTen: '', Phone: '', Email: '', Note: '' }
    }
    render() {
        return (
            <View style={contactViewStyles.container}>
                <ScrollView>
                    <View style={{ flex: 2, justifyContent: 'flex-start' }}>
                        <Text style={contactViewStyles.text_title}>
                            Họ tên
                    </Text>
                        <TextInput onChangeText={(HoTen) => this.setState({ HoTen })}
                            value={this.state.HoTen} placeholder="Vui lòng nhập họ tên" style={contactViewStyles.input} />

                        <Text style={contactViewStyles.text_title}>
                            Số điện thoại
                    </Text>
                        <TextInput onChangeText={(Phone) => this.setState({ Phone })}
                            value={this.state.Phone} placeholder="Vui lòng nhập số điện thoại" style={contactViewStyles.input} />

                        <Text style={contactViewStyles.text_title}>
                            Email
                    </Text>
                        <TextInput onChangeText={(Email) => this.setState({ Email })}
                            value={this.state.Email} placeholder="Vui lòng nhập email" style={contactViewStyles.input} />

                        <Text style={contactViewStyles.text_title}>
                            Nội dung cần liên hệ
                    </Text>
                        <TextInput onChangeText={(Note) => this.setState({ Note })}
                            value={this.state.Note} placeholder="Vui lòng nhập nội dung cần liên hệ" style={contactViewStyles.input_detail} />
                        <TouchableOpacity onPress={this.XLNhan.bind(this)} activeOpacity={0.5}>
                            <View style={contactViewStyles.button}>
                                <Text style={contactViewStyles.text}>
                                    Liên Hệ
                        </Text>
                            </View>


                        </TouchableOpacity>

                    </View>


                </ScrollView>


            </View>
        )
    }
    XLNhan() {
        if (this.state.HoTen == "") {
            alert('Vui lòng nhập họ tên !')
            return
        }
        if (this.state.Phone == "") {
            alert('Vui lòng nhập số điện thoại !')
            return

        }
        if (this.state.Email == "") {
            alert('Vui lòng nhập Email !')
            return
        }
        if (this.state.Note == "") {
            alert('Vui lòng nhập nội dung liên hệ')
            return
        }
        const contact_info = {
            name: this.state.HoTen,
            phone: this.state.Phone,
            email: this.state.Email,
            note: this.state.Note
        }
        console.log(contact_info)
        sendContactInfo(contact_info).then((result) => {
            alert(result)
        })

    }
}