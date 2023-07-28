import React from 'react';
import {Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {fetchRoute} from "../../store/routingReducer";
import {DomUtil} from "leaflet";
import addClass = DomUtil.addClass;


interface DataType {
    key: string;
    name: string;
    point1: number[];
    point2: number[];
    point3: number[];
}

const columns: ({ dataIndex: string; title: string; render: (text) => JSX.Element; key: string } | { dataIndex: string; title: string; key: string } )[] = [
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
    const data: DataType[] = useSelector(state => state.routeReducer.routes)
    const dispatch = useDispatch()

    return (
        <Table pagination={false} onRow={(record, rowIndex) => {
            return{
                onClick: ()=>{
                    dispatch(fetchRoute([record.point1,record.point2,record.point3]))
                }
            }
        }} columns={columns} dataSource={data}/>
    )
};

export default TableRoutes;
