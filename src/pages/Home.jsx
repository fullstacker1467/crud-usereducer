import React, { useContext } from 'react'
import { ContextData } from '../context/context'
import { Link } from 'react-router-dom'

export const Home = () => {
    const { state, dispatch } = useContext(ContextData)
    return (
        <>
            <section className='py-10 px-2'>
                <div className="container">
                    <div className="relative overflow-x-auto rounded-xl">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        user name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        age
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        job
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        gender
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.length > 0
                                    ? state && state.map((item, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.userName}
                                            </th>
                                            <td className="px-6 py-4">
                                                {item.age}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.job}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.gender}
                                            </td>
                                            <td className="px-6 py-4 flex gap-4">
                                                <Link to={`edit/${item.id}`} className='bg-blue-400 text-white px-4 py-2'>edit</Link>
                                                <button onClick={() => dispatch({ type: 'removeUser', id: item.id })} className='bg-red-500 text-white px-4 py-2'>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                    : <div className='h-[30vh] flex items-center justify-center'>
                                        <h1 className='text-4xl'>No data</h1>
                                    </div>}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </>
    )
}
