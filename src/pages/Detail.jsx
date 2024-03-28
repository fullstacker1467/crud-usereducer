import React, { useContext } from 'react'
import { ContextData } from '../context/context'
import { Link, useParams } from 'react-router-dom'

export const Detail = () => {
    const { state } = useContext(ContextData)
    const { id } = useParams()
    const user = state.filter(item => item.id == id)[0]
    return (
        <section className='py-10'>
            <div className="container">
                <h1 className='text-4xl'>UserName: <span className='text-green-400'>{user.userName}</span></h1>
                <Link to={`/edit/${user.id}`}>Edit</Link>
            </div>
        </section>
    )
}
