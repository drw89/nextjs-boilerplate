import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import Button from '@material-ui/core/Button';

import styles from './MarkdownBox.scss';

export default class MarkdownBox extends Component {
  static propTypes = {
    source: PropTypes.string,
    type: PropTypes.string,
  };

  state = {
    showBlock: false,
  };

  toggleShow = () => {
    this.setState((oldState) => ({
      showBlock: !oldState.showBlock,
    }));
  };

  render() {
    if (process.env.NODE_ENV !== 'development') {
      return null;
    }

    return (
      <div className={styles.markdownWrapper}>
        <Button
          variant="contained"
          onClick={this.toggleShow}
        >
          {this.state.showBlock ? 'Hide' : 'Show'} {this.props.type || 'Block'}
        </Button>
        {
          this.state.showBlock &&
            <div className={styles.markdownContent}>
              <Markdown
                source={this.props.source}
                language="js"
              />
            </div>
        }
      </div>
    )
  }
}
