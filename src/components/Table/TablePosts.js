import React,{useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios'

const TablePosts = () => {

    const [data, setData] = useState([]);

    const cols =[
        {
            title:"User ID",
            field:"userId",
            type:"numeric"
        },
        {
            title:"ID",
            field:"id",
            type:"numeric"
        },
        {
            title:"Title",
            field:"title"
        },
        {
            title:"Body",
            field:"body"
        }
    ]

    useEffect(() => {
        Axios.get('http://localhost:3000/api/posts')
        .then(response=>{
            setData(response.data)
        })
        .catch(e=>{
            console.log(e);
        })
    }, [])
    return (
        <div>
            <MaterialTable columns={cols} data={data} title='Posts' />
        </div>
    )
}

export default TablePosts
