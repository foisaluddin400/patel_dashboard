import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import { FaChevronDown } from "react-icons/fa";
import AddContent from "./AddContent";

const ExerciseLibrary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy Data

const dummyUsers = Array.from({ length: 25 }, (_, index) => ({
  key: index + 1,

  slNo: index + 1,

  exerciseName: [
    "Bench Press",
    "Squat",
    "Deadlift",
    "Pull Up",
    "Shoulder Press",
  ][index % 5],

  muscleGroup: [
    "Chest",
    "Legs",
    "Back",
    "Arms",
    "Shoulders",
  ][index % 5],

  equipment: [
    "Barbell",
    "Dumbbell",
    "Machine",
    "Bodyweight",
    "Cable",
  ][index % 5],

  video:
    "https://www.w3schools.com/html/mov_bbb.mp4",

  thumbnail:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500",

  description:
    "This exercise helps improve strength and muscle endurance.",

  duration: `${10 + index} mins`,

  level:
    index % 2 === 0 ? "Beginner" : "Advanced",
}));

  // Modal State
    const [openAddModal, setOpenAddModal] = useState(false);
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
    title: <span className="text-[#888888]">SL No.</span>,
    dataIndex: "slNo",
    render: (text) => (
      <span className="text-[#888888] font-medium">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">Video</span>,
    key: "video",
    render: (_, record) => (
      <img
        src={record.thumbnail}
        alt=""
        className="w-20 h-14 rounded-lg object-cover border border-[#2A2A2A]"
      />
    ),
  },

  {
    title: (
      <span className="text-[#888888]">
        EXERCISE NAME
      </span>
    ),
    dataIndex: "exerciseName",
    render: (text) => (
      <span className="text-white font-medium">
        {text}
      </span>
    ),
  },

  {
    title: (
      <span className="text-[#888888]">
        MUSCLE GROUP
      </span>
    ),
    dataIndex: "muscleGroup",
    render: (text) => (
      <span className="text-[#888888]">
        {text}
      </span>
    ),
  },

  {
    title: (
      <span className="text-[#888888]">
        EQUIPMENT
      </span>
    ),
    dataIndex: "equipment",
    render: (text) => (
      <span className="text-[#888888]">
        {text}
      </span>
    ),
  },

  {
    title: <span className="text-[#888888]">View</span>,
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
        <Navigate title={"Excercise Library"} />

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
              <button onClick={() => setOpenAddModal(true)} className="bg-[#7CFF3A14] px-5 border border-[#7CFF3A33] rounded-lg text-[#7CFF3A]">+Content</button>
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
<Modal
  open={isModalOpen}
  centered
  onCancel={handleCancel}
  footer={null}
  width={700}
  className="custom-user-modal"
>
  {selectedUser && (
    <div className="bg-[#212121] -m-6 -ml-8 -mr-8 rounded-2xl p-6 text-white">
      
      {/* Video */}
      <div className="rounded-2xl overflow-hidden border border-[#2A2A2A]">
        <video
          controls
          className="w-full h-[350px] object-cover"
        >
          <source
            src={selectedUser.video}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Exercise Info */}
      <div className="mt-6">
        <h2 className="text-3xl font-semibold">
          {selectedUser.exerciseName}
        </h2>

        <p className="text-[#888888] mt-2">
          {selectedUser.description}
        </p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-[#2A2A2A] p-4 rounded-xl">
          <p className="text-[#888888] text-sm">
            Muscle Group
          </p>

          <h3 className="text-white mt-1">
            {selectedUser.muscleGroup}
          </h3>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-xl">
          <p className="text-[#888888] text-sm">
            Equipment
          </p>

          <h3 className="text-white mt-1">
            {selectedUser.equipment}
          </h3>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-xl">
          <p className="text-[#888888] text-sm">
            Duration
          </p>

          <h3 className="text-white mt-1">
            {selectedUser.duration}
          </h3>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-xl">
          <p className="text-[#888888] text-sm">
            Level
          </p>

          <h3 className="text-white mt-1">
            {selectedUser.level}
          </h3>
        </div>
      </div>
    </div>
  )}
</Modal>
  <AddContent  openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}></AddContent>
    </div>
  );
};

export default ExerciseLibrary;
