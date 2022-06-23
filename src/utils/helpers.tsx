import {useLocation} from 'react-router-dom'
export const useQuery = () => {
    let { search } = useLocation();
    return new URLSearchParams(search);
}