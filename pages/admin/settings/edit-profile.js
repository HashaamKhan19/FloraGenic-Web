import React, { useEffect } from "react";
import TaskConfirmationModal from "../../../components/Generic/TaskConfirmationModal";
import { UsersIcon } from "../../../public/icons/UsersIcon";
import ButtonBackground from "../../../assets/Pattern/ButtonBackground";
import { InputLabel, MenuItem } from "@mui/material";
import AddAdmin from "../../../components/Admin/AddAdmin";
import AddGardener from "../../../components/Admin/AddGardener";
import AddNurseryOwner from "../../../components/Admin/AddNurseryOwner";
import AddCustomer from "../../../components/Admin/AddCustomer";
import ControlledSelect from "../../../components/Generic/ControlledComponents/ControlledSelect";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";

import { AuthContext } from "../../../context/authContext";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { user } = React.useContext(AuthContext);
  const userType = user?.userType;

  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [selected, setSelected] = React.useState([]);

  useEffect(() => {
    reset({
      email: user?.email,
      ...user?.details,
    });
  }, [user]);

  return (
    <>
      <div className="flex justify-center ">
        <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <UsersIcon sx={{ mr: 1 }} fontSize="large" />
            Edit Profile
          </h1>

          <form
          //   onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
              {userType == "Admin" ? (
                <AddAdmin
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  errors={errors}
                />
              ) : userType == "Gardener" ? (
                <AddGardener
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  errors={errors}
                  selected={selected}
                  setSelected={setSelected}
                />
              ) : userType == "NurseryOwner" ? (
                <AddNurseryOwner
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  errors={errors}
                />
              ) : (
                <AddCustomer
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  errors={errors}
                />
              )}

              <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
                <button
                  type="submit"
                  className="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease"
                >
                  <ButtonBackground />

                  <UsersIcon sx={{ mr: 1 }} fontSize="small" />
                  <span className="relative">Edit Profile</span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
      <TaskConfirmationModal
        open={modalOpen}
        redirectURL="/admin/viewUsers"
        loading={loading}
        successMessage={successMessage}
        err={errorMessage}
      />
    </>
  );
};

export default EditProfile;
