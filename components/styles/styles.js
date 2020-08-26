
import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const introductionViewStyles = StyleSheet.create({
 
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.maintabcolor,
        justifyContent:"space-between",
        flexDirection:"column"
    }
   
 
 


});

export const contactViewStyles = StyleSheet.create({
 
    container:{
        flex:1,
        backgroundColor:Colors.maintabcolor,
        justifyContent:'center'
    },
    input:{
        height:44,
        paddingHorizontal:6,
        backgroundColor:Colors.white,
        margin: 5,
        borderRadius:5,
        marginLeft:10,
        marginRight:10,
        borderWidth: 1,
        borderColor: 'lightgrey'
    
    },
    input_detail:{
        height:100,
        paddingHorizontal:6,
        backgroundColor:Colors.white,
        margin: 5,
        borderRadius:5,
        marginLeft:10,
        marginRight:10,
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    text_title:{
        color:Colors.black,
        fontSize:16,
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },
    text:{
        color:Colors.white,
        fontSize:16
    },
    button:{
        height:46,
        borderRadius:5,
        margin:5,
        backgroundColor:'#036fa9',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginLeft:10,
        marginRight:10
    }
 
 


});
export const flatlistItemAndroidStyles = StyleSheet.create({
 
    container: {
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
    itemTextTitle: {
        color: "#000000",
        padding: 5,
        fontSize: 14
    },
    itemText: {
        color: "#000000",
        padding: 5,
        fontSize: 14
    }


});
export const flatlistItemIphoneStyles = StyleSheet.create({
 
    container: {
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


});