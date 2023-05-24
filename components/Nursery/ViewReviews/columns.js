import Ratings from "../../Generic/Ratings";
import ReviewActions from "../../Generic/ReviewActions";

export const columns = [
  { field: "id", headerName: "ID", width: 40 },
  { field: "productType", headerName: "Type", width: 160 },
  {
    field: "name",
    headerName: "Added By",
    width: 150,
    valueGetter: (params) => {
      return `${params.row?.customerDetails?.firstName} ${params.row?.customerDetails?.lastName}`;
    },
  },
  {
    field: "date",
    headerName: "Added On",
    width: 150,
    valueGetter: (params) => {
      return new Date(parseInt(params.row.createdAt)).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );
    },
  },
  {
    field: "product",
    headerName: "Product",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return params.row.productDetails.name;
    },
  },
  {
    field: "rating",
    headerName: "Ratings",
    width: 150,
    headerAlign: "center",
    renderCell: (params) => {
      return <Ratings value={params.row.rating} />;
    },
  },
  {
    field: "review",
    headerName: "Review",
    flex: 1,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <ReviewActions
          data={params.row}
          type="review"
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
