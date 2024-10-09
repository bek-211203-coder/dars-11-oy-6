import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import avazbek from "../../axios";
import apple from "../assets/image/mac.svg";
import facebook from "../assets/image/facebook.svg";
import google from "../assets/image/google.svg";
import lincedin from "../assets/image/lincedin.svg";

function Register() {
    const fnameRef = useRef();
    const lnameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repasswordRef = useRef();
    const navigate = useNavigate();

    const [loder , setLoader] = useState(false)

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: "",
    });


    const validateForm = () => {
        let isValid = true;
        let newErrors = { ...errors };


        if (!fnameRef.current.value) {
            newErrors.firstName = "First name is required";
            isValid = false;
        } else {
            newErrors.firstName = "";
        }


        if (!lnameRef.current.value) {
            newErrors.lastName = "Last name is required";
            isValid = false;
        } else {
            newErrors.lastName = "";
        }


        const age = ageRef.current.value;
        if (!age) {
            newErrors.age = "Age is required";
            isValid = false;
        } else if (age < 15 || age > 100) {
            newErrors.age = "Age must be between 18 and 100";
            isValid = false;
        } else {
            newErrors.age = "";
        }


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


        const confirmPassword = repasswordRef.current.value;
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        } else {
            newErrors.confirmPassword = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const hendelSummid = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const user = {
            firstName: fnameRef.current.value,
            lastName: lnameRef.current.value,
            age: ageRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: repasswordRef.current.value,
        };

        try {

            setLoader(true);
            const { data } = await avazbek.post('/Register', user, {
                headers: {
                    "Content-type": "application/json",
                },
            });

            if (data.message === "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi") {
                navigate("/Login");
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoader(false)
        }
    };

    return (
        <>
            
            <h1 className="text-center text-yellow-600 mt-8 text-5xl font-bold mb-7">Register Pages</h1>
            <form
                onSubmit={hendelSummid}
                className="w-1/3 flex flex-col border border-solid border-white  rounded-md p-7 mx-auto  gap-5 backdrop-blur-lg "
            >
                <input
                    ref={fnameRef}
                    className="py-2 px-3 rounded-md border border-solid border-white text-white bg-transparent outline-none "
                    type="text"
                    placeholder="Enter firstname..."
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

                <input
                    ref={lnameRef}
                    className="py-2 px-3 rounded-md border border-solid border-white text-white bg-transparent outline-none"
                    type="text"
                    placeholder="Enter lastname..."
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                <input
                    ref={ageRef}
                    className="py-2 px-3 rounded-md border border-solid border-white text-white bg-transparent outline-none"
                    type="number"
                    placeholder="Enter age..."
                />
                {errors.age && <p className="text-red-500">{errors.age}</p>}

                <input
                    ref={emailRef}
                    className="py-2 px-3 rounded-md border border-solid border-white text-white bg-transparent outline-none"
                    type="text"
                    placeholder="Enter email..."
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <input
                    ref={passwordRef}
                    className="py-2 px-3 rounded-md border border-solid border-white text-white bg-transparent outline-none"
                    type="password"
                    placeholder="Enter password..."
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}

                <input
                    ref={repasswordRef}
                    className="py-2 px-3 rounded-md border border-solid border-white text-white bg-transparent outline-none"
                    type="password"
                    placeholder="Repeat password..."
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}

                <button
                    type="submit"
                    className="py-2 px-3 border-none bg-[linear-gradient(135deg,_#fdca10,_#fdc70c,_#f3903f,_#ed683c,_#e93e3a)] rounded-[20px] w-1/2 mx-auto text-white active:opacity-70 active:scale-95"
                >
                    Register
                </button>

                {loder && (
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
                <p className="text-white text-xl text-center">Alredy have an account?-
                    <Link to="/Login" className="text-white text-center text-xl hover:text-yellow-600 w-32 mx-auto">
                        Login here...
                    </Link>

                </p>
            </form>
        </>
    );
}

export default Register;
