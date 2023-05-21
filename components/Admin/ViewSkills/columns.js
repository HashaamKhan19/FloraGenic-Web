import Image from "next/legacy/image";
import ActionIcons from "../../Generic/ActionIcons";
import BlockToggle from "../../Generic/BlockToggle";
import placeholder from "../../../assets/images/placeholder.png";

export const columns = [
  { field: "id", headerName: "ID", width: 70 },
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
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => {
      return params.row.hiddenStatus ? "Hidden" : "Visible";
    },
    renderCell: (params) => {
      return (
        <BlockToggle
          blocked={params.row.hiddenStatus}
          id={params.row.id}
          type="skill"
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
          type="skill"
          text={"Are you sure you want to delete this skill?"}
          viewText={"Details of Skill Here"}
          warningText={"This action cannot be undone."}
          data={params?.row}
        />
      );
    },
  },
];
