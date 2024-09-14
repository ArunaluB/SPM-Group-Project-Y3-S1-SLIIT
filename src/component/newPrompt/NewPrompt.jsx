/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react'; // Import useRef and useEffect hooks
import "./newPrompt.css";
import fileimg from "../../assets/attachment.png";
import buttonimg from "../../assets/arrow.png";

const NewPrompt = () => {
    const endRef = useRef(null);

    useEffect(() => {
        if (endRef.current) {
            endRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            {/* ADD New Chat */}
            <div className="endChat" ref={endRef}></div>
            <form action="" className="newForm">
                <label htmlFor="file">
                    <img src={fileimg} alt="attachment" />
                </label>
                <input id="file" type="file" multiple={false} hidden />
                <input type="text" placeholder="Ask me Error or Help" />
                <button type="submit">
                    <img src={buttonimg} alt="submit" />
                </button>
            </form>
        </>
    );
};

export default NewPrompt;
