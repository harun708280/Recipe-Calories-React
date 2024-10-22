import React from 'react';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className=" text-2xl font-bold">Recipe Calories</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control ">
                <input type="text" placeholder="Search" className="input  rounded-3xl bg-gray-200 w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn  btn-circle ">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#0BE58A] ">
                    <span className=''><i class="fa-regular fa-user"></i></span>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navber;