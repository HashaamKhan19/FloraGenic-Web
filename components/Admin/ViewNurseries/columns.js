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
    renderCell: (params) => {
      return (
        <Image
          src={params?.row?.images[0] || placeholder}
          alt={"Nursery Image"}
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
  {
    field: "name",
    headerName: "Nursery Name",
    width: 150,
    flex: 1,
  },
  { field: "email", headerName: "Email Address", width: 250, flex: 1 },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 180,
    flex: 1,
    valueFormatter: (params) => {
      return params.value ? params.value : "Not Available";
    },
  },
  { field: "address", headerName: "Address", width: 200, flex: 1 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <BlockToggle
          blocked={params.row.bannedStatus}
          id={params.row.id}
          type="nursery"
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
          type="nursery"
          text={"Are you sure you want to delete this Nursery?"}
          warningText={"This action is irreversable!"}
          viewText={"Nursery Data Here"}
          data={params?.row}
        />
      );
    },
  },
];
