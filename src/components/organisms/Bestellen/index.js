import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Bestellen() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{flex: 1}}>
      <WebView
        onLoad={() => setLoading(false)}
        source={{
          uri: 'https://www.app.teburio.de/widget/newBooking?source=widgetPage&locid=wK9ConmGvwNtbkcCc&color=%2339a7df',
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
