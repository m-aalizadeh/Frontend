import PropTypes from "prop-types";
import Grid from "@mui/material/Grid2";
import Repositories from "./Repositories";
import Profile from "./Profile";
import Bar from "./Bar";

const Dashboard = ({ handleDeleteUser, user, navigate }) => {
  const {
    login = "",
    bio = "",
    name = "",
    avatar_url = "",
    followers = 0,
    following = 0,
    location = "",
    blog = "",
  } = user;

  return (
    <>
      <Bar
        name={name}
        avatar_url={avatar_url}
        navigate={navigate}
        handleDeleteUser={handleDeleteUser}
      />
      <Grid container mx={2} mt={2} spacing={2}>
        <Grid size={3}>
          <Profile
            bio={bio}
            followers={followers}
            following={following}
            location={location}
            blog={blog}
            login={login}
            name={name}
            avatar_url={avatar_url}
          />
        </Grid>
        <Grid item size={9}>
          <Repositories login={login} />
        </Grid>
      </Grid>
    </>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
  navigate: PropTypes.func,
  handleDeleteUser: PropTypes.func,
};

Dashboard.defaultProps = {
  user: {},
  navigate: () => {},
  handleDeleteUser: () => {},
};

export default Dashboard;
