import React, { useState } from "react";
import { Input } from "antd";
import {
  IoCameraOutline,
  IoPersonOutline,
  IoLockClosedOutline,
} from "react-icons/io5";

const ProfileSetting = () => {
  const [image, setImage] = useState(
    "https://avatar.iran.liara.run/public/12"
  );

  const [profileData, setProfileData] = useState({
    displayName: "Super Admin",
    email: "admin@example.com",
    role: "Super Admin",
    phone: "+8801712345678",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-2 bg-[#111111] min-h-screen text-white">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-6">
        <IoPersonOutline className="text-[#999999] text-2xl" />
        <h1 className="text-[#999999] text-2xl font-semibold">
          Admin Profile
        </h1>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Update */}
        <div className="bg-[#181818] border border-[#FFFFFF14] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <IoPersonOutline className="text-[#999999] text-xl" />
            <h2 className="text-[#999999] text-xl font-semibold">
              Profile Update
            </h2>
          </div>

          {/* Profile Image */}
          <div className="flex items-center gap-5 mb-8">
            <div className="relative w-[120px] h-[120px]">
              <input
                type="file"
                onChange={handleImageChange}
                id="img"
                hidden
              />

              <img
                src={image}
                alt="Profile"
                className="w-[120px] h-[120px] rounded-full object-cover border-4 border-[#FFFFFF14]"
              />

              <label
                htmlFor="img"
                className="absolute bottom-1 right-1 bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
              >
                <IoCameraOutline className="text-black text-lg" />
              </label>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Super Admin
              </h2>

              <p className="text-[#888888] text-sm">
                admin@example.com
              </p>

              <div className="mt-2 inline-flex px-3 py-1 rounded-full text-xs font-medium bg-[#C8A44D20] border border-[#C8A44D30] text-[#C8A44D]">
                Super Admin
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div>
              <label className="text-[#999999] text-sm mb-2 block">
                Display Name
              </label>

              <Input
                value={profileData.displayName}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    displayName: e.target.value,
                  })
                }
                className="custom-input"
                style={{
                  height: "48px",
                  background: "#111111",
                  border: "1px solid #FFFFFF14",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm mb-2 block">
                Email
              </label>

              <Input
                disabled
                value={profileData.email}
                className="custom-input"
                style={{
                  height: "48px",
                  background: "#111111",
                  border: "1px solid #FFFFFF14",
                  color: "#777777",
                }}
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm mb-2 block">
                Role
              </label>

              <Input
                disabled
                value={profileData.role}
                className="custom-input"
                style={{
                  height: "48px",
                  background: "#111111",
                  border: "1px solid #FFFFFF14",
                  color: "#777777",
                }}
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm mb-2 block">
                Phone Number
              </label>

              <Input
                value={profileData.phone}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    phone: e.target.value,
                  })
                }
                className="custom-input"
                style={{
                  height: "48px",
                  background: "#111111",
                  border: "1px solid #FFFFFF14",
                  color: "white",
                }}
              />
            </div>

            <button className="w-full h-12 rounded-xl bg-[#C8A44D] text-black font-semibold hover:opacity-90 duration-300">
              Update Profile
            </button>
          </div>
        </div>

        {/* Password Update */}
        <div className="bg-[#181818] border border-[#FFFFFF14] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <IoLockClosedOutline className="text-[#999999] text-xl" />
            <h2 className="text-[#999999] text-xl font-semibold">
              Update Password
            </h2>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-[#999999] text-sm mb-2 block">
                Current Password
              </label>

              <Input.Password
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    currentPassword: e.target.value,
                  })
                }
                className="custom-input"
                style={{
                  height: "48px",
                  background: "#111111",
                  border: "1px solid #FFFFFF14",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm mb-2 block">
                New Password
              </label>

              <Input.Password
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
                className="custom-input"
                style={{
                  height: "48px",
                  background: "#111111",
                  border: "1px solid #FFFFFF14",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm mb-2 block">
                Confirm Password
              </label>

              <Input.Password
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
                className="custom-input"
                style={{
                  height: "48px",
                  background: "#111111",
                  border: "1px solid #FFFFFF14",
                  color: "white",
                }}
              />
            </div>

            <button className="w-full h-12 rounded-xl bg-[#C8A44D] text-black font-semibold hover:opacity-90 duration-300">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;