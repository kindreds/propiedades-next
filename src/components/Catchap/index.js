import React, { useEffect, useState } from "react";

import { Icon } from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/toast";
import { CheckIcon } from "@chakra-ui/icons";
import { FormControl } from "@chakra-ui/form-control";
import { Button, IconButton } from "@chakra-ui/button";
import { Text, Stack, Center } from "@chakra-ui/layout";

import { Flex } from "@chakra-ui/react";
import { BiRefresh } from "react-icons/bi";

const Catchap = ({ onChange = () => {} }) => {
  const toast = useToast();

  const [status, setStatus] = useState(0);
  const [error, setError] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  const isValid = status === 1;

  useEffect(() => {
    generate();
  }, []);

  useEffect(() => {
    onChange(isValid);
  }, [status]);

  const alphabets =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789";

  function generate() {
    const f = alphabets[Math.floor(Math.random() * alphabets.length)];
    const s = alphabets[Math.floor(Math.random() * alphabets.length)];
    const t = alphabets[Math.floor(Math.random() * alphabets.length)];
    const o = alphabets[Math.floor(Math.random() * alphabets.length)];
    const i = alphabets[Math.floor(Math.random() * alphabets.length)];
    const x = alphabets[Math.floor(Math.random() * alphabets.length)];
    const code =
      f.toString() +
      s.toString() +
      t.toString() +
      o.toString() +
      i.toString() +
      x.toString();
    setCaptcha(code);
  }

  function check() {
    setError(false);
    if (userCaptcha === captcha) {
      toast({
        duration: 9000,
        position: "top-right",
        isClosable: true,
        status: "success",
        title: "Captcha valido.",
      });
      setStatus(1);
    } else {
      setStatus(2);
      setError(true);
      toast({
        duration: 9000,
        position: "top-right",
        status: "error",
        isClosable: true,
        title: "Captcha invalido.",
        description: "Codigo invalido, intentalo nuevamente.",
      });
      generate();
    }
  }

  return (
    <Stack w={{ base: "full", sm: "200px" }}>
      <Flex rounded="lg" overflow="hidden">
        <Center h={12} w="full" bgGradient="linear(to-r, green.200, pink.500)">
          <Text
            fontSize="2xl"
            userSelect="none"
            fontStyle="italic"
            letterSpacing="wider"
            textDecoration="line-through"
          >
            {captcha}
          </Text>
        </Center>
        <IconButton
          size="lg"
          rounded="none"
          disabled={isValid}
          colorScheme="blue"
          onClick={generate}
          icon={<Icon as={BiRefresh} fontSize="30px" />}
        />
      </Flex>
      <FormControl isInvalid={error} id="code">
        <Input
          id="code"
          type="text"
          variant="filled"
          autoComplete="off"
          value={userCaptcha}
          disabled={isValid}
          onBlur={() => setError(false)}
          onKeyPress={(e) => e.key === "Enter" && check()}
          onChange={({ target }) => setUserCaptcha(target.value)}
        />
      </FormControl>
      <Button
        onClick={check}
        colorScheme={isValid ? "green" : "blue"}
        disabled={isValid}
        leftIcon={isValid && <CheckIcon />}
        variant={isValid ? "solid" : "outline"}
      >
        {isValid ? "Validado" : "Verificar"}
      </Button>
    </Stack>
  );
};

export default Catchap;
