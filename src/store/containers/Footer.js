import { connect } from "react-redux";
import { saveTheme } from "../actions/changeThemeAction";
import Footer from "../../components/Footer";

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  saveColorTheme: (color) => dispatch(saveTheme(color)),
});

function mapStatetoProps(state) {
  return {
    themeColor: state.color,
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Footer);
