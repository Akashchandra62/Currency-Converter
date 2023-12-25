import { Stack, VStack, Text, HStack, Input, Select } from "@chakra-ui/react";
import React from "react";

const InputBox = ({
  label,
  options,
  currency,
  setCurrency,
  inputValue,
  setInputValue,
  disabled,
}) => {
  return (
    <VStack
      p={"15px"}
      bgColor={"white"}
      width={"90%"}
      rounded={"10px"}
      display={"flow"}
      justifyContent={"flex-start"}
    >
      <HStack justifyContent={"space-between"} mb={"15px"}>
        <Text textAlign={"left"} color={"grey"}>
          {label}
        </Text>
        <Text textAlign={"left"} color={"grey"}>
          Currency Type
        </Text>
      </HStack>

      <HStack>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          readOnly={disabled}
          color={"black"}
        ></Input>
        <Select
          placeholder="Select option"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {options.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </Select>
      </HStack>
    </VStack>
  );
};

export default InputBox;
