import { Modal } from 'antd';
import 'antd/lib/modal/style/css';
import 'antd/lib/form/style/css';
import React, { Component } from 'react';
import dummyData from '../helpers/dummyData.json';

class ModalListScore extends Component {
  state = { listData: [] };

  componentDidMount() {
    this.setState(prevState => {
        let { listData } = prevState;

        listData = dummyData.sort((a,b) => { return b.score - a.score })

        return { listData };
    })
  }

  render() {
    const { visibleScore, handleOkScore, handleCancelScore } = this.props;
    const { listData } = this.state;
    return (
      <>
        <Modal
          title="List Score"
          visible={visibleScore}
          onOk={handleOkScore}
          onCancel={handleCancelScore}
        >
            {listData.map((val, index) => (
                <div className="d-flex justify-content-between align-items-center">
                    <p>{`${(index + 1)}. ${val.name}`}</p>
                    <p>{val.score}</p>
                </div>
            ))}
        </Modal>
      </>
    );
  }
}

export default ModalListScore;