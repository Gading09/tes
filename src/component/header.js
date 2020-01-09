import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
import Search from './search';

class Header extends Component{
    handleRouterNav = async categoryName => {
        const category = categoryName;
        await this.props.history.replace("/news-category/" + category);
      };
    postSignout = () => {
        localStorage.removeItem("is_login");
        // localStorage.clear()
        this.props.history.push("/");
    };
    render(){
        return(
            <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 logo">
                         <img src={require("../img/logo512.png")} alt=""/>
                         <p>KabarKabar</p>
                    </div>
                    <div className="col-md-4">
                         <ul>
                             <li><Link to ="/">News</Link>
                            </li>
                            <li><Link
                             onClick={
                                this.props.isCategoryNews !== undefined
                                    ? () => this.props.everything("sport")
                                    : () => this.handleRouterNav("sport")
                                }>Sport</Link>
                            </li>
                            <li><Link
                             onClick={
                                this.props.isCategoryNews !== undefined
                                    ? () => this.props.everything("entertainment")
                                    : () => this.handleRouterNav("entertainment")
                                }>Entertainment</Link>
                            </li>
                            <li><Link
                             onClick={
                                this.props.isCategoryNews !== undefined
                                    ? () => this.props.everything("technology")
                                    : () => this.handleRouterNav("technology")
                                }>Technology</Link>
                            </li>
                            <li><Link
                             onClick={
                                this.props.isCategoryNews !== undefined
                                    ? () => this.props.everything("health")
                                    : () => this.handleRouterNav("health")
                                }>Health</Link>
                            </li>
                         </ul>
                     </div>
                     <div className="col-md-4 searching">
                         <Search {...this.props}/>
                     </div>
                     <div className="col-md-2 akun">
                         <ul>
                             <li><Link to = "/signin">Masuk</Link></li>
                             <li><Link onClick={this.postSignout}>Keluar</Link></li>
                         </ul>
                     </div>
                </div>
            </div>
         </header>
        );
    }
}

export default Header;