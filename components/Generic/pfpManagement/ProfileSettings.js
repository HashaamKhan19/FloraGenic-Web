import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import EditAdmin from "./EditAdmin";
import EditCustomer from "./EditCustomer";
import EditGardener from "./EditGardener";
import EditNurseryOwner from "./EditNurseryOwner";
import Person from "@mui/icons-material/Person";
const ProfileSettings = ({ control, getValues, setValue, errors }) => {
  const [userType, setUserType] = React.useState("Admin");

  return (
    <>
      <div className="flex justify-center">
        <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <Person sx={{ mr: 1 }} fontSize="large" />
            Edit Profile
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
              {userType == "Admin" ? (
                <EditAdmin
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  errors={errors}
                />
              ) : userType == "Gardener" ? (
                <EditGardener
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  errors={errors}
                />
              ) : userType == "NurseryOwner" ? (
                <EditNurseryOwner
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  errors={errors}
                />
              ) : (
                <EditCustomer
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  errors={errors}
                />
              )}

              <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
                <button
                  type="submit"
                  class="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease"
                >
                  <span class="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                      viewBox="0 0 487 487"
                      class="w-auto h-full opacity-100 object-stretch"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                        fill="#FFF"
                        fill-rule="nonzero"
                        fillOpacity=".1"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                    <svg
                      viewBox="0 0 487 487"
                      class="object-cover w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                        fill="#FFF"
                        fill-rule="nonzero"
                        fillOpacity=".1"
                      ></path>
                    </svg>
                  </span>
                  <Person sx={{ mr: 1 }} fontSize="small" />
                  <span class="relative">Update Profile</span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
    </>
  );
};

export default ProfileSettings;
