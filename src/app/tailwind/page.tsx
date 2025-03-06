import React from "react";

const TailwindPage = () => {
    return (
        <div className="p-4">
        <div id="form" className="w-96 h-72 p-4 flex  flex-col border-2 border-solid border-blue-300 rounded-2xl shadow-md">
            <h2 className="font-bold text-3xl mb-3 text-center">Forgot password</h2>
            <p className="text-center">Remember your password? <a className="text-blue-500 font-semibold hover:underline">Login here</a></p>
            <div className="mt-7">
                <label htmlFor="" className="font-semibold">Email address</label>
                <input type="text" className="w-full h-11 border-gray-300 border-2 rounded-md mb-5 border-solid pl-4" />
                <button className="bg-blue-600 w-full h-12 rounded-xl text-white hover:bg-blue-700">Reset password</button>
            </div>
        </div>
        </div>
    );
};

export default TailwindPage;