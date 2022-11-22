import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import PeopleIcon from '@mui/icons-material/People'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import PersonIcon from '@mui/icons-material/Person'

const StatisticsCards = () => {
  return (
    <>
      <div class="flex flex-wrap">
        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="uppercase font-bold text-xs"> Total Admins</h5>
                  <span class="font-semibold text-xl">12</span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-emerald-50">
                    <ManageAccountsIcon color="primary" />
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-red-500 mr-2">+2</span>
                <span class="whitespace-nowrap">Since last month </span>
              </p>
            </div>
          </div>
        </div>

        <div class=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    Total Vendors
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">
                    19
                  </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-50">
                    <PeopleIcon color="primary" />
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-red-500 mr-2">+12</span>
                <span class="whitespace-nowrap">Since last week </span>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    Total Nurseries
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">3</span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-50">
                    <WarehouseIcon color="primary" />
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-red-500 mr-2">+1</span>
                <span class="whitespace-nowrap">Since last month </span>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    Total Gardeners
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">5</span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-50">
                    <PersonIcon color="primary" />
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-red-500 mr-2">+1</span>
                <span class="whitespace-nowrap">Since last month </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer class="pt-8 pb-6"></footer>
    </>
  )
}

export default StatisticsCards
