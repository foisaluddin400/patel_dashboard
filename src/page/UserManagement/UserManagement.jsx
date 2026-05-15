import React, { useState } from "react";
import { Input, Modal, Pagination, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";

const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy Data
  const dummyUsers = Array.from({ length: 25 }, (_, index) => ({
    key: index + 1,
    no: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `+8801${Math.floor(
      100000000 + Math.random() * 900000000
    )}`,
    country: ["Bangladesh", "USA", "Canada", "UK"][index % 4],
    goal: ["Weight Loss", "Fitness", "Muscle Gain"][index % 3],
    subscription: index % 2 === 0 ? "Premium" : "Basic",
    plan: ["Monthly", "Yearly"][index % 2],
    joinedDate: "15 May 2026",
    blockId: index % 2 === 0,
    image:
      index % 3 === 0
        ? ""
        : `https://avatar.iran.liara.run/public/${index + 1}`,
  }));

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const showModal = (record) => {
    setSelectedUser(record);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Block User
  const handleBlockUnblock = () => {
    message.success("User status updated successfully");
  };

  // Table Columns
  const columns = [
    {
      title: <span className="text-[#888888]">Name</span>,
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          {record.image ? (
            <img
              src={record.image}
              className="w-12 h-12 rounded-full object-cover border border-[#C8A44D30]"
              alt=""
            />
          ) : (
            <div className="w-12 h-12 rounded-full border border-[#C8A44D50] bg-[#C8A44D30] flex items-center justify-center text-white font-semibold uppercase">
              {record.name.slice(0, 2)}
            </div>
          )}

          <div>
            <h2 className="text-sm font-medium text-white">
              {record.name}
            </h2>
            <p className="text-xs text-[#888888]">
              {record.email}
            </p>
          </div>
        </div>
      ),
    },

    {
      title: <span className="text-[#888888]">Country</span>,
      dataIndex: "country",
      render: (text) => (
        <span className="text-[#888888]">{text}</span>
      ),
    },

    {
      title: <span className="text-[#888888]">Goal</span>,
      dataIndex: "goal",
      render: (text) => (
        <span className="text-[#888888]">{text}</span>
      ),
    },

    {
      title: <span className="text-[#888888]">Subscription</span>,
      dataIndex: "subscription",
      render: (text) => (
        <span className="text-[#888888]">{text}</span>
      ),
    },

    {
      title: <span className="text-[#888888]">Plan</span>,
      dataIndex: "plan",
      render: (text) => (
        <span className="text-[#888888]">{text}</span>
      ),
    },

    {
      title: <span className="text-[#888888]">Joined Date</span>,
      dataIndex: "joinedDate",
      render: (text) => (
        <span className="text-[#888888]">{text}</span>
      ),
    },

    {
      title: <span className="text-[#888888]">Action</span>,
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          {/* View */}
          <button
            onClick={() => showModal(record)}
            className="w-9 h-9 rounded-lg bg-[#C8A44D20] border border-[#C8A44D30] flex items-center justify-center text-[#C8A44D] hover:scale-105 duration-300"
          >
            <LuEye size={18} />
          </button>

          {/* Block */}
          <button
            onClick={handleBlockUnblock}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-white duration-300 ${
              record.blockId
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            <MdBlockFlipped />
          </button>
        </div>
      ),
    },
  ];

  // Pagination
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedUsers = dummyUsers.slice(start, end);

  return (
    <div className="p-4 h-[87vh] overflow-auto bg-[#111111]">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <Navigate title={"User Management"} />

        <Input
          placeholder="Search by name..."
          prefix={<SearchOutlined />}
          className="custom-input"
          style={{
            maxWidth: "320px",
            height: "42px",
            background: "#1A1A1A",
            border: "1px solid #2A2A2A",
            color: "#888888",
          }}
        />
      </div>

      {/* Table */}
      <Table
        dataSource={paginatedUsers}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        className="custom-table"
      />

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={dummyUsers.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        centered
        onCancel={handleCancel}
        footer={null}
        width={620}
        className="custom-user-modal"
      >
        {selectedUser && (
          <div className="bg-[#212121] -m-6 -ml-8 -mr-8 rounded-2xl p-6 text-white">
            {/* Profile */}
            <div className="flex flex-col items-center">
              {selectedUser.image ? (
                <img
                  src={selectedUser.image}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#C8A44D30]"
                  alt=""
                />
              ) : (
                <div className="w-28 h-28 rounded-full border-4 border-[#C8A44D40] bg-[#C8A44D30] flex items-center justify-center text-3xl font-bold uppercase">
                  {selectedUser.name.slice(0, 2)}
                </div>
              )}

              <h2 className="text-2xl font-semibold mt-4">
                {selectedUser.name}
              </h2>

              <p className="text-[#888888] text-sm mt-1">
                {selectedUser.email}
              </p>
            </div>

            {/* Info */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 bg-[#2A2A2A] p-3 rounded-xl">
                <AiOutlinePhone className="text-[#C8A44D]" size={20} />
                <span className="text-[#BBBBBB]">
                  {selectedUser.phone}
                </span>
              </div>

              <div className="flex items-center gap-3 bg-[#2A2A2A] p-3 rounded-xl">
                <GoLocation className="text-[#C8A44D]" size={20} />
                <span className="text-[#BBBBBB]">
                  {selectedUser.country}
                </span>
              </div>

              <div className="flex items-center gap-3 bg-[#2A2A2A] p-3 rounded-xl">
                <AiOutlineMail className="text-[#C8A44D]" size={20} />
                <span className="text-[#BBBBBB]">
                  {selectedUser.email}
                </span>
              </div>
            </div>

            {/* Extra Info */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#2A2A2A] p-4 rounded-xl">
                <p className="text-[#888888] text-sm">Goal</p>
                <h3 className="text-white mt-1">
                  {selectedUser.goal}
                </h3>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-xl">
                <p className="text-[#888888] text-sm">Plan</p>
                <h3 className="text-white mt-1">
                  {selectedUser.plan}
                </h3>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-xl">
                <p className="text-[#888888] text-sm">
                  Subscription
                </p>
                <h3 className="text-white mt-1">
                  {selectedUser.subscription}
                </h3>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-xl">
                <p className="text-[#888888] text-sm">
                  Joined
                </p>
                <h3 className="text-white mt-1">
                  {selectedUser.joinedDate}
                </h3>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UserManagement;