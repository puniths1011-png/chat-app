import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import { CheckIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user, selectedChat } = ChatState();
  const bubbleBg = useColorModeValue("#BEE3F8", "#2B6CB0");
  const otherBubbleBg = useColorModeValue("#B9F5D0", "#2F855A");
  const textColor = useColorModeValue("black", "white");
  const seenTickColor = useColorModeValue("blue.600", "blue.300");
  const unseenTickColor = useColorModeValue("gray.500", "gray.300");

  const isMessageSeen = (message) => {
    if (selectedChat.isGroupChat) {
      return message.readBy.length > 1; 
    } else {
      const otherUser = selectedChat.users.find((u) => u._id !== user._id);
      return message.readBy.includes(otherUser._id);
    }
  };

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? bubbleBg : otherBubbleBg
                }`,
                color: textColor,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
                position: "relative",
              }}
            >
              {m.content}
              {m.sender._id === user._id && (
                <span style={{ marginLeft: "5px", fontSize: "10px" }}>
                  {isMessageSeen(m) ? (
                    <CheckIcon color={seenTickColor} />
                  ) : (
                    <CheckIcon color={unseenTickColor} />
                  )}
                </span>
              )}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
