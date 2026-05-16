import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import { FaChevronDown } from "react-icons/fa";
import ReloadIcon from "../../components/icon/ReloadIcon";
import CompletedIcon from "../../components/icon/CompletedIcon";

const Regeneration = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy Data
 const dummyUsers = Array.from({ length: 25 }, (_, index) => ({
  key: index + 1,

  requestId: `REQ-${1000 + index}`,

  name: `User ${index + 1}`,

  email: `user${index + 1}@example.com`,

  image:
    index % 3 === 0
      ? ""
      : `https://avatar.iran.liara.run/public/${index + 1}`,

  reason: [
    "Meal Plan Update",
    "Workout Change",
    "Calories Adjustment",
  ][index % 3],

  goal: [
    "Weight Loss",
    "Muscle Gain",
    "Maintenance",
  ][index % 3],

  monthlyUsage: `${10 + index} Requests`,

  date: "15 May 2026",

  duration: `${7 + index} Days`,

  status: index % 2 === 0 ? "Completed" : "Pending",

  phone: `+8801${Math.floor(
    100000000 + Math.random() * 900000000
  )}`,
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
    title: <span className="text-[#888888]">Request ID</span>,
    dataIndex: "requestId",
    render: (text) => (
      <span className="text-[#888888] font-medium">
        {text}
      </span>
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
    title: <span className="text-[#888888]">Reason</span>,
    dataIndex: "reason",
    render: (text) => (
      <span className="text-[#888888]">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">Goal</span>,
    dataIndex: "goal",
    render: (text) => (
      <span className="text-[#888888]">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">Monthly Usage</span>,
    dataIndex: "monthlyUsage",
    render: (text) => (
      <span className="text-[#888888] font-medium">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">Date</span>,
    dataIndex: "date",
    render: (text) => (
      <span className="text-[#888888]">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">Duration</span>,
    dataIndex: "duration",
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
          text === "Completed"
            ? "bg-green-500/10 border-green-500/20 text-green-500"
            : "bg-yellow-500/10 border-yellow-500/20 text-yellow-500"
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
        <Navigate title={"Regeneration"} />

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
            <Option value="block">Complete</Option>
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
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-[#FFFFFF14] bg-[#181818] p-4 w-full rounded-2xl">
          <div className="bg-[#C8A44D12] border border-[#C8A44D25]  rounded-2xl w-[45px] h-[45px] flex justify-center items-center text-2xl">
           <ReloadIcon color={'#C8A44D'}></ReloadIcon>
          </div>
          <span className="text-white text-4xl py-3 ">8</span>
          <h1 className="text-[#555555] font-semibold">Total Requests</h1>
        </div>
        <div className="border border-[#FFFFFF14] bg-[#181818] p-4 w-full rounded-2xl">
           <div className="bg-[#7B8FFF12] border border-[#7B8FFF25]  rounded-2xl w-[45px] h-[45px] flex justify-center items-center text-2xl">
           <CompletedIcon color={'#7B8FFF'}></CompletedIcon>
          </div>
          <span className="text-white text-4xl py-3 ">8</span>
          <h1 className="text-[#555555] font-semibold">Total Requests</h1>
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

  
    </div>
  );
};

export default Regeneration;
