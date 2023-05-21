import Image from "next/legacy/image";
import ActionIcons from "../../Generic/ActionIcons";
import BlockToggle from "../../Generic/BlockToggle";
import placeholder from "../../../assets/images/placeholder.png";

const formatUserType = (userType) => {
  switch (userType) {
    case "NurseryOwner":
      return "Nursery Owner";
    default:
      return userType;
  }
};

const formatGender = (gender) => {
  switch (gender) {
    case "male":
      return "Male";
    case "female":
      return "Female";
    default:
      return gender;
  }
};

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
          src={params?.row?.details?.image || placeholder}
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
  {
    field: "fullName",
    headerName: "Full name",
    width: 200,
    flex: 1,
    valueGetter: (params) =>
      params?.row?.details?.firstName && params?.row?.details?.lastName
        ? `${params?.row?.details?.firstName} ${params?.row?.details?.lastName}`
        : "Not Provided",
  },
  {
    field: "userType",
    headerName: "Role",
    width: 130,
    valueGetter: (params) => formatUserType(params?.row?.userType),
  },
  { field: "email", headerName: "Email Address", width: 200, flex: 1 },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 200,
    flex: 1,
    valueGetter: (params) =>
      params?.row?.details?.phoneNumber || "Not Provided",
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 80,
    valueGetter: (params) =>
      params?.row?.details?.gender
        ? formatGender(params?.row?.details?.gender)
        : "N/A",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => (params?.row?.bannedStatus ? "Blocked" : "Active"),
    renderCell: (params) => {
      return (
        <BlockToggle
          blocked={params.row.bannedStatus}
          id={params.row.id}
          type="user"
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
          type="user"
          text={"Are you sure you want to delete this User?"}
          warningText={"This action is irreversable!"}
          viewText={"User Data Here"}
          data={params?.row}
        />
      );
    },
  },
];
