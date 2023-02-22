import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Houses = () => {

const [houses, setHouses]= useState([]);

useEffect(() => {
    const fetchAllHouses = async () => {
      try {
        const res = await axios.get("http://localhost:8000/houses");
        setHouses(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllHouses();
  }, []);

  console.log(houses);

  const handleDelete= async (id) => {
    try {
        await axios.delete(`http://localhost:8000/books/${id}`);
        window.location.reload()
    } 
    catch (err) {
        console.log(err)
    }
  }

  return (
    <div>
      <h1>Imara Houses</h1>
      <div className="books">
        {houses.map((house) => (
          <div key={house.id} >
            <img src={house.image} alt="" />
            <h2>{house.title}</h2>
            <p>{house.desc}</p>
            <span>${house.price}</span>
            <button className="delete" onClick={() => handleDelete(house.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${house.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
      <button><Link to ="/add"> Add New Book </Link></button>
      </div>
  )
}

export default Houses

/*
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

*/