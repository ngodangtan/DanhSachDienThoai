import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MyDomainApp, contactAPI,DomainDT,phoneAPI } from './domain';

async function sendContactInfo(params){
    try {
        let response = await fetch(`${MyDomainApp}${contactAPI}`, {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)

        })
        console.log(JSON.stringify({params}))
        let responseJson = await response.json()
        console.log(responseJson)
        return responseJson.message
    } catch (error) {
        console.log(`Error is : ${error}`)
    }
}

async function getListPhone(){
    try {
        let response = await fetch(`${DomainDT}${phoneAPI}`, {
       
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            

        })
        console.log(response)
        let responseJson = await response.json()
        console.log(responseJson)
        return responseJson
    } catch (error) {
        console.log(`Error is : ${error}`)
    }
}

export {sendContactInfo}
export {getListPhone}