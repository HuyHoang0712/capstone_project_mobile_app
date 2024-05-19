import React, { useEffect } from "react";
import clsx from "clsx";
import { View, Text } from "react-native";
import { STATUS } from "@/constants";

interface Props {
  label: number;
  type: string;
}

const StatusCard = (props: Props) => {
  const { label, type } = props;

  let Status: { label: string; value: number }[];

  switch (type) {
    case "employee":
      Status = STATUS.EMPLOYEE_STATUS;
      break;
    case "vehicle":
      Status = STATUS.VEHICLE_STATUS;
      break;
    case "order":
      Status = STATUS.ORDER_STATUS;
      break;
    case "issue-employee":
    case "issue-vehicle":
    case "issue":
      Status = STATUS.ISSUE_STATUS;
      break;
    default:
      Status = [{ label: "Unknown", value: -1 }];
      break;
  }

  return (
    <View
      className={clsx("text-sm px-4 py-1 rounded-lg self-start", {
        "bg-[#32936F]/[.16] text-green": label === 2,
        "bg-secondary-30 text-[#FAA300]": label === 0,
        "bg-[#5570F1]/[.16] text-primary-100": label === 1,
        "bg-red/[.16] text-red": label === 3,
        "bg-black-10/40 text-black-60": label === 4,
      })}
    >
      <Text
        className={clsx("text-sm", {
          "text-green": label === 2,
          "text-[#FAA300]": label === 0,
          "text-primary-100": label === 1,
          "text-red": label === 3,
          "text-black-60": label === 4,
        })}
      >
        {Status.find((item) => item.value === label)?.label}
      </Text>
    </View>
  );
};

export default StatusCard;
