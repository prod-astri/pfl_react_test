import { NavLink } from 'react-router-dom';

export default function ActiveLink(props) {
    const {
        path,
        inner,
        classname = 'navLink',
        activeclass = 'selected' }
        = props;
    return (
        <NavLink
            to={`${path}`}
            className={({ isActive }) =>
                isActive ? `${classname} ${activeclass}` : classname
            }
        >
            {inner}
        </NavLink>
    )
}
