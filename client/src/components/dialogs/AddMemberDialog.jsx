import React from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    Skeleton,
    Stack,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import { sampleUsers } from "../../constants/sampleData";
  import UserItem from "../shared/UserItem";
const AddMemberDialog = ({addMember, isLoadingAddMember, chatId }) => {
   
    const [members , setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const selectedMemberHandler = (id) => {
      setSelectedMembers((prev) => prev.includes(id)?
      prev.filter((i)=> i !== id) : [...prev, id]);
    };
    const addMemberSubmitHandler = ()=>{
      closeHandler();
    };
    const  closeHandler=()=>{
      setMembers([]);
      setSelectedMembers([]);
    };
    const isLoadingAddMembers = false;
    return (
        <>
        <Dialog open
        onClose={closeHandler}
        >
          <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
            <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
    
            <Stack spacing={"1rem"}>
                {members.length > 0 ? (sampleUsers.map((i) => (
                    <UserItem key={i._id} user={i}
                    isAdded={selectedMembers.includes(i._id)}
                    handler = {selectedMemberHandler} 
                    />
                ))):(
                    <Typography textAlign={"center"}>No Friends</Typography>
                )}
              {/* {isLoading ? (
                <Skeleton />
              ) : data?.friends?.length > 0 ? (
                data?.friends?.map((i) => (
                  <UserItem
                    key={i._id}
                    user={i}
                    handler={selectMemberHandler}
                    isAdded={selectedMembers.includes(i._id)}
                  />
                ))
              ) : (
                <Typography textAlign={"center"}>No Friends</Typography>
              )} */}
            </Stack>
    
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Button color="error" 
              onClick={closeHandler}
              >
                Cancel
              </Button>
              <Button
                onClick={addMemberSubmitHandler}
                variant="contained"
                disabled={isLoadingAddMembers}
              >
                Submit Changes
              </Button>
            </Stack>
          </Stack>
        </Dialog>
        </>
      );
    };
export default AddMemberDialog;