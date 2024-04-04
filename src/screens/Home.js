import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({navigation}) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const item = { 
    id: 1,
    title:"Opens Arms (feat. Travis Scott)",
    group:"SZA",
    album_image:"https://upload.wikimedia.org/wikipedia/pt/c/c8/SZA_-_SOS.png",
    year: 2022,
    genre: "Hip hop, Música pop, R&B contemporâneo"
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212"/>
      <Text style={styles.title}>Minhas Músicas</Text>
      <MusicItem 
      isPlaying={()=> currentPlaying== item.id} 
        music={item} 
        navigation={navigation} 
        onPlayPause={() => {}}
      />
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 16,
  },
  title: {
    fontSize: 36,
    fontWeight:"bold",
    color: "#fff",
    marginBottom: 20,
    marginLeft: 20,
  },
})
