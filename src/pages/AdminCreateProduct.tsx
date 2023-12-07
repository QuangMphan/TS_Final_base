import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProductFormParams } from '../types/Product';
import { Category } from '../types/Category';

const AdminCreateProduct = () => {
    return (
        <div className="w-[70%]">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Add New Product
            </h1>

            <form onSubmit={handleSubmitForm} className="mt-8">
                <div className=" ">
                    <label
                        htmlFor="title"
                        className="block text-base font-medium text-gray-700"
                    >
                        Title
                    </label>
                    <input
                        value={productAdd.title}
                        onChange={handleChangeForm}
                        type="text"
                        name="title"
                        id="title"
                        className="w-full pl-3 h-[30px] rounded-md border-[1px] border-gray-700 bg-white text-base text-gray-700 shadow-sm"
                    />
                </div>

                <div className=" ">
                    <label
                        htmlFor="image"
                        className="mt-7 block text-base font-medium text-gray-700"
                    >
                        Image
                    </label>
                    <input
                        value={productAdd.image}
                        onChange={handleChangeForm}
                        type="text"
                        name="image"
                        id="image"
                        className="w-full pl-3 h-[30px] rounded-md border-[1px] border-gray-700 bg-white text-base text-gray-700 shadow-sm"
                    />
                </div>

                <div className="">
                    <label
                        htmlFor="description"
                        className="mt-7 block text-base font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <input
                        value={productAdd.description}
                        onChange={handleChangeForm}
                        type="text"
                        name="description"
                        id="description"
                        className="w-full pl-3 h-[30px] rounded-md border-[1px] border-gray-700 bg-white text-base text-gray-700 shadow-sm"
                    />
                </div>

                <div className=" ">
                    <label
                        htmlFor="category"
                        className="mt-7 block text-base font-medium text-gray-700"
                    >
                        Category
                    </label>
                    <select
                        id="category"
                        value={productAdd.category}
                        onChange={handleChangeForm}
                        name={'category'}
                        className="w-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 "
                    >
                        <option value={''}>Select category</option>
                        {categoryList.map((category, index) => (
                            <option key={index} value={category._id}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className=" ">
                    <label
                        htmlFor="price"
                        className="mt-7 block text-base font-medium text-gray-700"
                    >
                        Price
                    </label>
                    <input
                        value={productAdd.price}
                        onChange={handleChangeForm}
                        type="number"
                        name="price"
                        id="price"
                        className="w-[20%] pl-3 h-[30px] rounded-md border-[1px] border-gray-700 bg-white text-base text-gray-700 shadow-sm"
                    />
                </div>

                <div className=" ">
                    <label
                        htmlFor="rate"
                        className="mt-7 block text-base font-medium text-gray-700"
                    >
                        Rate
                    </label>
                    <input
                        value={productAdd.rate}
                        onChange={handleChangeForm}
                        type="number"
                        name="rate"
                        id="rate"
                        className="w-[20%] pl-3 h-[30px] rounded-md border-[1px] border-gray-700 bg-white text-base text-gray-700 shadow-sm"
                    />
                </div>

                <div className=" sm:flex sm:items-center sm:gap-4">
                    <button className="mt-7 inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminCreateProduct;
