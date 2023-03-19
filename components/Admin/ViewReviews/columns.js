import BlockToggle from "../../Generic/BlockToggle";
import Ratings from "../../Generic/Ratings";
import ReviewActions from "../../Generic/ReviewActions";

export const columns = [
  { field: "id", headerName: "ID", width: 40 },
  { field: "image", headerName: "Image", width: 80 },
  { field: "type", headerName: "Type", width: 160 },
  {
    field: "name",
    headerName: "Added By",
    width: 150,
  },
  { field: "date", headerName: "Added On", width: 150 },
  {
    field: "ratings",
    headerName: "Ratings",
    width: 150,
    headerAlign: "center",
    renderCell: () => {
      return <Ratings />;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: () => {
      return <BlockToggle />;
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: () => {
      return (
        <ReviewActions
          text={"Are you sure you want to delete this Review?"}
          warningText={"This action is irreversable!"}
          viewText={"Review Details"}
          viewSubject={"Total Ratings"}
          replyText={"Review"}
        />
      );
    },
  },
];
