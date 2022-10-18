import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    img:{
        height: '100%',
        width: '100%',
        position:'absolute'
    },
    wrapper:{
        top:0,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        justifyContent:'center',
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:30
    },
    logo:{
        alignSelf:'center',
        width:296,
        height:165,
        marginBottom:80
    },
})