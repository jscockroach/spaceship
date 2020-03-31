import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import { getDataByOneShip } from "../../store/actions";

const mapStateToProps = state => {
  return {
    ship: state.ship
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getDataByOneShip
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
