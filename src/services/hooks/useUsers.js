import { useQuery } from 'react-query'
import { api } from '../axios/api'

export async function getUsers(page) {
    const {data, headers} = await api.get('users', {
        params: {
            page
        }
    })
    
    const totalCount = Number(headers['x-total-count'])

    const users = data.users.map((user) => (
        {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    ))

    return {
        users,
        totalCount
    }
}
export function useUsers (page) {
    return (
        useQuery(['users', page], () => getUsers(page), {
            staleTime: 1000 * 60 * 10 //10minutos
        })
    )
}