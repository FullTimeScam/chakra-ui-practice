import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import Counter from "./components/Counter";
import ModalComp from "./components/ModalComp";
import AvatarComp from "./components/AvatarComp";

const App: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        flexDir="column"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        gap={8}
      >
        <Counter />
        <Button onClick={onOpen}>반드시 클릭, 이 것은 사기가 아닙니다.</Button>
        <AvatarComp />
      </Flex>

      <ModalComp isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
