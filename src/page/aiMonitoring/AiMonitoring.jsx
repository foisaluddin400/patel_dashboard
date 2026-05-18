import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import { FaChevronDown } from "react-icons/fa";
import AiMonitoringGraph from "../../components/Dashboard/AiMonitoringGraph";
import AiMonitoringIco from "../../components/icon/AiMonitoringIco";
import MarkIco from "../../components/icon/MarkIco";
import CrosIco from "../../components/icon/CrosIco";
import TimeIco from "../../components/icon/TimeIco";
import DollarIco from "../../components/icon/DollarIco";

const AiMonitoring = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy Data

// Dummy Data
const dummyUsers = Array.from({ length: 25 }, (_, index) => ({
  key: index + 1,

  logId: `LOG-${1000 + index}`,

  name: `User ${index + 1}`,

  email: `user${index + 1}@example.com`,

  image:
    index % 3 === 0
      ? ""
      : `https://avatar.iran.liara.run/public/${index + 1}`,

  type:
    index % 3 === 0
      ? "Meal Plan"
      : index % 3 === 1
      ? "Workout Plan"
      : "AI Chat",

  tokens: `${1000 + index * 120}`,

  cost: `$${(5 + index * 0.8).toFixed(2)}`,

  duration: `${2 + index}s`,

  time: "15 May 2026, 10:30 AM",

  status: index % 2 === 0 ? "Success" : "Failed",
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

// Table Columns
const columns = [
  {
    title: <span className="text-[#888888]">Log ID</span>,
    dataIndex: "logId",
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
    title: <span className="text-[#888888]">Type</span>,
    dataIndex: "type",
    render: (text) => (
      <span className="text-[#888888]">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">Tokens</span>,
    dataIndex: "tokens",
    render: (text) => (
      <span className="text-[#888888] font-medium">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">Cost</span>,
    dataIndex: "cost",
    render: (text) => (
      <span className="text-white font-medium">
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
    title: <span className="text-[#888888]">Time</span>,
    dataIndex: "time",
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
          text === "Success"
            ? "bg-green-500/10 border-green-500/20 text-green-500"
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
        <Navigate title={"AI MONITORING"} />

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
      <div className="grid grid-cols-5 gap-4">
        <div className="border border-[#FFFFFF14] bg-[#181818] p-4 w-full rounded-2xl">
          <div className="bg-[#7cff3a1f] w-[35px] h-[35px] flex justify-center items-center rounded border border-[#7cff3a46]"><AiMonitoringIco color={'#7CFF3A'}></AiMonitoringIco></div>
          <span className="text-white text-4xl py-3 ">8</span>
          <h1 className="text-[#555555] font-semibold">Total AI Calls</h1>
        </div>
        <div className="border border-[#FFFFFF14] bg-[#181818] p-4 w-full rounded-2xl">
         <div className="bg-[#22C55E15] border border-[#22C55E30] w-[35px] h-[35px] flex justify-center items-center rounded"><MarkIco></MarkIco></div>
          <span className=" text-white text-4xl py-3 ">8</span>
          <h1 className="text-[#555555] font-semibold">Successful</h1>
        </div>
        <div className="border border-[#FFFFFF14] bg-[#181818] p-4 w-full rounded-2xl">
          <div className="bg-[#EF444415] border border-[#EF444430] w-[35px] h-[35px] flex justify-center items-center rounded"><CrosIco></CrosIco></div>
          <span className="text-white text-4xl py-3 ">8</span>
          <h1 className="text-[#555555] font-semibold">Field</h1>
        </div>
        <div className="border border-[#FFFFFF14] bg-[#181818] p-4 w-full rounded-2xl">
         <div className="bg-[#7B8FFF15] border border-[#7B8FFF30] w-[35px] h-[35px] flex justify-center items-center rounded"><TimeIco></TimeIco></div>
          <span className="text-white text-4xl py-3 ">8</span>
          <h1 className="text-[#555555] font-semibold">Avg Response Time</h1>
        </div>
        <div className="border border-[#FFFFFF14] bg-[#181818] p-4 w-full rounded-2xl">
         <div className="bg-[#f59f0b2d] w-[35px] h-[35px] flex justify-center items-center rounded"><DollarIco color={'#F59E0B'}></DollarIco></div>
          <span className="text-white text-4xl py-3 ">8</span>
          <h1 className="text-[#555555] font-semibold">Monthly AI Cost</h1>
        </div>
      </div>

      <AiMonitoringGraph></AiMonitoringGraph>
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

export default AiMonitoring;
