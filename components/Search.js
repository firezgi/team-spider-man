import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, FlatList, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import { WP_GET } from "./WPAPI";
import ThemeLoggedIn from "./ThemeLoggedIn";

const Search = ({navigation}) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    WP_GET("members").then((data) => {
      setFilteredDataSource(data);
      setMasterDataSource(data);
    });
  }, []);
  // console.log(MasterDataSource);
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter((item) =>{
        const itemData = item.name ? item.name.toLowerCase() : "".toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
      <View style={styles.namePhotoContainer}>
        <Image 
          style={styles.friendImage}
          source={item.avatar_urls.thumb} 
        />
        {item.name.toLowerCase()}
        </View>  
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + "   Name: " + item.name);
  };

  return (
    <ThemeLoggedIn navigation={navigation}>
      <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24}}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          placeholder="Search members here..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>

    </ThemeLoggedIn>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
  friendImage: {
    height: 50,
    width: 50,
    margin: 5,
},
namePhotoContainer: {
  flexDirection: 'row', 
},
});

export default Search;