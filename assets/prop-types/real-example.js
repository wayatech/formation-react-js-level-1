import React from "react";
import PropTypes from "prop-types";

class VisitMap extends React.Component {
  render() {
    return <>{/* ... */}</>;
  }
}

VisitMap.propTypes = {
  authUser: PropTypes.shape({
    customer: PropTypes.shape({
      mapDefaultLatitude: PropTypes.number,
      mapDefaultLongitude: PropTypes.number,
      mapDefaultZoom: PropTypes.number,
    }),
  }).isRequired,
  currentPosition: PropTypes.arrayOf(PropTypes.number),
  currentZoom: PropTypes.number,
  fetchMapVisits: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    campaign: PropTypes.arrayOf(PropTypes.string),
    dateEnd: PropTypes.string,
    dateStart: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string),
    user: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setCurrentPositionStart: PropTypes.func.isRequired,
  setCurrentPositionSuccess: PropTypes.func.isRequired,
  setCurrentZoomSuccess: PropTypes.func.isRequired,
  visits: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

VisitMap.defaultProps = {
  currentPosition: undefined,
  currentZoom: undefined,
};

export default Greeting;
