import React from 'react';
import {ScrollView, KeyboardAvoidingView, View} from 'react-native';
import LoginWithEmail from '../components/organisms/LoginWithEmail';

export default function LoginEmail({navigation}) {
  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} keyboardVerticalOffset={100}>
        <View>
          <LoginWithEmail navigation={navigation} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
