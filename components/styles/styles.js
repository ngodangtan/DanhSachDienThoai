
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
    
    },
    input_detail:{
        height:100,
        paddingHorizontal:6,
        backgroundColor:Colors.white,
        margin: 5,
        borderRadius:5,
        marginLeft:10,
        marginRight:10
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