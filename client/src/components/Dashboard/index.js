import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleDeleteUser } from "../../redux/actions/user";
import Dashboard from "./Dashboard";

function mapStateToProps(state) {
  const user = state.userDetails?.user;
  return { user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleDeleteUser,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
