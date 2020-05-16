import React from 'react';
import { View } from 'react-native';

const cards = {
    cardPadrao1: {
        width: 150, 
        height: 170, 
        backgroundColor: '#9370db', 
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'flex-start',
        alignSelf: 'flex-end'
    },

    cardPadrao2: {
        width: 150, 
        height: 170, 
        backgroundColor: 'gold', 
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'flex-start',
        alignSelf: 'flex-end'
    },

    cardLongo1: {
        width: 150, 
        height: 210, 
        backgroundColor: '#9370db', 
        borderRadius: 10, 
        marginVertical: 10,
    },

    cardLongo2: {
        width: 150, 
        height: 210, 
        backgroundColor: 'gold', 
        borderRadius: 10, 
        marginVertical: 10,
    }
            

}

export default cards;