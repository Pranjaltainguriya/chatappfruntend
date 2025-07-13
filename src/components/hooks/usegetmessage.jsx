import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setmessages } from '../../../redux/messageSlice';

const useGetMessage = () => {
  const { selectedUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser || !selectedUser._id) return;

      try {
        console.log(selectedUser._id);
        const res = await axios.get(
          `http://localhost:8080/api/massage/get/${selectedUser._id}`
         ,{ withCredentials: true}
        );
        console.log("Here are all messages:", res.data);
        dispatch(setmessages(res.data));
      } catch (error) {
        console.error("Error fetching messages:", error?.response?.data || error.message);
      }
    };

    fetchMessages();
  }, [selectedUser]);
};

export default useGetMessage;
