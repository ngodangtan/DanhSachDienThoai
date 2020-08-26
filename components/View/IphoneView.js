import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Iphone from '../models/Ios';
import { format_number } from '../Common/Dung_chung';
import { DomainImage } from '../Networking/domain'

export default class IphoneView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            so: 0
        }
    }

    refreshFlatList() {
        this.setState({ so: this.state.so + 1 });
    }
    componentDidMount() {

        fetch('https://servicedatajs.herokuapp.com/Danh_sach_Dien_thoai')
            .then((response) => response.json())
            .then((responseData) => {
                //console.log(responseData);
                Iphone.Iphone = responseData;
                this.refreshFlatList();
            })
            .catch((error) => {
                console.error(error);
            })
    }
    render() {
        if (this.state.so != 0) {
            return (
                <View >

                    <FlatList
                        data={Iphone.Iphone}
                        keyExtractor={(item) => item.Ma_so}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItemIphone item={item} index={index} navigation={this.props.navigation}>
                                </FlatListItemIphone>
                            );
                        }}>
                    </FlatList>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <ActivityIndicator style={{ paddingTop: 100 }} size="large" color="#0000ff" />
                </View>
            )
        }

    }


}

class FlatListItemIphone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            so: 0
        }
    }
    refreshFlatListItem() {
        this.setState({ so: this.state.so + 1 });
    }
    render() {
        return (
            <View style={style.container}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#e5f6ff" }}>
                        <Image style={{ height: 80, width: 120, margin: 5 }} source={{ uri: `${DomainImage}${this.props.item.Ma_so}.png` }} resizeMode='contain'></Image>
                        <View style={{ flex: 1, flexDirection: "column", height: 30 }}>
                            <TouchableOpacity onPress={this.XL_Xuat_thong_tin.bind(this)} activeOpacity={0.5}>
                                <Text style={style.itemText}>{this.props.item.Ten}</Text>
                            </TouchableOpacity>
                            <Text style={style.itemText}>Đơn giá: {format_number(this.props.item.Don_gia_Ban.toString()) + ' VNĐ'}</Text>
                            <Text style={style.itemText}>Đơn giá: {format_number(this.props.item.Don_gia_Nhap.toString()) + ' VNĐ'}</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#e6e5e5" }}></View>
                </View>
            </View>
        );
    }

    XL_Xuat_thong_tin() {
        alert(this.props.item.Ten);
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5f6ff',

    },
    container_search: {
        flex: 1,
        backgroundColor: '#e5f6ff',

    },
    input: {
        height: 44,
        paddingHorizontal: 6,
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 5
    },
    button: {
        height: 46,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#0082c8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    },
    image: {
        height: 160,
        width: 240,
        marginBottom: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    itemText: {
        color: "#000000",
        padding: 5,
        fontSize: 14
    }
})
