import React from 'react'
import { Dialog } from '@mui/material'
import {DialogTitle} from '@mui/material';
import {TextField} from '@mui/material';
import { useInputValidation } from "6pp";
import {InputAdornment} from '@mui/material';
import {List} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material'; 
import { useState } from 'react';
import {Stack} from '@mui/material';
import { sampleUsers } from '../../constants/sampleData';
import UserItem from '../shared/UserItem';
const Search = () => {
  const search = useInputValidation("");
  let isLoadingSendFriendRequest = false;
  const [users, setUsers] = useState(sampleUsers);
  const addFriendHandler= (id) =>{
    console.log(id);
  }  
  // const isS
  return (
    <Dialog open
    // open={isSearch} onClose={searchCloseHandler}
    >
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  )
}

export default Search