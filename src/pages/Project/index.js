import React, { Component } from 'react';
import TableFilter from './components/TableFilter';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="project-page">
        {/* 筛选和表格组合 */}
        <TableFilter />
      </div>
    );
  }
}
