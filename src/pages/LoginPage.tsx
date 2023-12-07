import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
    return (
        <div className="pt-[150px]">
            <div className="m-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <section className="py-6">
                    <div>
                        {/* Left column container with background*/}
                        <div className="gap-6 flex flex-wrap items-center justify-center lg:justify-between">
                            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                                <img
                                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="w-full"
                                    alt="Sample image"
                                />
                            </div>
                            {/* Right column container */}
                            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                                <form onSubmit={handleSubmitForm}>
                                    {/*Sign in section*/}
                                    <div className="flex flex-row items-center justify-center lg:justify-start">
                                        <p className="mb-0 mr-4 text-xl text-teal-600 font-bold">
                                            SIGN IN
                                        </p>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            value={accountInfo.email}
                                            onChange={handleChangeForm}
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="name@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            value={accountInfo.password}
                                            onChange={handleChangeForm}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        />
                                    </div>

                                    {/* <div className="mb-6 flex items-center justify-between">
                                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                            <input
                                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                type="checkbox"
                                                defaultValue=""
                                                id="exampleCheck2"
                                            />
                                            <label
                                                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                                htmlFor="exampleCheck2"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="#!">Forgot password?</a>
                                    </div> */}
                                    {/* Login button */}
                                    <div className="text-center mt-5 lg:text-left">
                                        <button
                                            type="submit"
                                            className="inline-block bg-primary pb-2.5 pt-3 rounded-lg uppercase leading-normalrounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                            data-te-ripple-init=""
                                            data-te-ripple-color="light"
                                        >
                                            Login
                                        </button>
                                        {/* Register link */}
                                        {/* <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                            Don't have an account?
                                            <a
                                                href="#!"
                                                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                            >
                                                Register
                                            </a>
                                        </p> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <ToastContainer />
        </div>
    );
};

export default LoginPage;
