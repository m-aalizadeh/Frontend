import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleAddUser } from "../../redux/actions/user";
import SignIn from "./SignIn";

function mapStateToProps(state) {
  const user = state.userDetails?.user || {};
  return { user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleAddUser,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
