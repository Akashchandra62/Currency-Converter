import { useEffect, useState } from "react";
import { Button, Input, Stack, Text, VStack } from "@chakra-ui/react";
import InputBox from "./components/InputBox";

function App() {
  const [currency, setCurrency] = useState("usd");
  const [convertedCurrency, setConvertedCurrency] = useState("usd");
  const [inputValue, setInputValue] = useState("1");
  const [updatedValue, setUpdatedValue] = useState("1");
  const [data, setData] = useState({});

  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setOptions(Object.keys(res[currency]));
        setData(res[currency]);
      });
  }, [currency]);

  const convert = (e) => {
    e.preventDefault();
    setUpdatedValue(inputValue * data[convertedCurrency]);
  };

  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      backgroundColor={"#d0f5ed"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack
        width={"80%"}
        maxW={"500px"}
        // border={"px solid gray"}
        p={"20px"}
        py={"30px"}
        rounded={"10px"}
        backgroundColor={"rgba(177, 196, 200, 0.34)"}
        color={"black"}
      >
        <InputBox
          label="From"
          options={options}
          currency={currency}
          setCurrency={setCurrency}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <InputBox
          label="To"
          options={options}
          currency={convertedCurrency}
          setCurrency={setConvertedCurrency}
          inputValue={updatedValue}
          setInputValue={setUpdatedValue}
          disabled
        />

        <Button w={"90%"} bgColor={"#72c6f7"} onClick={convert}>
          Convert
        </Button>
      </VStack>
    </Stack>
  );
}

export default App;
