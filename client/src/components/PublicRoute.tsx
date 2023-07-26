import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

type PublicRouteProps = {
    children: React.ReactNode;
  };

  const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get('https://dutchway.onrender.com/api/auth', { withCredentials: true })
            if (res.data.id) {
                navigate('/')
            } else {
                setUser(true)
            }
        }

        fetchUser()
    })
  return (
    <div>
        {user && <div>{children}</div>}
    </div>
  )
}

export default PublicRoute