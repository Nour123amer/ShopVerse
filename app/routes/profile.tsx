import { useEffect, useState } from "react";
import { toast } from "sonner";
import { API_URL } from "~/lib/api";
import { getMe, refreshToken } from "~/services/auth.service";

type UserData = {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    id: string;
  }
}
export default function AccountSettings() {
  const [userData, setUserData] = useState<UserData | null>(null);


  useEffect(() => {
    console.log("Access:", localStorage.getItem("token"));
    console.log("Refresh:", localStorage.getItem("refreshToken"));
    const fetchUser = async () => {
      console.log("token => ", localStorage.getItem("token"));
      const userInfo = await getMe();
      const res = await userInfo.json();
      console.log("user data =>", userInfo);
      console.log("ussser data =>", res?.data?.id)

      console.log("result =>", res)
      if (!userInfo.ok) {
        const storedRefreshToken = localStorage.getItem("refreshToken") || "";
        console.log("refresh token", storedRefreshToken);
        const refreshRes = await refreshToken({
          refreshToken: storedRefreshToken
        });

        console.log("refresh status", refreshRes.status);


        if (refreshRes.ok) {
          const refreshResult = await refreshRes.json();
          localStorage.setItem("token", refreshResult?.data?.accessToken);
          localStorage.setItem("refreshToken", refreshResult?.data?.refreshToken);
          const newUserInfo = await getMe();
          const newRes = await newUserInfo.json();
          console.log("refreshResult", refreshResult)
          setUserData(newRes)
          console.log("new result", newRes)
        }
      } else {
        setUserData(res)
      }
    }
    fetchUser()
    //     const payload = JSON.parse(
    //   atob(localStorage.getItem("token").split(".")[1])
    // );

    // console.log("Expires At:", new Date(payload.exp * 1000));
    // console.log("Now:", new Date());

  }, [])


  const deleteAccount = async (id: string) => {
    console.log("user id", userData?.data?.id)
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    if (res.status === 403 || res.status === 401) toast.error("Account deletion failed. Please try again later.")

    console.log("delete result", res)

  }


  return (
    <div className="bg-[#fcfcfc] min-h-screen rounded-2xl px-4 py-12 sm:px-6 lg:px-8 max-w-7xl  mx-auto font-sans antialiased text-[#1a1a1a] space-y-8">

      <div>
        <h1 className="text-2xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-xs text-gray-400 mt-1">Manage your profile information, security, and notification preferences.</p>
      </div>

      {/* 1. Personal Information Card */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-50">
          <h2 className="text-sm font-bold">Personal Information</h2>
          <span className="text-gray-400">
            {/* User ID / Profile Icon */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
        </div>

        <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
          <div className="relative shrink-0 mx-auto md:mx-0">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100">
              <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#202938] hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md border-2 border-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500">Full Name</label>
              <input type="text" defaultValue={userData?.data?.firstName} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs bg-gray-50/50 focus:outline-none focus:border-gray-400" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500">Email Address</label>
              <input type="email" defaultValue={userData?.data?.email} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs bg-gray-50/50 focus:outline-none focus:border-gray-400" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500">Phone Number</label>
              <input type="text" defaultValue={userData?.data?.phoneNumber} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs bg-gray-50/50 focus:outline-none focus:border-gray-400" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500">Location</label>
              <div className="relative">
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs bg-gray-50/50 focus:outline-none focus:border-gray-400 appearance-none cursor-pointer">
                  <option>New York, USA</option>
                  <option>Cairo, Egypt</option>
                  <option>London, UK</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]">&darr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Security Card */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-50">
          <h2 className="text-sm font-bold">Security</h2>
          <span className="text-gray-400">
            {/* Lock Icon */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500">Current Password</label>
              <input type="password" placeholder="••••••••••••" className="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs bg-gray-50/50 focus:outline-none focus:border-gray-400" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500">New Password</label>
              <input type="password" placeholder="Enter new password" className="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs bg-gray-50/50 focus:outline-none focus:border-gray-400" />

              <div className="space-y-1 pt-1">
                <div className="flex gap-1">
                  <div className="h-1 flex-1 bg-gray-900 rounded-full"></div>
                  <div className="h-1 flex-1 bg-gray-900 rounded-full"></div>
                  <div className="h-1 flex-1 bg-gray-100 rounded-full"></div>
                  <div className="h-1 flex-1 bg-gray-100 rounded-full"></div>
                </div>
                <p className="text-[10px] text-gray-400 font-medium">Strength: <span className="text-gray-700 font-bold">Medium</span></p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-start gap-3">
              <span className="text-gray-700 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <div>
                <h4 className="text-xs font-bold">Two-Factor Authentication</h4>
                <p className="text-[10px] text-gray-400 mt-0.5">Currently enabled for your account via SMS.</p>
              </div>
            </div>
            <button className="text-xs font-semibold border border-gray-200 bg-white hover:bg-gray-50 px-3 py-1.5 rounded-lg shadow-sm transition-colors">
              Manage
            </button>
          </div>
        </div>
      </div>

      {/* 3. Preferences Card */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-50">
          <h2 className="text-sm font-bold">Preferences</h2>
          <span className="text-gray-400">
            {/* Bell Icon */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </span>
        </div>

        <div className="p-6 divide-y divide-gray-50">
          <div className="flex items-center justify-between pb-4">
            <div>
              <h4 className="text-xs font-bold">Email Notifications</h4>
              <p className="text-[10px] text-gray-400 mt-0.5">Receive updates about your orders and rewards.</p>
            </div>
            {/* Toggle Active */}
            <button className="w-9 h-5 bg-[#1f2937] rounded-full relative p-0.5 transition-colors duration-200 focus:outline-none">
              <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
            </button>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div>
              <h4 className="text-xs font-bold">SMS Marketing</h4>
              <p className="text-[10px] text-gray-400 mt-0.5">Flash sales and exclusive seasonal collections.</p>
            </div>
            {/* Toggle Inactive */}
            <button className="w-9 h-5 bg-gray-200 rounded-full relative p-0.5 transition-colors duration-200 focus:outline-none">
              <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
        <button

          onClick={() => { if (userData?.data?.id) { deleteAccount(userData?.data?.id) } }}
          className="flex items-center cursor-pointer p-2 rounded-lg gap-1.5 text-xs font-bold text-red-500 hover:text-red-600 hover:bg-gray-600 hover:text-white transition-colors">
          {/* Trash Icon */}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete Account
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button className="flex-1 sm:flex-none border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-colors">
            Discard
          </button>
          <button
            className="flex-1 sm:flex-none bg-[#202938] hover:bg-[#2b364a] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-colors">
            Save Changes
          </button>
        </div>
      </div>

    </div>
  );
}