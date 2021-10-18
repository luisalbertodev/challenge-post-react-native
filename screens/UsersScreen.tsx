import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";
import { BASE_URL } from "../shared/data";
import { IUsers } from "../shared/models/user.model";

export default ({ navigation }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<IUsers[]>([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${BASE_URL}/users`);
      const dataSource = await res.json();
      setUsers(dataSource);
    } catch (error) {}

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <FlatList
          data={users}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              onPress={() => navigation.navigate("Posts", { user_id: item.id })}
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
