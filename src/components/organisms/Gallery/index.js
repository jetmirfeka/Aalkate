import React from "react";
import Gallery from "react-native-image-gallery";
import { Modal } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

export default function GalleryImage({modalVisible, closeModal}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <FontAwesome onPress={() =>{closeModal()}} style={{position:'absolute',top:50, right:20, zIndex:1}} name="close" size={24} color="white" />
      <Gallery
        style={{ flex: 1, backgroundColor:'rgba(0, 0, 0, 0.59)' }}
        images={[
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/f3/a3/a4/aalkate.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/f6/05/dd/aalkate.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/f6/05/6a/aalkate.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-o/12/07/d6/29/erholung-pur.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-o/12/07/d5/78/urige-atmosphare.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/bd/38/garnelen-lollys-pikant.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/64/de/f3/aalkate-nachtaufnahme.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-w/1a/f3/85/d3/gastraum.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/27/8d/26/aalkate-fehmarn.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/27/8e/81/aalkate-fehmarn.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-w/1b/d2/30/c8/photo2jpg.jpg" } },
          { source: { uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/ed/cc/81/photo4jpg.jpg" } },
        ]}
      />
    </Modal>
  );
}
