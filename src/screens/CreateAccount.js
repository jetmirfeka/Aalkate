import React from 'react';
import {ScrollView, KeyboardAvoidingView, View} from 'react-native';
import CreateAccount from '../components/organisms/CreateAccount';

export default function LoginEmail({navigation}) {
  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} keyboardVerticalOffset={100}>
        <View>
          <CreateAccount navigation={navigation} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
