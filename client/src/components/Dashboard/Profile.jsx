import PropTypes from "prop-types";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import GroupIcon from "@mui/icons-material/Group";
import PlaceIcon from "@mui/icons-material/Place";
import WebIcon from "@mui/icons-material/Web";
import Visible from "../common/Visible";
const Profile = ({
  bio,
  name,
  login,
  followers,
  following,
  location,
  avatar_url,
  blog,
}) => {
  return (
    <Grid container justifyContent="center" direction="column" spacing={2}>
      <Grid item>
        <Avatar alt={name} src={avatar_url} sx={{ width: 200, height: 200 }} />
      </Grid>
      <Grid>
        <Typography variant="h5">{name}</Typography>
      </Grid>
      <Grid>
        <Typography variant="body">{login}</Typography>
      </Grid>
      <Visible when={bio}>
        <Grid>
          <Typography variant="body">{bio}</Typography>
        </Grid>
      </Visible>
      <Stack alignItems="center" direction="row" gap={1}>
        <GroupIcon mt={4} />
        <Typography variant="body">Followers</Typography>:{followers}
        {`  `}-{`  `}
        <Typography variant="body">Following</Typography>:{following}
      </Stack>
      <Visible when={location}>
        <Stack alignItems="center" direction="row" gap={1}>
          <PlaceIcon />
          <Typography variant="body">{location}</Typography>
        </Stack>
      </Visible>
      <Visible when={blog}>
        <Stack alignItems="center" direction="row" gap={1}>
          <WebIcon />
          <a href={blog} target="_blank" rel="noreferrer">
            {blog}
          </a>
        </Stack>
      </Visible>
    </Grid>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  avatar_url: PropTypes.string,
  bio: PropTypes.string,
  login: PropTypes.string,
  followers: PropTypes.string,
  following: PropTypes.string,
  location: PropTypes.string,
  blog: PropTypes.string,
};

Profile.defaultProps = {
  bio: "",
  name: "",
  login: "",
  followers: "",
  following: "",
  location: "",
  avatar_url: "",
  blog: "",
};

export default Profile;
