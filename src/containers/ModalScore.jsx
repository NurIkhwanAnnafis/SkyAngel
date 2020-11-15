import { Modal, Form, Input, InputNumber } from 'antd';
import 'antd/lib/modal/style/css';
import 'antd/lib/form/style/css';
import React from 'react';

const ModalScore = props => {
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      };

    const handleSubmit = () => {
        const data = form.getFieldsValue();
        props.handleOk(data);
        form.resetFields();
    };

    return (
        <Modal
          title="Your Score"
          visible={props.visible}
          onOk={handleSubmit}
          onCancel={props.handleCancel}
          className="text-center"
        >
          <Form
            name="basic"
            initialValues={{
                username: '',
                score: props.score
            }}
            form={form}
            {...layout}
            >
            <Form.Item
                label="Username"
                name="username"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Score"
                name="score"
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>
        </Form>
    </Modal>
    )
}

export default ModalScore;