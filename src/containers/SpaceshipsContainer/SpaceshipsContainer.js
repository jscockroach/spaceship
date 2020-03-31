import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Spaceships from "../../components/Spaceships/Spaceships";
import { getData, getDataBySearchQuery } from "../../store/actions";

const mapStateToProps = state => {
  return {
    allStarships: state.allStarships
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getData,
        getDataBySearchQuery
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spaceships);
