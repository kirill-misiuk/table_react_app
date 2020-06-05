import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import MainEffects from "../../store/effects";
import MainActions from "../../store/actions";
import {
  selectCount,
  selectCurrentPage,
  selectData, selectPageCount,
  selectPerPage, selectSearchField,
} from "../../store/selectors";

class TableComponent extends PureComponent {
  handleDeleteButton = (id) => {
    this.props.deleteData(id);
  };

  filterData=()=>{
    const condition = new RegExp(this.props.searchField);
    return this.props.data.filter((el)=>condition.test(el.title))
  }
  prepareDataToShow = () => {
    return this.filterData().slice(
      this.props.currentPage * this.props.perPage,
      (this.props.currentPage + 1) * this.props.perPage
    );
  };
  componentDidUpdate(prevProps) {
    const newCount = this.filterData().length
    if(newCount !== this.props.count){
      if(newCount===0){
        this.props.setCount(1)
      }else{
        this.props.setCount(this.filterData().length)
      }

    }
  }

  render() {
    return (
      <div>
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
  pageCount: selectPageCount(state),
  currentPage: selectCurrentPage(state),
  searchField: selectSearchField(state),
});
const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => dispatch(mainEffects.deleteData(id)),
  setCount:(number)=> dispatch(mainActions.setCount(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
