import { connect } from 'react-redux';
// import {check_authenticated, load_user, refresh} from '../actions/auth'
import { useEffect } from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'


function Layout(props){
    useEffect(() => {
        // props.refresh()
        // props.check_authenticated()
        // props.load_user()
    }, []);

    return(
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default connect(null, {
    // check_authenticated,
    // load_user,
    // refresh
}) (Layout);