import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Table from "../../components/table";

class MainPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>Job List</h2>
        <Table />
      </div>
    );
  }
}
export default connect()(MainPage);
