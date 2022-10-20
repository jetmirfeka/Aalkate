import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    marginTop: 25,
    flexDirection: 'column',
  },
  input: {
    color: '#33346D',
    fontSize: 16,
    fontWeight: '500',
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 8,
    height: 50,
  },
  form: {
    marginBottom: 40,
  },
  fullname:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
