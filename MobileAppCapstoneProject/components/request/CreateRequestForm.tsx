import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { Colors } from "@/constants";
import clsx from "clsx";
import FormInput from "../input/FormInput";
import SearchInput from "../input/SearchInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateIssueMutation } from "@/redux/features/request/requestApiSlice";
import SolidButton from "../button/SolidButton";
import { REQUEST_LABELS } from "@/constants";
import { SecureStoreService } from "@/utils/SecureStore.service";
type Inputs = {
  title: string;
  label: string;
  description: string;
  cost?: number;
};

type CreateRequestFormProps = {
  formProps: any;
  setShowModal: (showModal: boolean) => void;
};

const CreateRequestForm = ({
  formProps: vehicle,
  setShowModal,
}: CreateRequestFormProps) => {
  const [requestType, setRequestType] = useState(0);
  const [createIssue] = useCreateIssueMutation();
  const { control, handleSubmit, setValue } = useForm<Inputs>({ mode: "all" });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const user_id = SecureStoreService.getUserId();
    const rq_data: { [key: string]: any } = { ...data };
    if (requestType === 1) {
      rq_data["vehicle_id"] = vehicle;
    }
    console.log(vehicle);
    
    console.log(rq_data);

    await createIssue({
      data: rq_data,
      type: requestType === 0 ? "employee" : "vehicle",
    })
      .unwrap()
      .then(() => {
        Alert.alert("Request added successfully!");
        setShowModal(false);
      })
      .catch((error) => Alert.alert(error.data.detail));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => setRequestType(0)}
          style={[
            {
              borderBottomWidth: requestType === 0 ? 2 : 0,
              borderColor:
                requestType === 0 ? Colors.primary[100] : "transparent",
            },
            styles.controlBtn,
          ]}
        >
          <Text
            className={clsx("text-base text-black-40 font-medium", {
              "text-primary-100": requestType === 0,
            })}
          >
            Employee
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setRequestType(1)}
          style={[
            {
              borderBottomWidth: requestType === 1 ? 2 : 0,
              borderColor:
                requestType === 1 ? Colors.primary[100] : "transparent",
            },
            styles.controlBtn,
          ]}
        >
          <Text
            className={clsx("text-base text-black-40 font-medium", {
              "text-primary-100": requestType === 1,
            })}
          >
            Vehicle
          </Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <FormInput
          name="title"
          control={control}
          placeholder="Request title"
          label="Request Title*"
          required={true}
        />
        <SearchInput
          name="label"
          control={control}
          label="Label*"
          data={
            REQUEST_LABELS[
              requestType === 0
                ? "EMPLOYEE_REQUEST_LABELS"
                : "VEHICLE_REQUEST_LABELS"
            ]
          }
          key_value="label"
          onPress={(request: any) => {
            setValue("label", request.label);
          }}
          required={true}
        />
        <FormInput
          name="description"
          control={control}
          placeholder=""
          label="Description*"
          required={true}
          multiline={true}
        />
        {requestType === 1 && (
          <FormInput
            name="cost"
            control={control}
            type="number"
            label="Cost*"
            required={true}
            rightIcon="wallet"
          />
        )}
        <SolidButton title="Add Request" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </View>
  );
};

export default CreateRequestForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  controlBtn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  content: {
    marginTop: 20,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    paddingBottom: 20,
  },
});
