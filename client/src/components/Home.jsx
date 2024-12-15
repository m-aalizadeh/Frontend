import PropTypes from "prop-types";
import Grid from "@mui/material/Grid2";
import gitpage from "../../public/assests/gitpages.jpg";
import SignIn from "./SignIn";

const Home = ({ navigate }) => {
  const width = window.innerWidth / 2;

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <img
          style={{
            height: "100vh",
            width: width,
          }}
          alt="exercise"
          src={gitpage}
        />
      </Grid>
      <Grid size={6}>
        <SignIn navigate={navigate} />
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  navigate: PropTypes.func,
};

Home.defaultProps = {
  navigate: () => {},
};

export default Home;
