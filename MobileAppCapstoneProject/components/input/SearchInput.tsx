import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Modal,
} from "react-native";
import { useController } from "react-hook-form";
import { Colors } from "@/constants";
import clsx from "clsx";

type SearchInputProps = {
  name: string;
  control: any;
  label: string;
  data: any[];
  key_value: string;
  onPress: any;
  placeholder?: string;
  required?: boolean;
};

const SearchInput = ({
  name,
  control,
  label,
  data,
  key_value,
  onPress,
  placeholder,
  required,
}: SearchInputProps) => {
  const [popupShow, setPopupShow] = useState(false);
  const [curData, setCurData] = useState(data);

  const [filterBoxPos, setFilterBoxPos] = useState("bottom-12");
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: required && `${label} is required!` },
    defaultValue: "",
  });

  const filterData = (value: string) => {
    setCurData(
      data.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setCurData(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <Text>SearchInput</Text>
      <View style={styles.inputBox}>
        <TextInput
          value={field.value}
          placeholder="------"
          placeholderTextColor={"rgba(110, 112, 121, 1.0)"}
          onChangeText={field.onChange}
          onChange={() => filterData(field.value)}
          className="w-full py-3 px-3 text-base text-black-60 rounded-lg border border-primary-30 box-border"
          onFocus={() => setPopupShow(true)}
        />

        <Modal
          visible={popupShow}
          animationType="fade"
          transparent={true}
          onRequestClose={() => {
            setPopupShow(!popupShow);
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={[
                styles.popupContainer,
                { minHeight: curData.length > 0 ? 200 : "auto" },
              ]}
            >
              {curData.length > 0 ? (
                <ScrollView contentContainerStyle={{ width: "100%" }}>
                  {curData.map((item, index) => (
                    <TouchableHighlight
                      key={index}
                      underlayColor={Colors.black[10]}
                      onPress={() => {
                        field.onChange(item[key_value]);
                        onPress(item);
                        setPopupShow(false);
                      }}
                    >
                      <Text style={styles.textCard}>{item.label}</Text>
                    </TouchableHighlight>
                  ))}
                </ScrollView>
              ) : (
                <Text style={styles.textCard}>-- Epmty --</Text>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    rowGap: 4,
  },
  inputBox: {
    position: "relative",
  },
  popupContainer: {
    width: "60%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.black[10],
  },
  textCard: {
    width: "100%",
    padding: 16,
  },
});
