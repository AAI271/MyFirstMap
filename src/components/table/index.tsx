import React from 'react';
import {Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {fetchRoute} from "../../store/routingReducer";
import {IRoute, IState} from "../../models/models";



const columns: ({ dataIndex: string; title: string; render: (text:string) => JSX.Element; key: string } | { dataIndex: string; title: string; key: string } )[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'point1',
        dataIndex: 'point1',
        key: 'point1',
        render: (text) => <span>{text[0]},{text[1]}</span>,
    },
    {
        title: 'point2',
        dataIndex: 'point2',
        key: 'point2',
        render: (text) => <span>{text[0]},{text[1]}</span>,
    },
    {
        title: 'point3',
        dataIndex: 'point3',
        key: 'point3',
        render: (text) => <span>{text[0]},{text[1]}</span>,
    }
];



const TableRoutes: React.FC = () => {
    const data: IRoute[] = useSelector((state:IState) => state.routeReducer.routes)
    const dispatch = useDispatch()

    return (
        <Table pagination={false} onRow={(record) => {
            return{
                onClick: ()=>{
                    dispatch(fetchRoute([record.point1,record.point2,record.point3]))
                }
            }
        }} columns={columns} dataSource={data}/>
    )
};

export default TableRoutes;
