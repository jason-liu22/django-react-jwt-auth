import { useContext } from 'react';
import { JWTAuthContext } from 'providers/JWTAuthContextProvider';

const useAuth = () => useContext(JWTAuthContext);

export default useAuth;