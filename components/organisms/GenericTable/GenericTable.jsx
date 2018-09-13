import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import MarkdownBox from '../../molecules/MarkdownBox/MarkdownBox';

import styles from './GenericTable.scss';
import example from './GenericTable.md';

export const getHeadRow = (table) => {
  let head = [];
  if (_.isEmpty(table.head)) {
    const keys = Object.keys(_.get(table, 'body[0]', []));
    _.map(keys, key => {
      head.push({
        title: key,
      })
    });
    return head;
  }
  return table.head;
};

@inject('store')
@observer
export default class GenericTable extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    tableID: PropTypes.string.isRequired,
  };

  getTableRow = (rowSets, headTitles) => (
    _.map(rowSets, row => (
      <TableRow key={_.uniqueId('tableRow')}>
        {
          _.map(headTitles, prop => (
            <TableCell key={_.uniqueId('tableCell')}>
              {
                _.get(row, `${prop.title.toLowerCase()}`, `Data for column "${prop.title}" not found`)
              }
            </TableCell>
          ))
        }
      </TableRow>
    ))
  );

  render() {
    const { tableID, store } = this.props;
    const { tables } = store.tables;

    const table = _.find(tables, tab => tab.tableID === tableID);

    if (_.isEmpty(table)) {
      return null;
    }

    const headRow = getHeadRow(table);

    return (
      <div className={styles.tableWrapper}>
        <h2>{_.get(table, 'name', '')}</h2>
        {
          !_.isEmpty(table.description)
            && <p className={styles.tableDescription}>{table.description}</p>
        }
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                {
                  _.map(headRow, headProp => (
                    <TableCell
                      key={_.uniqueId('tableHead')}
                      style={{ width: _.get(headProp, 'width', 'inherit') }}
                      component="th"
                    >
                      {_.get(headProp, 'title', 'Unnamed Col')}
                    </TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.getTableRow(table.body, headRow)
              }
            </TableBody>
          </Table>
        </Paper>
        <MarkdownBox
          source={example}
          type="Code"
        />
      </div>
    );
  }
}
