import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";
import { BASE_URL } from "../shared/data";
import { IPosts } from "../shared/models/post.model";

export default ({ navigation }) => {
  const userId = navigation.getParam("user_id");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPosts[]>([]);

  const fetchPosts = useCallback(async () => {
    if (userId) {
      try {
        const res = await fetch(`${BASE_URL}/posts?userId=${userId}`);
        const dataSource = await res.json();
        setPosts(dataSource);
      } catch (error) {}

      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <View style={styles.container}>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <FlatList
          data={posts}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() =>
                navigation.navigate("Detail", {
                  title: item.title,
                  body: item.body,
                })
              }
            />
          )}
          style={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});
