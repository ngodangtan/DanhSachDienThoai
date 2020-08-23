import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View,Image } from 'react-native';
const Tab = createBottomTabNavigator();
import AndroidView from './AndroidPhoneView'
import IphoneView from './IphoneView'
import ContactView from './ContactView'
import IntroductionView from './IntroductionView'
const backgroundColor = "#0067a7";
export default class MainTabView extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="IntroductionView"
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}


                >
                    <Tab.Screen name="IntroductionView" component={IntroductionView}
                        options={{
                            tabBarIcon: () => {
                                return <Image
                                    source={require(`../icons/info.png`)}
                                    style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                            },
                            title: "Giới thiệu"
                        }}
                    />
                    <Tab.Screen name="AndroidView" component={AndroidView}
                        options={{
                            tabBarIcon: () => {
                                return <Image
                                    source={require(`../icons/android.png`)}
                                    style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                            },
                            title: "Android"
                        }}
                    />

                    <Tab.Screen name="IphoneView" component={IphoneView}
                        options={{
                            tabBarIcon: () => {
                                return <Image
                                    source={require(`../icons/ios.png`)}
                                    style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                            },
                            title: "Iphone"
                        }}
                    />


                    <Tab.Screen name="ContactView" component={ContactView}
                        options={{
                            tabBarIcon: () => {
                                return <Image
                                    source={require(`../icons/contact.png`)}
                                    style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                            },
                            title: "Liên hệ"
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}