import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
export const Navigate = ({title}) => {
    const navigate = useNavigate()
  return (
    <div className=''>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1
            onClick={() => navigate(-1)}
            className="flex gap-3 cursor-pointer"
          >
            <button className="bg-[#C8A44D30] text-sm w-7 h-7 rounded-full flex justify-center items-center text-[#555900]">
              <FaArrowLeft />
            </button>
            <span className="text-lg text-white font-semibold">{title}</span>
          </h1>
          
        </div>
    </div>
  )
}
