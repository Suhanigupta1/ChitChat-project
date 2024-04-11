import { lazy } from "react";
import { Suspense } from "react";
import UserItem from "../components/shared/UserItem";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon
} from "@mui/icons-material";
import { matBlack, bgGradient } from "../constants/color";
import { memo, useEffect } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Drawer, Grid, IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AvatarCard from "../components/shared/AvatarCard";
import { Link } from "../components/styles/StyledComponents";
import { sampleChats, sampleUsers } from "../constants/sampleData";
const ConfirmDeleteDialog = lazy(()=>import("../components/dialogs/ConfirmDeleteDialog"));
const AddMemberDialog = lazy(()=>import("../components/dialogs/AddMemberDialog"))
const Group = () => {
    const removeMemberHandler=(id)=>{
      console.log("Remove Member", id);
    }
    const chatId = useSearchParams()[0].get("group");
    const updateGroupName = ()=>{
      setIsEdit(false);
      console.log(groupNameUpdatedValue);
    };
    const isAddMember = false;
    const openConfirmDeleteHandler=()=>{
      setConfirmDeleteDialog(true);
      console.log("Delete Group");
    };
    const openAddMemberHandler=()=>{
      console.log("Add member");
    }
    const closeConfirmDeleteHandler=()=>{
      setConfirmDeleteDialog(false);
    }
    const deleteHandler =(e)=>{
      console.log("Delete Handler");
      closeConfirmDeleteHandler();
    }   
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
    useEffect(()=>{
      if (chatId) {
        setGroupName(`Group Name ${chatId}`);
        setGroupNameUpdatedValue(`Group Name ${chatId}`);
      }
        return ()=>{
        setGroupName("");
        setGroupNameUpdatedValue("");
        setIsEdit(false);
      }
    }, [chatId]);
    const [isEdit, setIsEdit] = useState(false);
    
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
    const handleMobileClose =()=>
        setIsMobileMenuOpen(false);
    const navigateBack = ()=>{
        navigate("/");
    };
    const [groupName, setGroupName] = useState("Group name");
    const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
    const handleMobile = ()=>{
        setIsMobileMenuOpen((prev)=>!prev);
    };
    const IconBtns = (
      <>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
              position: "fixed",
              right: "1rem",
              top: "1rem",
            },
          }}
        >
          <IconButton onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Box>
  
        <Tooltip title="back">
          <IconButton
            sx={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              bgcolor: matBlack,
              color: "white",
              ":hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
            onClick={navigateBack}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
        </Tooltip>
      </>
    );
  
    const GroupName = (
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={"1rem"}
        padding={"3rem"}
      >
        {isEdit ? (
          <>
            <TextField
              value={groupNameUpdatedValue}
              onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
            />
            <IconButton 
            onClick={updateGroupName} 
            // disabled={isLoadingGroupName}
            >
              <DoneIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h4">{groupName}</Typography>
            <IconButton
              // disabled={isLoadingGroupName}
              onClick={() => setIsEdit(true)}
            >
              <EditIcon />
            </IconButton>
          </>
        )}
      </Stack>
    );
  
    const ButtonGroup = (
      <Stack
        direction={{
          xs: "column-reverse",
          sm: "row",
        }}
        spacing={"1rem"}
        p={{
          xs: "0",
          sm: "1rem",
          md: "1rem 4rem",
        }}
      >
        <Button
          size="large"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={openConfirmDeleteHandler}
        >
          Delete Group
        </Button>
        <Button
          size="large"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={openAddMemberHandler}
        >
          Add Member
        </Button>
      </Stack>
    );
  
    // return myGroups.isLoading ? (
    //   <LayoutLoader />
    // ) : (
    return <Grid container height={"100vh"}>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          sm={4}
        >
          <GroupsList myGroups={sampleChats} chatId={chatId} />
        </Grid>
  
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            padding: "1rem 3rem",
          }}
        >
          {IconBtns}
  
          {groupName && (
            <>
              {GroupName}
  
              <Typography
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant="body1"
              >
                Members
              </Typography>
  
              <Stack
                maxWidth={"45rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{
                  sm: "1rem",
                  xs: "0",
                  md: "1rem 4rem",
                }}
                spacing={"2rem"}
                height={"50vh"}
                overflow={"auto"}
              >
               
                {
                  sampleUsers.map((i) => (
                    <UserItem
                      user={i}
                      key={i._id}
                      isAdded
                      styling={{
                        boxShadow: "0 0 0.5rem  rgba(0,0,0,0.2)",
                        padding: "1rem 2rem",
                        borderRadius: "1rem",
                      }}
                      handler={removeMemberHandler}
                    />
                  ))
                } 
              </Stack>
  
              {ButtonGroup}
            </>
          )}
        </Grid>
  
        {isAddMember && (
          <Suspense fallback={<Backdrop open />}>
            <AddMemberDialog chatId={chatId} />
          </Suspense>
        )}
  
         {confirmDeleteDialog && (
          <Suspense fallback={<Backdrop open />}>
            <ConfirmDeleteDialog
              open={confirmDeleteDialog}
              handleClose={closeConfirmDeleteHandler}
              deleteHandler={deleteHandler}
            />
          </Suspense>
        )}
  
        <Drawer
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileClose}
        >
          <GroupsList
            w={"50vw"}
            myGroups={sampleChats}
            chatId={chatId}
          />
        </Drawer>
      </Grid>
    
  };
  
  const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
    <Stack
      width={w}
      sx={{
        backgroundImage: bgGradient,
        height: "100vh",
        overflow: "auto",
      }}
    >
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography textAlign={"center"} padding="1rem">
          No groups
        </Typography>
      )}
    </Stack>
  );
  
  const GroupListItem = memo(({ group, chatId }) => {
    const { name, avatar, _id } = group;
  
    return (
      <Link
        to={`?group=${_id}`}
        onClick={(e) => {
          if (chatId === _id) e.preventDefault();
        }}
      >
        <Stack direction={"row"} spacing={"1rem"} 
          alignItems={"center"}>
          <AvatarCard avatar={avatar} />
          <Typography>{name}</Typography>
        </Stack>
      </Link>
    );
  });
  
  export default Group;

