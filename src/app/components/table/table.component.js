import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import MainEffects from "../../store/effects";
import MainActions from "../../store/actions";
import { selectData } from "../../store/selectors";
class TableComponent extends PureComponent {
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th >Title</th>
              <th>Link</th>
              <th>Description</th>
              <th>content</th>
              <th>pubDate</th>
              <th>quid</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((el) => (
              <tr key={el.id} onClick={this.props.deleteData(el.id)}>
                <td>{el.title}</td>
                <td >{el.link}</td>
                <td >{el.description}</td>
                <td >{el["content:encoded"]}</td>
                <td >{el.pubDate}</td>
                <td >{el.guid}</td>
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
});
const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => dispatch(mainEffects.deleteData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
