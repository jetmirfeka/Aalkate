import React from "react";
import { WebView } from "react-native-webview";

export default function Bestellen() {
  return (
    <WebView
      source={{
        uri: "https://www.app.teburio.de/widget/newBooking?source=widgetPage&locid=wK9ConmGvwNtbkcCc&color=%2339a7df",
      }}
    />
  );
}
