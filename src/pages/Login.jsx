import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import avazbek from "../../axios";
import userimg from '../assets/image/imageuser.svg';
import apple from "../assets/image/mac.svg";
import facebook from "../assets/image/facebook.svg";
import google from "../assets/image/google.svg";
import lincedin from "../assets/image/lincedin.svg";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate(); 

    const [loader, setLoader] = useState(false)

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const validateForm = () => {
        let isValid = true;
        let newErrors = { ...errors };


        const email = emailRef.current.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            newErrors.email = "Enter a valid email address";
            isValid = false;
        } else {
            newErrors.email = "";
        }


        const password = passwordRef.current.value;
        if (!password) {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
            isValid = false;
        } else {
            newErrors.password = "";
        }

        setErrors(newErrors);
        return isValid;
    };


    const hendelSummid = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const userForm = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        setLoader(true);
        avazbek.post("/Login", userForm, {
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => {
                const data = response.data;

                if (data.message === "User Not found") {
                    alert("Username yoki parol noto'g'ri");
                }

                if (data.user) {

                    localStorage.setItem("token", data.accessToken);
                    localStorage.setItem("user", JSON.stringify(data));
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Parol yoki email noto'g'ri");
            })
            .finally(()=>{
                setLoader(false)
            })
    };

    return (
        <>
            <div>
                <h1 className="text-yellow-600 font-bold text-center mt-24 mb-8 text-5xl ">Login Pages</h1>
            </div>
            <form

                onSubmit={hendelSummid}
                className=" w-96 flex flex-col border border-solid border-white rounded-md p-4 mx-auto  gap-6 backdrop-blur-lg"
            >
                <img src={userimg} className="text-center mx-auto" alt="" width={120} height={120} />
                <input
                    ref={emailRef}
                    className="py-2 px-3 rounded-md border border-solid border-white text-white bg-transparent outline-none"
                    type="text"
                    placeholder="Enter email..."
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <input
                    ref={passwordRef}
                    className="py-2 px-3 rounded-md border border-solid  border-white text-white bg-transparent outline-none"
                    type="password"
                    placeholder="Enter password..."
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}

                <button
                    type="submit"
                    className="py-2 px-3 border-none bg-[linear-gradient(135deg,_#fed51b,_#fdca10,_#fdc70c,_#f3903f,_#ed683c,_#e93e3a)] rounded-[20px] w-1/2 mx-auto text-white active:opacity-75 active:scale-95"
                >
                    Login
                </button> 

                {loader && (
                    <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-4 border-white rounded-full" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
                
                <div className="flex justify-center  gap-5">
                    <img src={google} alt="google icon" width={38} height={38} className="cursor-pointer " />
                    <img src={apple} alt="apple icon" width={38} height={38} className="cursor-pointer" />
                    <img src={lincedin} alt="lincedin icon" width={38} height={38} className="cursor-pointer" />
                    <img src={facebook} alt="facebook icon" width={38} height={38} className="cursor-pointer" />
                </div>
                <p className="text-white text-center text-xl  mb-8">Not a member? -  
                    <Link to="/Register" className="text-white text-center hover:text-yellow-600">
                        Sing Up...
                    </Link>

                </p>
            </form>

        </>
    );
}

export default Login;
