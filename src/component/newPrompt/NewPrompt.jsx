/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import "./newPrompt.css";
import buttonimg from "../../assets/arrow.png";
import model from "../lib/gemini";
import Markdown from 'react-markdown';

const NewPrompt = () => {
    const endRef = useRef(null);
    const [questions, setQuestions] = useState("");
    const [answers, setAnswers] = useState("");

    // // const result = {
    //     "result": [
    //         {
    //             "step_1": {
    //                 "description": "Explanation of the code",
    //                 "code_snippets": [
    //                     {
    //                         "language": "jsx",
    //                         "code": "/* eslint-disable no-unused-vars */",
    //                         "explanation": "This disables the ESLint rule that warns about unused variables."
    //                     },
    //                     {
    //                         "language": "jsx",
    //                         "code": "import React from 'react';\nimport './dashboard.css';\nimport logo from '../../assets/logo.png';\nimport img1 from '../../assets/chat.png';\nimport img2 from '../../assets/image.png';\nimport img3 from '../../assets/code.png';\nimport buttonimg from '../../assets/arrow.png';",
    //                         "explanation": "Imports React, CSS for styling, and image assets."
    //                     },
    //                     {
    //                         "language": "jsx",
    //                         "code": "const dashboard = () => {",
    //                         "explanation": "Declares the dashboard component."
    //                     },
    //                     {
    //                         "language": "jsx",
    //                         "code": "return (\n    <div className=\"dashboardPage\">",
    //                         "explanation": "Returns JSX code which defines how the component is rendered."
    //                     },
    //                     {
    //                         "language": "jsx",
    //                         "code": "<div className=\"texts\">\n    <div className=\"logo\">\n      <img src={logo} alt=\"logo\" />\n      <h1>PRO MENTER</h1>\n</div>",
    //                         "explanation": "Renders the logo and the title in a div container."
    //                     },
    //                     {
    //                         "language": "jsx",
    //                         "code": "<div className=\"options\">\n  <div className=\"option\">\n    <img src={img1} alt=\"option 1\" />\n    <span>Create a New Chat</span>\n  </div>\n  <div className=\"option\">\n    <img src={img2} alt=\"option 2\" />\n    <span>Download Report</span>\n  </div>\n  <div className=\"option\">\n    <img src={img3} alt=\"option 3\" />\n    <span>Help me with my Code</span>\n  </div>\n</div>",
    //                         "explanation": "Creates three dashboard options, each with an image and a text description."
    //                     },
    //                     {
    //                         "language": "jsx",
    //                         "code": "<div className=\"formContainer\">\n  <form action=\"\">\n    <input type=\"text\" placeholder='Ask me Error or Help' />\n    <button>\n      <img src={buttonimg} alt=\"submit\" />\n    </button>\n  </form>\n</div>",
    //                         "explanation": "Creates a form with a text input field and a submit button."
    //                     },
    //                     {
    //                         "language": "jsx",
    //                         "code": "export default dashboard;",
    //                         "explanation": "Exports the dashboard component."
    //                     }
    //                 ]
    //             },
    //             "step_2": {
    //                 "description": "Identify and explain errors",
    //                 "errors": [
    //                     {
    //                         "issue": "Component naming convention error",
    //                         "description": "Component name should start with a capital letter.",
    //                         "fix": "Rename 'dashboard' to 'Dashboard'."
    //                     },
    //                     {
    //                         "issue": "Missing key prop for list items",
    //                         "description": "Repetitive elements need a key prop.",
    //                         "fix": "Add a unique key prop to each option."
    //                     },
    //                     {
    //                         "issue": "Unused eslint-disable comment",
    //                         "description": "The ESLint disable comment is unnecessary.",
    //                         "fix": "Remove the /* eslint-disable no-unused-vars */ line if not needed."
    //                     },
    //                     {
    //                         "issue": "Alt attribute repetition",
    //                         "description": "Generic alt text for images.",
    //                         "fix": "Use descriptive alt text for accessibility."
    //                     }
    //                 ]
    //             },
    //             "step_3": {
    //                 "description": "One-by-one error fix",
    //                 "fixes": [
    //                     {
    //                         "fix": "Rename the component from 'dashboard' to 'Dashboard'.",
    //                         "code": "const Dashboard = () => {}"
    //                     },
    //                     {
    //                         "fix": "Add key props to each option.",
    //                         "code": "<div className=\"option\" key=\"chat\">\n  <img src={img1} alt=\"Create Chat\" />\n  <span>Create a New Chat</span>\n</div>"
    //                     },
    //                     {
    //                         "fix": "Remove the ESLint disable comment.",
    //                         "code": "// Remove this line"
    //                     }
    //                 ]
    //             },
    //             "step_4": {
    //                 "description": "Best practices and improvements",
    //                 "suggestions": [
    //                     "Component naming: Capitalize component names.",
    //                     "Unique keys for lists: Use unique key props for repeated elements.",
    //                     "Accessibility improvements: Use descriptive alt text for images.",
    //                     "Form improvements: Add an onSubmit handler for form submissions."
    //                 ]
    //             },
    //             "step_5": {
    //                 "description": "Estimate of error percentage",
    //                 "percentage_estimates": {
    //                     "syntax_error": "2%",
    //                     "common_error": "3%",
    //                     "logical_error": "0%"
    //                 }
    //             },
    //             "step_6": {
    //                 "description": "Completed correct code",
    //                 "code_snippet": {
    //                     "language": "jsx",
    //                     "code": "import React from 'react';\nimport './dashboard.css';\nimport logo from '../../assets/logo.png';\nimport img1 from '../../assets/chat.png';\nimport img2 from '../../assets/image.png';\nimport img3 from '../../assets/code.png';\nimport buttonimg from '../../assets/arrow.png';\n\nconst Dashboard = () => {\n  return (\n    <div className=\"dashboardPage\">\n      <div className=\"texts\">\n        <div className=\"logo\">\n          <img src={logo} alt=\"logo\" />\n          <h1>PRO MENTER</h1>\n        </div>\n        <div className=\"options\">\n          <div className=\"option\" key=\"chat\">\n            <img src={img1} alt=\"Create a New Chat\" />\n            <span>Create a New Chat</span>\n          </div>\n          <div className=\"option\" key=\"report\">\n            <img src={img2} alt=\"Download Report\" />\n            <span>Download Report</span>\n          </div>\n          <div className=\"option\" key=\"code\">\n            <img src={img3} alt=\"Help me with Code\" />\n            <span>Help me with my Code</span>\n          </div>\n        </div>\n      </div>\n      <div className=\"formContainer\">\n        <form action=\"\" onSubmit={(e) => e.preventDefault()}>\n          <input type=\"text\" placeholder='Ask me Error or Help' />\n          <button>\n            <img src={buttonimg} alt=\"submit\" />\n          </button>\n        </form>\n      </div>\n    </div>\n  );\n};\n\nexport default Dashboard;"
    //                 }
    //             },
    //             "step_7": {
    //                 "description": "Code concept improvements and advice",
    //                 "improvements": [
    //                     "Form handling: Add event handling for form submissions.",
    //                     "Component reuse: Consider abstracting repeated components."
    //                 ]
    //             },
    //             "step_8": {
    //                 "description": "Tips and advice",
    //                 "advice": [
    //                     "Break large components into smaller ones for better modularity.",
    //                     "Use state management like useState for handling state.",
    //                     "Keep styles modular and reusable."
    //                 ]
    //             }
    //         }
    //     ]
    // };


    function downloadTxtFile(codeContent) {
        const blob = new Blob([codeContent], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "completed_code.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    useEffect(() => {
        if (endRef.current) {
            endRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [questions, answers]);

    const handleCodeSubmission = async (text) => {
        setQuestions(text);
        const result = await model.generateContent(text);
        const resultForCode = await resultobjectgenarater(result.response.text());
        console.log(resultForCode);
        setAnswers(resultForCode); // Assuming result contains the model's response for code
    };

    
    const resultobjectgenarater = async (text) => {
        const prompt = `json object generate this data include json name result and step step separate show 
==========example json obj==========

        "result": [
            {
                "step_1": {
                    "description": "Explanation of the code",
                    "code_snippets": [
                        {
                            "language": "jsx",
                            "code": "/* eslint-disable no-unused-vars */",
                            "explanation": "This disables the ESLint rule that warns about unused variables."
                        },
                        
                    ]
                },
                "step_2": {
                    "description": "Identify and explain errors",
                    "errors": [
                        {
                            "issue": "Component naming convention error",
                            "description": "Component name should start with a capital letter.",
                            "fix": "Rename 'dashboard' to 'Dashboard'."
                        },
                       
                    ]
                },
                
    };`
    const go = text + prompt;
    const result = await model.generateContent(go);
    const response = await result.response;
    console.log(result.response.text());
    return result.response.text();
    }

    // Function to handle normal word input
    const handleTextSubmission = async (text) => {
        setQuestions(text);
        const result = await model.generateContent(text);
        const response = await result.response;
        setAnswers(response.text());
        console.log(result.response.text());
    };

    // Function to check if the input contains code (simple check for now)
    const isCodeInput = (input) => {
        // You can improve this logic by checking for specific keywords, or use regex
        return input.includes("function") || input.includes("const") || input.includes("let") || input.includes("return");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value.trim();

        if (!text) return;

        // Determine if it's a code input or not
        if (isCodeInput(text)) {
            handleCodeSubmission(text);
        } else {
            handleTextSubmission(text);
        }

        
    };

    return (
        <>
            {questions && <div className="message user">{questions}</div>}

            {/* If it's not a code input, display the answer using the Markdown component */}
            {answers && typeof answers === 'string' && (
                <div className="message">
                    <Markdown>{answers}</Markdown>
                </div>
            )}

            {/* If it's a code result, show the structured response */}
            {answers && typeof answers !== 'string' && (
                <div className="message">
                    {answers.result.map((step, index) => (
                        <div key={index} className="step-section">
                            {Object.keys(step).map((key, i) => {
                                const stepData = step[key];
                                return (
                                    <div key={i} className="step-content">
                                        <h3 className="step-title">{stepData.description}</h3>

                                        {stepData.code_snippets &&
                                            stepData.code_snippets.map((snippet, j) => (
                                                <div key={j} className="code-snippet">
                                                    <p className="snippet-language">
                                                        <strong>Language:</strong> {snippet.language}
                                                    </p>
                                                    <pre className="code-block">{snippet.code}</pre>
                                                    <p className="snippet-explanation">{snippet.explanation}</p>
                                                </div>
                                            ))}

                                        {stepData.errors &&
                                            stepData.errors.map((error, k) => (
                                                <div key={k} className="error-message">
                                                    <p className="font-bold text-lg">
                                                        <strong>Error:</strong> {error.issue}
                                                    </p>
                                                    <p>{error.description}</p>
                                                    <p><strong>Fix:</strong> {error.fix}</p>
                                                </div>
                                            ))}

                                        {stepData.fixes &&
                                            stepData.fixes.map((fix, l) => (
                                                <div key={l} className="fix-message">
                                                    <p className="font-bold text-lg">
                                                        <strong>Fix:</strong> {fix.fix}
                                                    </p>
                                                    <pre className="code-block">{fix.code}</pre>
                                                </div>
                                            ))}

                                        {stepData.suggestions && (
                                            <div className="suggestions">
                                                <h4 className="section-title">Suggestions</h4>
                                                <ul className="suggestion-list">
                                                    {stepData.suggestions.map((suggestion, m) => (
                                                        <li key={m}>{suggestion}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {stepData.percentage_estimates && (
                                            <div className="percentage-estimates">
                                                <ul className="percentage-list">
                                                    {Object.entries(stepData.percentage_estimates).map(([type, percentage], n) => (
                                                        <li key={n}>
                                                            <strong>{type}:</strong> {percentage}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {stepData.code_snippet && (
                                            <div className="completed-code">
                                                <h4 className="section-title">Completed Correct Code</h4>
                                                <pre id={`code-snippet-${index}`} className="code-block">
                                                    {stepData.code_snippet.code}
                                                </pre>
                                                <button
                                                    onClick={() => downloadTxtFile(stepData.code_snippet.code)}
                                                    className="button"
                                                >
                                                    Download Code as .txt
                                                </button>
                                            </div>
                                        )}

                                        {stepData.improvements && (
                                            <div className="improvements">
                                                <h4 className="section-title">Code Concept Improvements and Advice</h4>
                                                <ul className="improvement-list">
                                                    {stepData.improvements.map((improvement, o) => (
                                                        <li key={o}>{improvement}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {stepData.advice && (
                                            <div className="tips">
                                                <h4 className="section-title">Tips and Advice</h4>
                                                <ul className="advice-list">
                                                    {stepData.advice.map((tip, p) => (
                                                        <li key={p}>{tip}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            )}

            <div className="endChat" ref={endRef}></div>

            <form className="newForm" onSubmit={handleSubmit}>
                <input type="text" name='text' placeholder="Ask me Error or Help" />
                <button type="submit">
                    <img src={buttonimg} alt="submit" />
                </button>
            </form>
        </>
    );
};

export default NewPrompt;
