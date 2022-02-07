import React, {useState} from "react";
import {Button, Col, Form, Input, Row, Spin} from "antd";
import {value} from "lodash/seq";
import {ROW_GUTTER} from "../../../../../../constants/ThemeConstant";
import {useHistory} from "react-router-dom";


const Client = (props) => {
    const [loading, setLoading] = useState(false)

    let history=useHistory()
    const value= props.value
    let phnumber = value.phone.toString()

    const onFinish = () => {
        console.log('Added')
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };




    return (
        <>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={
                        {
                            'name': value.name,
                            'email': value.email,
                            'username': value.username,
                            'address': value.address.street,
                            'number':phnumber,
                            'city':value.address.city
                        }
                    }
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!'
                                        }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Phone"
                                        name="phone"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label="Address"
                                        name="address"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="City"
                                        name="city"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} sm={24} md={12}>
                                    <Button type="primary" htmlType="submit" onClick={()=> {
                                        setLoading(true)
                                        setTimeout(()=>history.replace("/app/main/clients/clientlist"), 2000)
                                    } }>
                                        Save Change
                                    </Button>

                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    {loading?<Spin/>:null}

                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
};

export default Client;

