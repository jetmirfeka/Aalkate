import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  centerText: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    marginBottom: 30,
    position: 'relative',
  },
  iconSocial: {
    width: 35,
    height: 35,
    backgroundColor: '#33346D',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 10,
    marginTop: 30,
  },
  itmes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  img: {
    marginRight: 20,
    minWidth: 56,
    width: 56,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.01,
    color: '#000',
    fontWeight: '500',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '75%',
  },
});
