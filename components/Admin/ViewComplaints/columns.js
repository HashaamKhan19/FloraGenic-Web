import ComplaintStatus from "../../Generic/ComplaintStatus";
import ReviewActions from "../../Generic/ReviewActions";
export const columns = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "name",
    headerName: "complainant Name",
    width: 200,
    valueGetter: (params) => params.row?.name,
  },
  {
    field: "email",
    headerName: "complainant Email",
    width: 200,
    valueGetter: (params) => params.row?.email,
  },
  { field: "type", headerName: "Category", width: 120 },
  { field: "date", headerName: "Added On", width: 150 },
  { field: "title", headerName: "Subject", width: 200 },
  { field: "description", headerName: "Description", width: 200, flex: 1 },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 150,
  //   headerAlign: "center",
  //   align: "center",
  //   renderCell: () => {
  //     return <ComplaintStatus />;
  //   },
  // },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <ReviewActions
          text={"Are you sure you want to delete this Complaint?"}
          warningText={"This action is irreversable!"}
          viewText={"Complaint Details"}
          viewSubject={"Complaint Subject"}
          replyText={"Complaint"}
          type="complaint"
          data={params?.row}
        />
      );
    },
  },
];
