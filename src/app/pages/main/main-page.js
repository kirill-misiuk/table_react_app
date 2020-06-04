import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Table from "../../components/table";
import MainEffects from "../../store/effects";
import MainActions from "../../store/actions";

class MainPage extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div>
        <h2>Job List</h2>
        <Table />
      </div>
    );
  }
}
const mainActions = new MainActions();
const mainEffects = new MainEffects(mainActions);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(mainEffects.loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
