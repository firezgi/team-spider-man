import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
} from "react-native";
import { WP_GET } from "./WPAPI";
import filter from "lodash.filter";

// const data = [
//   { id: "1", title: "First item" },
//   { id: "2", title: "Second item" },
//   { id: "3", title: "Third item" },
//   { id: "4", title: "Fourth item" },
// ];

// const hab=data.map((item,index)=>{
//     return(
//         <Text key={item.id}>
//             {item.title}
//         </Text>
//     )

//     }
//     )
const API_ENDPOINT = `https://randomuser.me/api/?seed=1&page=1&results=20`;

export default function Practice() {
  const [isLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [usersData, setUserData] = useState([]);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    WP_GET("users").then((data) => {
      setUserData(data);
      setFullData(data);

      setIsLoading(false);
    });
    // .catch(err => {
    //     setIsLoading(false);
    //     setError(err);})
  }, []);
  console.log(usersData);
  // useEffect(() => {
  //     setIsLoading(true);

  //     fetch(API_ENDPOINT)
  //       .then(response => response.json())
  //       .then(results => {
  //         setData(results);
  //         setIsLoading(false);
  //       })
  //       .catch(err => {
  //         setIsLoading(false);
  //         setError(err);
  //       });
  //   }, []);

  console.log(Data);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setUsersData(filteredData);
    setQuery(text);
  };

  const contains = ({},query) => {
    const { name } = name;

    if (name.includes(query)) {
        return true;
    }
    return false;
  };
  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
        />
      </View>
    );
  }
  const usersList = usersData.map((item, index) => {
    return (
      <View key={index} style={styles.listItem}>
        <Text>{item.name}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorite Contacts</Text>

      {usersList}

      {renderHeader()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#101010",
    marginTop: 60,
    fontWeight: "700",
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  metaInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10,
  },
});
