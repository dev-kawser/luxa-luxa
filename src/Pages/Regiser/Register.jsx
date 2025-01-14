import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


const Register = () => {

    const { registerUser, googleUser, githubUser } = useContext(AuthContext)
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        setError("")

        const email = data.email
        const password = data.password
        const displayName = data.displayName
        const photoUrl = data.photoUrl

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!regex.test(data.password)) {
            setError("Password should be one Upper case, one lower case, and at least 6 characters")
            return;
        }

        registerUser(email, password)
            .then((result) => {
                toast.success("Successfully register !")
                navigate(location?.state ? location.state : '/login')
                updateProfile(result.user, {
                    displayName: displayName,
                    photoURL: photoUrl,
                    email: email,
                })
                    .then()
                    .catch()
            })
            .catch()
    }

    const handleGoogleRegister = () => {

        googleUser()
            .then(() => {
                toast.success("Successfully google register !")
            })
            .catch(() => {
                toast.warn("Email already exist")
            })
    }


    const handleGiHubRegister = () => {

        githubUser()
            .then(() => {
                toast.success("Successfully github register !")
            })
            .catch(() => {
                toast.warn("Email already exist")
            })
    }

    return (
        <div className="hero mt-3">
            <Helmet>
                <title>LuxuriaLuxe | Register</title>
            </Helmet>

            <div className="hero-content w-96">
                <div data-aos="zoom-in" className="card pb-5 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div>
                        <h2 className="text-2xl font-bold text-center -mb-6 mt-2">Register Now</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" className="input input-bordered" {...register("displayName", { required: true })} />
                            {errors.photoUrl && <small className="text-red-500 font-medium mt-1">This field is required</small>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Your photo url" className="input input-bordered" {...register("photoUrl", { required: true })} />
                            {errors.photoUrl && <small className="text-red-500 font-medium mt-1">This field is required</small>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <small className="text-red-500 font-medium mt-1">This field is required</small>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" {...register("password", {
                                required: true,
                            })} />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute text-xl top-12 right-6">
                                {
                                    showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                }
                            </span>
                            {errors.password && <small className="text-red-500 font-medium mt-1">This field is required</small>}
                            <div>
                                {
                                    error && <small className="text-red-500 font-medium mt-1">{error}</small>
                                }
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <p>Already have an account?</p> <Link className="font-semibold" to="/login">Login</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Register with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleRegister} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                        <button onClick={handleGiHubRegister} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;