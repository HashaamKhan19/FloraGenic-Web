import Image from "next/legacy/image";
import ActionIcons from "../../Generic/ActionIcons";
import BlockToggle from "../../Generic/BlockToggle";
import placeholder from "../../../assets/images/placeholder.png";

export const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "image",
    headerName: "Image",
    width: 70,
    align: "center",
    renderCell: (params) => {
      return (
        <Image
          src={params?.row?.image || placeholder}
          alt={"profile"}
          width={30}
          height={30}
          objectFit="cover"
          style={{
            borderRadius: "50%",
            marginRight: 10,
          }}
        />
      );
    },
  },
  { field: "name", headerName: "Category Name", width: 200 },
  {
    field: "description",
    headerName: "Category Description",
    width: 220,
    flex: 1,
  },
  {
    field: "hiddenStatus",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <BlockToggle
          blocked={params.row.hiddenStatus}
          id={params.row.id}
          type="category"
          hide
        />
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <ActionIcons
          type="category"
          viewText="Details of Category"
          text="Are you sure you want to delete this category?"
          warningText={"This action cannot be undone."}
          data={params?.row}
        />
      );
    },
  },
];
