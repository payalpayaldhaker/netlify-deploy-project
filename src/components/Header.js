import '../App.css';
import {Link} from 'react-router-dom';
function Header(){
    return(
        <> 
            <div className="header">
                <Link to='/login'>login</Link>
                <Link to='/register'>register</Link>
            </div>
        </>
    )
}
export default Header;