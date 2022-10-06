import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth"

export const Profile = () => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <h3 className="title-blog">Perfil</h3>
      <h1 className="content-profile">Welcome,{ auth.user.username }</h1>
    </>
  )
}