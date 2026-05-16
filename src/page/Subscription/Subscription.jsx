import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import { FaChevronDown } from "react-icons/fa";

const Subscription = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy Data
  const dummyUsers = Array.from({ length: 25 }, (_, index) => ({
    key: index + 1,
    subId: `SUB-${1000 + index}`,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    image:
      index % 3 === 0
        ? ""
        : `https://avatar.iran.liara.run/public/${index + 1}`,

    platform: index % 2 === 0 ? "iOS" : "Android",

    productId: `PROD-${2000 + index}`,

    started: "15 May 2026",

    renewal: "15 Jun 2026",

    amount: index % 2 === 0 ? "$19.99" : "$49.99",

    status: index % 2 === 0 ? "Active" : "Expired",

    phone: `+8801${Math.floor(100000000 + Math.random() * 900000000)}`,
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
      title: <span className="text-[#888888]">Sub ID</span>,
      dataIndex: "subId",
      render: (text) => (
        <span className="text-[#888888] font-medium">{text}</span>
      ),
    },

    {
      title: <span className="text-[#888888]">User</span>,
      key: "user",
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
            <h2 className="text-sm font-medium text-white">{record.name}</h2>

            <p className="text-xs text-[#888888]">{record.email}</p>
          </div>
        </div>
      ),
    },

    {
      title: <span className="text-[#888888]">Platform</span>,
      dataIndex: "platform",
      render: (text) => (
        <div
          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${
            text === "iOS"
              ? "bg-[#C8A44D20] border-[#C8A44D30] text-[#C8A44D]"
              : "bg-[#1E3A8A20] border-[#1E3A8A40] text-blue-400"
          }`}
        >
          {text}
        </div>
      ),
    },

    {
      title: <span className="text-[#888888]">Product ID</span>,
      dataIndex: "productId",
      render: (text) => <span className="text-[#888888]">{text}</span>,
    },

    {
      title: <span className="text-[#888888]">Started</span>,
      dataIndex: "started",
      render: (text) => <span className="text-[#888888]">{text}</span>,
    },

    {
      title: <span className="text-[#888888]">Renewal</span>,
      dataIndex: "renewal",
      render: (text) => <span className="text-[#888888]">{text}</span>,
    },

    {
      title: <span className="text-[#888888]">Amount</span>,
      dataIndex: "amount",
      render: (text) => <span className="text-white font-medium">{text}</span>,
    },

    {
      title: <span className="text-[#888888]">Status</span>,
      dataIndex: "status",
      render: (text) => (
        <div
          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${
            text === "Active"
              ? "bg-green-500/10 border-green-500/20 text-green-500"
              : "bg-red-500/10 border-red-500/20 text-red-500"
          }`}
        >
          {text}
        </div>
      ),
    },

    {
      title: <span className="text-[#888888]">Action</span>,
      key: "action",
      render: (_, record) => (
        <button
          onClick={() => showModal(record)}
          className="w-9 h-9 rounded-lg bg-[#C8A44D20] border border-[#C8A44D30] flex items-center justify-center text-[#C8A44D] hover:scale-105 duration-300"
        >
          <LuEye size={18} />
        </button>
      ),
    },
  ];
  // Pagination
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedUsers = dummyUsers.slice(start, end);

  return (
    <div className="p-2 h-[87vh] overflow-auto bg-[#111111]">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <Navigate title={"Subscriptions"} />
        <div className="flex gap-4">


<div className="flex gap-4">
  <div className="border border-[#22c55ec0] rounded-lg px-6 py-2 bg-[#22c55e1a] text-[#22C55E] gap-2 flex">
    7 <span className="">Active</span>
  </div>
  <div className="border border-[#ef4444b0] rounded-lg px-6 py-2 bg-[#ef444423] text-[#ef4444d8] gap-2 flex">
    7 <span className="">Expired</span>
  </div>
</div>


          <Select
            className="custom-select "
            placeholder="Select Status"
            dropdownClassName="custom-select-dropdown"
            suffixIcon={
              <FaChevronDown className="text-[#C9C6D6] text-sm mt-2" />
            }
            allowClear
            onChange={(value) => {
              if (!value || value === "all") {
                setStatus(undefined); // 🔥 nothing sent
              } else {
                setStatus(value);
              }
              setCurrentPage(1);
            }}
          >
            <Option value="all">All</Option>
            <Option value="block">Active</Option>
            <Option value="unblock">Expired</Option>
          </Select>
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
                <span className="text-[#BBBBBB]">{selectedUser.phone}</span>
              </div>

              <div className="flex items-center gap-3 bg-[#2A2A2A] p-3 rounded-xl">
                <GoLocation className="text-[#C8A44D]" size={20} />
                <span className="text-[#BBBBBB]">{selectedUser.country}</span>
              </div>

              <div className="flex items-center gap-3 bg-[#2A2A2A] p-3 rounded-xl">
                <AiOutlineMail className="text-[#C8A44D]" size={20} />
                <span className="text-[#BBBBBB]">{selectedUser.email}</span>
              </div>
            </div>

            {/* Extra Info */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#2A2A2A] p-4 rounded-xl">
                <p className="text-[#888888] text-sm">Goal</p>
                <h3 className="text-white mt-1">{selectedUser.goal}</h3>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-xl">
                <p className="text-[#888888] text-sm">Plan</p>
                <h3 className="text-white mt-1">{selectedUser.plan}</h3>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-xl">
                <p className="text-[#888888] text-sm">Subscription</p>
                <h3 className="text-white mt-1">{selectedUser.subscription}</h3>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-xl">
                <p className="text-[#888888] text-sm">Joined</p>
                <h3 className="text-white mt-1">{selectedUser.joinedDate}</h3>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Subscription;
