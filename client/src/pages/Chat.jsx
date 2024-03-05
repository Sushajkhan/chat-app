import Chats from "../components/chat/Chats";
import Sidebar from "../components/chat/Sidebar";

const Chat = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Chats />
    </div>
  );
};

export default Chat;
