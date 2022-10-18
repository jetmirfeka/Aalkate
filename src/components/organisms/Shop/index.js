import React from "react";
import { WebView } from "react-native-webview";

export default function Shop() {
  return (
    <WebView
      style={{ marginTop: -70 }}
      source={{
        uri: "https://aalkate.com/shop/Ein-Stuck-Fischgeschichte-p382962574",
      }}
    />
  );
}
