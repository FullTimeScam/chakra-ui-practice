import { Avatar, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const nickname = "No SCAM";

const AvatarComp: FC = () => {
  return (
    <Flex>
      <Avatar name={nickname} src="/images/FundsAreSafu.jpg" />
      <Text fontSize={30} fontWeight="semibold">
        {nickname}
      </Text>
    </Flex>
  );
};

export default AvatarComp;
