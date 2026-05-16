import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import { FaChevronDown } from "react-icons/fa";

const SupportTicket = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy Data
const dummyUsers = Array.from({ length: 25 }, (_, index) => ({
  key: index + 1,

  ticketId: `TKT-${1000 + index}`,

  userId: `USR-${5000 + index}`,

  userName: `User ${index + 1}`,

  email: `user${index + 1}@example.com`,

  issue:
    index % 3 === 0
      ? "Payment Issue"
      : index % 3 === 1
      ? "Subscription Problem"
      : "Unable to Login",

  status:
    index % 3 === 0
      ? "Pending"
      : index % 3 === 1
      ? "In Progress"
      : "Resolved",
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
    title: <span className="text-[#888888]">Ticket ID</span>,
    dataIndex: "ticketId",
    render: (text) => (
      <span className="text-[#888888] font-medium">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">User ID</span>,
    dataIndex: "userId",
    render: (text) => (
      <span className="text-[#888888]">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">User Name</span>,
    dataIndex: "userName",
    render: (text) => (
      <span className="text-white font-medium">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">Email</span>,
    dataIndex: "email",
    render: (text) => (
      <span className="text-[#888888]">
        {text}
      </span>
    ),
  },

  {
    title: (
      <span className="text-[#888888]">
        Issue / Reason Submitted
      </span>
    ),
    dataIndex: "issue",
    render: (text) => (
      <span className="text-[#888888]">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">Status</span>,
    dataIndex: "status",
    render: (text) => (
      <div
        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${
          text === "Resolved"
            ? "bg-green-500/10 border-green-500/20 text-green-500"
            : text === "In Progress"
            ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-500"
            : "bg-red-500/10 border-red-500/20 text-red-500"
        }`}
      >
        {text}
      </div>
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
        <Navigate title={"Support Tickets"} />
        <div className="flex gap-4">
          

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
            <Option value="block">Pending</Option>
            <Option value="unblock">In Progress</Option>
             <Option value="unblock">Resolved</Option>
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
<div className="grid grid-cols-3 gap-4">
            <div className="border border-[#FFFFFF14] bg-[#181818] p-6 w-full rounded-2xl">
              <span className="text-[#7CFF3A] text-4xl py-3 ">8</span>
              <h1 className="text-[#555555] font-semibold">Pending</h1>
            </div>
            <div className="border border-[#FFFFFF14] bg-[#181818] p-6 w-full rounded-2xl">
              <span className="text-[#EF4444] text-4xl py-3 ">8</span>
              <h1 className="text-[#555555] font-semibold">In Progress</h1>
            </div>
            <div className="border border-[#FFFFFF14] bg-[#181818] p-6 w-full rounded-2xl">
              <span className="text-white text-4xl py-3 ">8</span>
              <h1 className="text-[#555555] font-semibold">Resolved</h1>
            </div>
          </div>
      {/* Table */}
    <div className="mt-4">
          <Table
        dataSource={paginatedUsers}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        className="custom-table"
      />
    </div>

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

export default SupportTicket;
