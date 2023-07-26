import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type PublicRouteProps = {
    children: React.ReactNode;
  };

const ProtectRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            try {
             const res = await axios.get('https://dutchway.onrender.com/api/auth', { withCredentials: true })
                if(res.data.id) {
                    setUser(true)
                } else  {
                    navigate('/login')
                }
                
            } catch (err) {
                navigate('/login')
            }
        }

        fetchUser()
    })


    return (<div>
        {user && <div>{children}</div>}
    </div>
    )
}

export default ProtectRoute