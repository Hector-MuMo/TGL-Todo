import { Form } from "antd";
import { useRef, useLayoutEffect } from "react";
import "../styles/TodoInput/TodoInput.css";

const TodoInput = ({ label, propName }) => {
    const inputGroupRef = useRef();
    const inputRef = useRef();

    useLayoutEffect(() => {
        const { current } = inputRef;

        const handleFocus = () => {
            inputGroupRef.current.classList.add("active");
        };
        const handleBlur = () => {
            inputGroupRef.current.classList.remove("active");
        };

        current.addEventListener("focus", handleFocus);
        current.addEventListener("blur", handleBlur);

        return () => {
            current.addEventListener("focus", handleFocus);
            current.addEventListener("blur", handleBlur);
        };
    }, []);

    return (
        <Form.Item name={propName} rules={[{ required: true, message: 'Este campo es necesario' }]}>
            <div className="container">
                <div ref={inputGroupRef} className="inputGroup">
                    <label className="label">{label}</label>
                    <input ref={inputRef} className="input" />
                    <div className="border" />
                </div>
            </div>
        </Form.Item>
    );
};

export default TodoInput;