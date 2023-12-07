import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminProductList = () => {
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
                    Product List
                </h1>

                <Link to={'/admin/products/create'}>
                    <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Create New Product
                    </button>
                </Link>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full divide-y-2 bg-white text-base text-center">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="px-4 py-2 font-medium text-gray-900 w-[20%]">
                                Title
                            </th>
                            <th className="px-4 py-2 font-medium text-gray-900 w-[10%]">
                                Image
                            </th>
                            <th className="px-4 py-2 font-medium text-gray-900 w-[10%]">
                                Category
                            </th>
                            <th className="px-4 py-2 font-medium text-gray-900 w-[40%]">
                                Description
                            </th>
                            <th className="px-4 py-2 font-medium text-gray-900 w-[5%]">
                                Price
                            </th>
                            <th className="px-4 py-2 font-medium text-gray-900 w-[15%]">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {productList.map((product, index) => (
                            <tr key={index} className="text-base">
                                <td className="px-4 py-2 font-medium text-gray-900">
                                    {product.title}
                                </td>

                                <td className="px-4 py-2 text-gray-700">
                                    <img
                                        className="w-full"
                                        src={product.image}
                                    />
                                </td>

                                <td className="px-4 py-2 text-gray-700">
                                    {product.category.title}
                                </td>

                                <td className="px-4 py-2 text-gray-700">
                                    {product.description}
                                </td>

                                <td className="px-4 py-2 text-gray-700">
                                    ${product.price}
                                </td>

                                <td className="">
                                    <Link
                                        to={`/admin/products/edit/${product._id}`}
                                    >
                                        <button className="inline-block mr-3 text-base rounded bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">
                                            Edit
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() =>
                                            handleRemoveProduct(product._id)
                                        }
                                        className="inline-block rounded text-base bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-700"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProductList;
