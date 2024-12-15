import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Visible from "../common/Visible";
import { commonFetch } from "../../utils/services";
const Repositories = ({ login }) => {
  const [offset, setOffset] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [showList, setShowList] = useState([]);
  const [loader, setLoader] = useState(false);

  const getUserRepos = async () => {
    setLoader(true);
    const result = await commonFetch("GET", `${login}/repos`);
    if ([Array.isArray(result), result?.length].every(Boolean)) {
      setRepositories(result);
      setOffset(6);
      setShowList(result.slice(0, 6));
    }
    setLoader(false);
  };

  const goNext = () => {
    setShowList(repositories.slice(offset, offset + 6));
    setOffset(offset + 6);
  };

  const goPrev = () => {
    setShowList(repositories.slice(offset - 12, offset - 6));
    setOffset(offset - 6);
  };

  useEffect(() => {
    getUserRepos();
  }, []);

  return (
    <>
      <Visible when={loader}>
        <Box
          display="flex"
          position="fixed"
          width="100%"
          height="100%"
          top={0}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          zIndex={5500}
        >
          <CircularProgress
            variant="indeterminate"
            disableShrink
            size={44}
            fullPageLoader
            thickness={4}
          />
        </Box>
      </Visible>
      <Visible
        when={repositories.length}
        otherwise={
          <Visible when={[!repositories.length, !loader].every(Boolean)}>
            <Grid size={12} align="center">
              <Typography variant="5">No Data Found</Typography>
            </Grid>
          </Visible>
        }
      >
        <Grid container spacing={2} justifyItems="center">
          <Grid size={12}>
            <Typography variant="h4">Repositories</Typography>
          </Grid>
          {showList
            .sort((a, b) => {
              return new Date(b.created_at) - new Date(a.created_at);
            })
            .map((repo) => (
              <Grid key={repo.id} size={6}>
                <Card sx={{ minWidth: 275, minHeight: 120 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {repo.name}
                    </Typography>
                    <Typography variant="body2">{repo.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          <Visible when={repositories.length > 6}>
            <Grid size={12}>
              <Grid container spacing={2} justifyContent="center">
                <Grid>
                  <Button
                    size="small"
                    variant="contained"
                    disabled={offset - 6 === 0}
                    onClick={goPrev}
                  >
                    Prev
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    size="small"
                    variant="contained"
                    disabled={offset >= repositories.length}
                    onClick={goNext}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Visible>
        </Grid>
      </Visible>
    </>
  );
};

Repositories.propTypes = {
  login: PropTypes.string,
};

Repositories.defaultProps = {
  login: "",
};

export default Repositories;
