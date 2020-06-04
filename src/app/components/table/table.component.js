import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import MainEffects from "../../store/effects";
import MainActions from "../../store/actions";
import {
  selectCount,
  selectCurrentPage,
  selectData,
  selectPerPage,
} from "../../store/selectors";
import PaginationComponent from "../pagination";
class TableComponent extends PureComponent {
  handleDeleteButton = (id) => {
    this.props.deleteData(id);
  };

  prepareDataToShow = () => {
    return this.props.data.slice(
      this.props.currentPage * this.props.perPage,
      (this.props.currentPage + 1) * this.props.perPage
    );
  };

  render() {
    return (
      <div>
        <PaginationComponent />
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Description</th>
              <th>content</th>
              <th>pubDate</th>
              <th>quid</th>
            </tr>
          </thead>
          <tbody>
            {this.prepareDataToShow().map((el) => (
              <tr key={el.id} onClick={() => this.handleDeleteButton(el.id)}>
                <td>{el.title}</td>
                <td>{el.link}</td>
                <td>{el.description}</td>
                <td>{el["content:encoded"]}</td>
                <td>{el.pubDate}</td>
                <td>{el.guid}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mainActions = new MainActions();
const mainEffects = new MainEffects(mainActions);

const mapStateToProps = (state) => ({
  data: selectData(state),
  count: selectCount(state),
  perPage: selectPerPage(state),
  currentPage: selectCurrentPage(state),
});
const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => dispatch(mainEffects.deleteData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
