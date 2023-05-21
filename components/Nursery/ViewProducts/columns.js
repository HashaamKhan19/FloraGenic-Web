import Image from "next/legacy/image";
import ActionIcons from "../../Generic/ActionIcons";
import BlockToggle from "../../Generic/BlockToggle";
import placeholder from "../../../assets/images/placeholder.png";

export const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
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
    field: "category",
    headerName: "Category",
    width: 100,
    valueGetter: (params) => {
      return params.row.category.name;
    },
  },
  {
    field: "name",
    headerName: "Product Name",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    flex: 1,
  },
  {
    field: "nursery",
    headerName: "Nursery",
    width: 280,
    flex: 1,
    valueGetter: (params) => {
      return params.row.nursery.name;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => {
      return params.row.hidden ? "Hidden" : "Visible";
    },
    renderCell: (params) => {
      return (
        <BlockToggle
          blocked={params.row.hidden}
          id={params.row.id}
          type="product"
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
          type="product"
          text={"Are you sure you want to delete this product?"}
          viewText={"Details of Product Here"}
          warningText={"This action cannot be undone."}
          data={params?.row}
        />
      );
    },
  },
];
