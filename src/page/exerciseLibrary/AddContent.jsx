import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

const AddContent = ({ openAddModal, setOpenAddModal }) => {
  const [difficulty, setDifficulty] = useState("Beginner");

  const handleCancel = () => {
    setOpenAddModal(false);
  };

  return (
    <Modal
      centered
      open={openAddModal}
      onCancel={handleCancel}
      footer={null}
      width={600}
      className="custom-user-modal"
    >
      <div className="bg-[#212121] -m-6 -ml-8 -mr-8 rounded-2xl p-6 text-white">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6">
          Add Exercise Content
        </h2>

        {/* Form */}
        <div className="space-y-5">

          {/* Video URL */}
          <div>
            <label className="text-sm text-[#888888] mb-2 block">
              Video URL Link
            </label>

            <Input
              placeholder="Enter video URL"
              className="custom-input"
              style={{
                height: "45px",
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                color: "#fff",
              }}
            />
          </div>

          {/* Exercise Name */}
          <div>
            <label className="text-sm text-[#888888] mb-2 block">
              Exercise Name
            </label>

            <Input
              placeholder="Enter exercise name"
              className="custom-input"
              style={{
                height: "45px",
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                color: "#fff",
              }}
            />
          </div>

          {/* Muscle Group */}
          <div>
            <label className="text-sm text-[#888888] mb-2 block">
              Muscle Group
            </label>

            <Input
              placeholder="Enter muscle group"
              className="custom-input"
              style={{
                height: "45px",
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                color: "#fff",
              }}
            />
          </div>

          {/* Equipment */}
          <div>
            <label className="text-sm text-[#888888] mb-2 block">
              Equipment
            </label>

            <Input
              placeholder="Enter equipment"
              className="custom-input"
              style={{
                height: "45px",
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                color: "#fff",
              }}
            />
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="text-sm text-[#888888] mb-3 block">
              Difficulty Level
            </label>

            <div className="flex gap-3">
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setDifficulty(level)}
                  className={`px-5 h-11 rounded-xl border duration-300 text-sm font-medium ${
                    difficulty === level
                      ? "bg-[#C8A44D] border-[#C8A44D] text-black"
                      : "bg-[#1A1A1A] border-[#2A2A2A] text-[#BBBBBB]"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <Button
            type="primary"
            block
            style={{
              height: "48px",
              marginTop: "10px",
              background: "#C8A44D",
              border: "none",
              color: "#000",
              fontWeight: "600",
            }}
          >
            Add Exercise
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddContent;