import React, { useContext, useState } from 'react'
import { ContextData } from '../context/context'
import { useNavigate, useParams } from 'react-router-dom'

export const Edit = () => {
    const { state, dispatch } = useContext(ContextData)
    const { id } = useParams()
    const user = state.filter(item => item.id == id)[0]
    const [name, setName] = useState(user.userName)
    const [uage, setUAge] = useState(user.age)
    const [ujob, setUJob] = useState(user.job)
    const [ugender, setUGender] = useState(user.gender)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const editUser = (e) => {
        if (!name || !uage || !ujob || !ugender) {
            e.preventDefault()
            setError(true)
        } else {
            e.preventDefault()
            setError(false)
            dispatch({ type: 'editUser', obj: { ...user, userName: name, age: uage, job: ujob, gender: ugender } });
            navigate('/')
        }
    }
    const handleInputChange = (event) => {
        setUGender(event.target.value);
    };
    return (
        <section className='px-2'>
            <div className="container flex items-center justify-center h-screen">
                <form onSubmit={editUser} className='flex flex-col gap-4 w-[500px]'>
                    <h1 className='text-center text-2xl'> Edit user</h1>
                    <h1 className='text-red-500'>{error ? "Malumotlarni to'ldiring!" : ''}</h1>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        className='bg-slate-200 text-xl px-5 py-3'
                        type="text"
                        placeholder='Username'
                        value={name}
                    />
                    <input
                        onChange={(e) => setUAge(e.target.value)}
                        className='bg-slate-200 text-xl px-5 py-3'
                        type="number"
                        placeholder='Age'
                        value={uage}
                    />
                    <input
                        onChange={(e) => setUJob(e.target.value)}
                        className='bg-slate-200 text-xl px-5 py-3'
                        type="text"
                        placeholder='Job'
                        value={ujob}
                    />
                    <div className="flex gap-5 px-3">
                        <label>
                            <input
                                value={'erkak'}
                                checked={ugender === 'erkak'}
                                name='gender'
                                type="radio"
                                onChange={handleInputChange}
                            />
                            Erkak
                        </label>
                        <label>
                            <input
                                value={'ayol'}
                                checked={ugender === 'ayol'}
                                name='gender'
                                type="radio"
                                onChange={handleInputChange}
                            />
                            Ayol
                        </label>
                    </div>
                    <button className='bg-blue-500 text-white text-2xl py-2' type='submit'>Edit</button>
                </form>
            </div>
        </section >
    )
}
