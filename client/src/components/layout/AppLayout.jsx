import React from 'react'
import Header from './Header';
import { Grid, } from '@mui/material';
import ChatList from '../specific/ChatList';
import Title from '../shared/Title';
import { useParams } from 'react-router-dom';
import { sampleChats } from '../../constants/sampleData';
import Profile from '../specific/Profile';
const AppLayout = () =>(WrappedComponent)=> {
  return (props)=>{
    const params = useParams();
    const chatId = params.chatId;
    const handleDeleteChat = (e, chatId, groupChat) => {

    }
  return ( 
    <>
        <Title/>
        <Header/>
        {/* {isLoading ? (
          <Skeleton />
        ) : (
          <Drawer open={isMobile} onClose={handleMobileClose}>
            <ChatList
              w="70vw"
              chats={data?.chats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
              newMessagesAlert={newMessagesAlert}
              onlineUsers={onlineUsers}
            />
          </Drawer>
        )} */}

        <Grid container height={"calc(100vh)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          ><ChatList chats={sampleChats} chatId={chatId} 
          handleDeleteChat={handleDeleteChat} />
            {/* {isLoading ? (
              <Skeleton />
            ) : (
              <ChatList
                chats={data?.chats}
                chatId={chatId}
                handleDeleteChat={handleDeleteChat}
                newMessagesAlert={newMessagesAlert}
                onlineUsers={onlineUsers}
              />
            )} */}
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} 
            // chatId={chatId} user={user} 
            />
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
    </>
   );
  };
};

export default AppLayout