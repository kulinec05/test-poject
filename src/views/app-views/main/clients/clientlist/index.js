import React, {lazy, useEffect, useState} from "react";
import {Spin, Table} from 'antd';
import {LoadingOutlined} from "@ant-design/icons";
import { Route, Switch, useHistory, Routes} from "react-router-dom";
import Client from "./client";

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;


const ClientList = ({match}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    let history = useHistory()

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Username',
            dataIndex: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',

        }
    ];


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setData(json)
                setLoading(true)
            })

    }, [])


    return (
        <>
            <Switch>
                <Route exact path={`${match.url}/client`} >
                    <Client value={history.location.state} />
                </Route>
                <Route  path='/' >
                    <Table columns={columns}
                           dataSource={data}
                           rowKey={record => record.id}
                           onRow={record=>{
                               return {
                                   onClick:() => {
                                       history.push(match.url+'/client', record)
                                       console.log(history.location.state)
                                   }
                               }
                           }}
                    />

                </Route>


            </Switch>

        </>
    )
}

export default ClientList;