import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { message, Spin } from "antd";
import { Navigate } from "../../Navigate";


const TermsCondition = () => {
  


  const editor = useRef(null);
  const [content, setContent] = useState("");


  const handleTerms = async () => {
    const data = {
      description: content,
    };


    const res = await addTerms(data).unwrap();
 

    message.success(res?.message);
  };
  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
      height: 600,
    },
    buttons: [
      "image",
      "fontsize",
      "bold",
      "italic",
      "underline",
      "|",
      "font",
      "brush",
      "align",
    ],
  };

  
  return (
    <div className="  p-2 ">
       <Navigate title="Terms & Condition" />

      <JoditEditor
      
          ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
      />

      <div className="mt-5 flex justify-center">
        <button   type="submit"
                // disabled={isLoading}
                  onClick={handleTerms}
                className={`px-4 py-3 rounded text-black flex bg-[#7CFF3A] justify-center items-center gap-2`}
              >
          
                  Update
          
        </button>
      </div>
    </div>
  );
};

export default TermsCondition;
