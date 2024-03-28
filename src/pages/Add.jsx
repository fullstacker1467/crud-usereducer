import React, { useContext, useState } from 'react'
import { ContextData } from '../context/context'
import { useNavigate } from 'react-router-dom'

export const Add = () => {
    const { dispatch } = useContext(ContextData)
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [job, setJob] = useState('')
    const [gender, setGender] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const obj = {
        id: new Date().getTime(),
        userName,
        age,
        job,
        gender
    }
    const addUser = (e) => {
        if (!userName || !age || !job || !gender) {
            e.preventDefault()
            setError(true)
        } else {
            e.preventDefault()
            setError(false)
            dispatch({ type: 'addUser', obj })
            navigate('/')
        }
    }
    const handleInputChange = (event) => {
        setGender(event.target.value);
    };
    return (
        <section className='px-2'>
            <div className="container flex items-center justify-center h-screen">
                <form onSubmit={addUser} className='flex flex-col gap-4 w-[500px]'>
                    <h1 className='text-center text-2xl'>Add new user</h1>
                    <h1 className='text-red-500'>{error ? "Malumotlarni to'ldiring!" : ''}</h1>
                    <input onChange={(e) => setUserName(e.target.value)} className='bg-slate-200 text-xl px-5 py-3' type="text" placeholder='Username' />
                    <input onChange={(e) => setAge(e.target.value)} className='bg-slate-200 text-xl px-5 py-3' type="number" placeholder='Age' />
                    <input onChange={(e) => setJob(e.target.value)} className='bg-slate-200 text-xl px-5 py-3' type="text" placeholder='Job' />
                    <div className="flex gap-5 px-3">
                        <label>
                            <input
                                value={'erkak'}
                                checked={gender === 'erkak'}
                                name='gender'
                                type="radio"
                                onChange={handleInputChange}
                            />
                            Erkak
                        </label>
                        <label>
                            <input
                                value={'ayol'}
                                checked={gender === 'ayol'}
                                name='gender'
                                type="radio"
                                onChange={handleInputChange}
                            />
                            Ayol
                        </label>
                    </div>
                    <button className='bg-blue-500 text-white text-2xl py-2' type='submit'>Submit</button>
                </form>
            </div>
        </section >
    )
}
