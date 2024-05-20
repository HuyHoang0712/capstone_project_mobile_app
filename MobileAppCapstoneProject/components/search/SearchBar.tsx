import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <View style={styles.container} className="rounded-lg shadow-sm">
      <Ionicons
        style={styles.icon}
        name="search"
        size={24}
        color={Colors.black[60]}
      />
      <TextInput
        style={styles.input}
        className="text-base text-black-60 font-normal"
        value={search}
        onChangeText={setSearch}
        placeholder="Search"
        placeholderTextColor={Colors.black[40]}
      />
      {search !== "" && (
        <Ionicons
          style={styles.icon}
          name="close"
          size={20}
          color={Colors.black[60]}
          onPress={() => setSearch("")}
        />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    backgroundColor: "white",
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
  },
});
