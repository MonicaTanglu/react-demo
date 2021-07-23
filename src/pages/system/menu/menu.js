import React from 'react';
import { Button, Table, Popconfirm } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import CEllipsis from '@/components/CEllipsis'
import './menu.less';

class MenuPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    columns = [
        {
            title: '菜单名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '菜单类型',
            dataIndex: 'menuType',
            key: 'menuType',
            render: (text) => {
                let txt = '菜单'
                if (text === 0) {
                    txt = '菜单'
                } else if (text === 1) {
                    txt = '菜单'
                } else if (text === 2) {
                    txt = '按钮/权限'
                } else return txt
                return (
                    <span>{txt}</span>
                )
            }
        }, {
            title: 'icon',
            dataIndex: 'icon',
            key: 'icon'
        }, {
            title: '组件',
            dataIndex: 'component',
            key: 'component',
            render: (text) => (<CEllipsis title={text} len={24}></CEllipsis>)
        }, {
            title: '路径',
            dataIndex: 'url',
            key: 'url',
            render: (text) => (<CEllipsis title={text} len={25}></CEllipsis>)
        }, {
            title: '排序',
            dataIndex: 'sortNo',
            key: 'sortNo'
        }, {
            title: '操作',
            dataIndex: 'action',
            fixed: 'right',
            width: 150,
            render: (text, record) => (
                <span>
                    <Button type="link" size="small" className="m-r-10">编辑</Button>
                    <Popconfirm title="确定要删除吗？">
                        <Button type="link" size="small">删除</Button>
                    </Popconfirm>
                </span>
            )
        }
    ]
    dataSource = []
    render () {
        return (
            <div className="sys-menu">
                <p className="p-t-10 p-l-10">
                    <Button type="primary" icon={<PlusOutlined />}>新增</Button>
                </p>

                <div>
                    <Table size="middle" columns={this.columns} dataSource={this.dataSource}></Table>
                </div>
            </div>
        )
    }
}
export default MenuPage;
