import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
// import { transformImage } from "../../lib/features";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} 
    alignItems={"center"}>
      <Avatar
        // src={user?.avatar?.url}
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"Happy soul"} />
      <ProfileCard
        heading={"Username"}
        text={"tangling.tales"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Suhani Gupta"}
       Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment('2024-01-31T23:59:57.984Z').fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;