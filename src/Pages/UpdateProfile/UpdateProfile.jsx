import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            displayName: user?.displayName,
            photoUrl: user?.photoURL,
            email: user?.email,
        }
    })

    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        const displayName = data.displayName
        const photoUrl = data.photoUrl

        updateProfile(user, {
            displayName: displayName,
            photoURL: photoUrl,
            email: email,
            password: password,
        })
            .then(() => {
                toast.success("Updated Successfully")
                window.location.reload();
            })
            .catch()

    }
    return (
        <div className="hero mt-3">
            <Helmet>
                <title>LuxuriaLuxe | Update Profile</title>
            </Helmet>
            <div className="hero-content w-96">
                <div className="card pb-5 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div>
                        <h2 className="text-2xl font-bold text-center -mb-6 mt-5">Update Your Profile</h2>
                    </div>
                    <div className="flex justify-center mt-10 -mb-5">
                        <img className="w-20" src={user.photoURL} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" className="input input-bordered" {...register("displayName")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Your photo url" className="input input-bordered" {...register("photoUrl")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email")} />
                        </div>
                        <div className="flex mt-3">
                            <p>Do not want update?</p> <Link className="font-semibold" to="/login">Login</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;