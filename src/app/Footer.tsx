import React from "react";
import Image from "next/image";
// import { LinkedinIcon } from "../Icons";

const DownloadApp = () => {
    return (
        <div className="bg-black border-blue-700 border-l-4 border-r-4 mt-8">
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3">Secure | Transparent | Authentic 🤝</h3>
                    <div className="flex justify-center my-8 mt-16">
                        <a href="https://aryansharma.hashnode.dev/">
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 shadow-md shadow-blue-700 hover:scale-110">
                                {/* <Image */}
                                    {/* //   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png"
                                    width={32}
                                    height={32}
                                    alt="Twitter"
                                    className="w-7 md:w-8 hover:scale-125"
                                /> */}
                                <div className="text-left ml-3">
                                    <p className="text-xs text-gray-200">Follow on.</p>
                                    <p className="text-sm md:text-base">Twitter</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/aryan-sharma17/">
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 shadow-md shadow-blue-700 hover:scale-110">
                                <div className="text-left ml-3">
                                    <p className="text-xs text-gray-200">Follow on</p>
                                    <p className="text-sm md:text-base">LinkedIn</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="mt-16 text-sm text-white animate-bounce">
                        Made by <span className="font-semibold text-blue-700">ADA</span>{" "}
                        with 💓
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;
