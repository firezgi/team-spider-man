import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { WP_GET } from "./WPAPI";
import ThemeLoggedIn from "./ThemeLoggedIn";

const Search = ({ navigation, setLoggedin }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    WP_GET("members").then((data) => {
      setFilteredDataSource(data);
      setMasterDataSource(data);
    });
  }, []);
  const searchFilterFunction = (text) => {
    
    if (text) {
        const newData = masterDataSource.filter((item) => {
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
        
        <Image
          style={{
            width: 90, 
            height: 90,
            borderWidth: 3,
            borderRadius:10,
            margin: 10}}
          source={{ uri: item.avatar_urls?.full }}
        />
        {item.name.toLowerCase()}
      </Text>
    );
  };
  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + "   Name: " + item.name);
  };

  return (
    <ThemeLoggedIn navigation={navigation} setLoggedin={setLoggedin}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <SearchBar
            containerStyle={styles.searchBar}
            reverseColor={false}
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction("")}
            placeholder="Search members here..."
            value={search}
          />
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ItemView}
          />
        </View>
      </SafeAreaView>
    </ThemeLoggedIn>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: "#fff",
  },
  itemStyle: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontWeight: "bold",
  },
});

export default Search;
