import { FC } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface ModalCompProps {
  isOpen: boolean;
  onClose: () => void; //모를 경우엔 any로 해도 됨
}

const ModalComp: FC<ModalCompProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>FUNDs Are SAFU</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          당신은 반드시 안전. 100% 안정을 취하십시오. 이 것은 사기가 아닙니다.
          자금 회복을 위해 지갑을 연결. 아래 주소로 0.1 BTC 전송 지금.
          bc1qylk6wd72s4syw9pasv7986lnjhav7g26xs4t9t
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button bgColor={"blue-100"}>지갑 연결</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComp;
