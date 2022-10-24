import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Shop() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{flex: 1}}>
      <WebView
        onLoad={() => setLoading(false)}
        style={{marginTop: -70}}
        source={{
          uri: 'https://aalkate.com/shop/Ein-Stuck-Fischgeschichte-p382962574',
        }}
      />
      {loading && (
        <ActivityIndicator
          style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
          size="large"
        />
      )}
    </View>
  );
}
