import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setmessages } from "../../../redux/messageSlice";

const useGetRealTimeMessage = () => {
  const { socket } = useSelector((store) => store.socket);
  const { messages } = useSelector((store) => store.message);
  const dispatch = useDispatch();

  useEffect(() => {
    
    socket?.on("newMessage", (newMessage) => {
      dispatch(setmessages([...messages ,newMessage]));
    });

    // Optional cleanup
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages]);
};

export default useGetRealTimeMessage;
