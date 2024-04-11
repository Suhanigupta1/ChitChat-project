import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const NewGroup = () => {
  const selectedMemberHandler = (id) => {
    setSelectedMembers((prev) => prev.includes(id)?
    prev.filter((i)=> i !== id) : [...prev, id]);
  };
  const closeHandler = ()=>{};
  const groupName = useInputValidation("");
  const submitHandler = ()=>{};
  const [members , setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  // console.log(selectedMembers);
  // const errors = [
  //   {
  //     isError,
  //     error,
  //   },
  // ];
  return (
    <Dialog open
    // onClose={closeHandler} open={isNewGroup}
    >
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography variant="body1">Members</Typography>

        <Stack>
          {sampleUsers?.map((i)=>(
            <UserItem user={i} key={i._id}
            handler={selectedMemberHandler} 
            isAdded={selectedMembers.includes(i._id)}/> 
            // handlerIsLoading = {isLoadingSendFriendRequest} 
           
          ))}

          {/* {isLoading ? (
            <Skeleton />
          ) : (
            data?.friends?.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          )} */}
        </Stack>

        <Stack direction={"row"} 
        justifyContent={"space-evenly"}>
          <Button
            variant="text"
            color="error"
            size="large"
            // onClick={closeHandler}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={submitHandler}
            // disabled={isLoadingNewGroup}
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;