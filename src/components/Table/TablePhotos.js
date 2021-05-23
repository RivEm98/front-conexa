import React,{useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios'

const TablePhotos = () => {

    const [data, setData] = useState([]);

    const cols =[
        {
            title:"Album ID",
            field:"albumId",
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
            title:"URL",
            field:"url"
        },
        {
            title:"Thumbnail URL",
            field:"thumbnailUrl"
        }
    ]

    useEffect(() => {
        Axios.get('http://localhost:3000/api/photos')
        .then(response=>{
            console.log(response.data);
            setData(response.data)
        })
        .catch(e=>{
            console.log(e);
        })
    }, [])
    return (
        <div>
            <MaterialTable columns={cols} data={data} title='Photos' />
        </div>
    )
}

export default TablePhotos
