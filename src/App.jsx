import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Signup';
import Homepage from './components/Homepage/Homepage';
import Ragister from './components/Ragister';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { io } from 'socket.io-client';
import { setSocket } from '../redux/socketSlice';
import { setOnlineUser } from '../redux/userSlice';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
 const persist=persistStore(store)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/Ragister',
    element: <Ragister />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function AppContent() {
  const { authUser } = useSelector((store) => store.user);
  const { Socket } = useSelector((store) => store.socket)

  const dispatch=useDispatch()
  useEffect(() => {
    if (authUser) {
      const newSocket = io('http://localhost:8080', {
        query: {
          userId: authUser._id,
        },
      });

      console.log("✅ Connected to server", newSocket);

      dispatch(setSocket(newSocket));
      setSocket(newSocket);

      // ✅ Use `newSocket`, not stale `socket`
      newSocket.on("getonlineuser", (onlineUsers) => {
        console.log("Online users:", onlineUsers);
        dispatch(setOnlineUser(onlineUsers));
      });

      // optional cleanup
      return () => {
        newSocket.disconnect();
      };
    } else{
      if(Socket){
        Socket.close()
        dispatch(setOnlineUser(null))

      }
    }
  }, [authUser]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}></PersistGate>
      <div className="App">
        <AppContent />
      </div>
    </Provider>
  );
}

export default App;
