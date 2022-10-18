import { StyleSheet } from "react-native";

export default StyleSheet.create({
  itemContainer: {
    backgroundColor: "rgba(226, 232, 255, 0.47)",
    width: "100%",
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    marginLeft: 30,
    flex: 1,
  },
  img: {
    width: '100%'
  },
  imgg: {
    width: '100%',
    height:120
  },
  wraperText: {
    display: "flex",
    flex: 1,
    paddingLeft: 10,
    paddingRight:10,
    flexDirection:'column',
    alignContent:'center',
    height:'100%',
  },
  nameRating: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 5,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight:5
  },
  desc: {
    fontSize: 14,
    color: "white",
    marginBottom: 10,
  },
  price:{
      fontSize:20,
      fontWeight:'bold',
      textAlign:'right',
      color:'white',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
  },
  raitingIcon:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      alignSelf:'flex-end',
      marginBottom:10
  }
});
