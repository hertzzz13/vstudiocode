import React, { useEffect, useState } from "react";
import { Box, IconButton, InputBase, Link, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
//import { UserInformationTeam } from "../../database/UserInformation";

const OccupancyApprovedApplications = () => {

  const [approvedApplication, setApprovedApplication] = useState([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "approved_id", headerName: "No.", width: 50 },
    { field: "application_no", headerName: "Application No.", width: 100 },
    { field: "bldgpermit_no", headerName: "Building Permit No.", width: 120  },
    { field: "date_received", headerName: "Date Received", width: 100 },
    { field: "applicants_name", headerName: "Applicant's Name", width: 110 },
    { field: "project_name", headerName: "Project Name", width: 100 },
    { field: "location", headerName: "Location", width: 80 },
    { field: "contact_no", headerName: "Contact No.", width: 90 },
    { field: "fees", headerName: "Fees", width: 60 },
    { field: "inspection_no", headerName: "Inspection Order No.", width: 125 },
    { field: "date_fsic", headerName: "Date of FSIC", width: 100 },
    { field: "status", headerName: "Status", width: 80 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <div>
          <button className="btn btn-outline-primary mx-2">View</button>
          <button className="btn btn-danger mx-2">Edit</button>
        </div>
      ),
    },
  ];
  useEffect(() => {
   
    fetch("http://localhost:8080/approved/getAllApprovedApplication")
      .then((res) => res.json()) // Parse the response as JSON
      .then((result) => {
        
        setApprovedApplication(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
/*
  useEffect(() => {
    fetch("http://localhost:8080/approved/getAllApprovedApplication")
      .then((res) => res.json())
      .then((result) => {
        const filteredUsers = result.filter(user => user.position === "Building Plan Evaluator");
        setUsers(filteredUsers);
      });
  }, []);*/
/*
  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(Deleting user with ID: ${id});
  };*/

  return (
    <Box m="15px">
      <Header title="FSIC -> Occupancy -> Approved Applications" />
      <Box sx={{ 
        width: '30%', 
        mt: -2,
        }} backgroundColor={colors.black[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, width: '80%' }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box
        m="10px 0 0 0"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.red[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blue[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.black[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blue[800],
          },
        }}
      >
        <div style={{ height: 370, width: '100%' }}>
          <DataGrid
            rows={approvedApplication}
            columns={columns}
            getRowId={(row) => row.approved_id}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </Box>
    </Box>
  );
};

export default OccupancyApprovedApplications;