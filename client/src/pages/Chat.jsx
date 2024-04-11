import React from 'react'
import { useRef } from 'react';
import { Fragment } from 'react';
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Skeleton, Stack } from "@mui/material";  
import { grayColor, orange } from "../constants/color";
  import {
    AttachFile as AttachFileIcon,
    Send as SendIcon,
} from "@mui/icons-material";
import FileMenu from "../components/dialogs/FileMenu";
// import MessageComponent from "../components/shared/MessageComponent";
import { InputBox } from "../components/styles/StyledComponents";
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';
// import { useNavigate } from "react-router-dom";
const Chat = () => {
  const containerRef = useRef(null);
  const user = {
    _id:"sdjskjf",
    name:"Suhani Gupta" 
  }
  return (
    <Fragment>
    <Stack
      ref={containerRef}
      boxSizing={"border-box"}
      padding={"1rem"}
      spacing={"1rem"}
      bgcolor={grayColor}
      height={"90%"}
      sx={{
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {
        sampleMessage.map((i)=>(
          <MessageComponent key={i._id} 
          message={i} user={user} />    
        ))
      }
      {/* {allMessages.map((i) => (
        <MessageComponent key={i._id} message={i} user={user} />
      ))}

      {userTyping && <TypingLoader />}

      <div ref={bottomRef} /> */}
    </Stack>

    <form
      style={{
        height: "10%",
      }}
      // onSubmit={submitHandler}
    >
      <Stack
        direction={"row"}
        height={"100%"}
        padding={"1rem"}
        alignItems={"center"}
        position={"relative"}
      >
        <IconButton
          sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "30deg",
          }}
        
          // onClick={handleFileOpen}
        >
          <AttachFileIcon />
        </IconButton>

        <InputBox
          placeholder="Type Message Here..."
          // value={message}
          // onChange={messageOnChange}
        />

        <IconButton
          type="submit"
          sx={{
            bgcolor: orange,
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              bgcolor: "error.dark",
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Stack>
    </form>

    <FileMenu 
    //  chatId={chatId}
      />
  </Fragment>
  )
}

export default AppLayout()(Chat);