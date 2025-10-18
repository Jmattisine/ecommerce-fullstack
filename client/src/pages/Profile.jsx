import { useAuth } from '../contexts/AuthContext.jsx';
export default function Profile() {
  const { user } = useAuth();
  if (!user) return 'No autenticado';
  return (
    <div>
      <h1>Mi perfil</h1>
      <p>{user.name} — {user.email}</p>
    </div>
  );
}
