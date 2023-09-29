import React, { useEffect, useState } from "react";
import { Box, IconButton, InputBase, Link, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { UserInformationTeam } from "../../database/UserInformation";

const BuildingPermitApplications = () => {

  const [bpApplications, setBpApplications] = useState([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "bpa_id", headerName: "No.", width: 50 },
    { field: "control_no", headerName: "Control No.", width: 130 },
    { field: "bldgpermit_no", headerName: "Building Permit No", width: 130 },
    { field: "date_received", headerName: "Date Received", width: 130 },
    { field: "applicants_name", headerName: "Applicants Name", width: 140 },
    { field: "address", headerName: "Address", width: 130 },
    { field: "nc_r", headerName: "NC/R", width: 130 },
    { field: "total_payment", headerName: "Total Payment", width: 130 },
    { field: "or_no.", headerName: "OR No.", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "remarks", headerName: "Remarks", width: 130 },
    { field: "fsec_no", headerName: "FSEC No.", width: 130 },
    { field: "nod_no", headerName: "NOD No.", width: 130 },
    { field: "evaluator", headerName: "Evaluator", width: 130 },
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
   
    fetch("http://localhost:8080/bpapplications/getAllBPApplications")
      .then((res) => res.json()) // Parse the response as JSON
      .then((result) => {
        
        setBpApplications(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
/*
  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(Deleting user with ID: ${id});
  };*/

  return (
    <Box m="15px">
      <Header title="FSEC -> Building Permit -> Applications" />
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
            rows={bpApplications}
            columns={columns}
            getRowId={(row) => row.bpa_id}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </Box>
    </Box>
  );
};

export default BuildingPermitApplications;