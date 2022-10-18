import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loginOption: {
    width: '100%',
    height: 54,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
