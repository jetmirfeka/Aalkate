import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        display:'flex',
        width:'100%',
        paddingHorizontal:10
    },
    label:{
        display:'flex',
        width:'100%',
        fontSize:12,
        color:'#868686',
        marginTop:15
    },
    input:{
        color:"#33346D",
        fontSize:16,
        fontWeight:'500',
        borderBottomColor:'#F3F2F2',
        borderBottomWidth:1,
        paddingVertical:10,
        marginBottom:40
    },

    creatAcc:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    dontAcc:{
        fontSize:14,
        fontWeight:'600',
        color:"#33346D"
    },
    createAccText:{
        fontSize:14,
        fontWeight:'600',
        color:"#FF8906"
    }

})