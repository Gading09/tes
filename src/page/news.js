import React, {Component} from "react";
import Header from "../component/header";
import BeritaTerkini from "../component/berita_terkini";
import Berita from "../component/berita"
import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Redirect } from "react-router-dom"

class News extends Component{
    RequestNewCategory = async () => {
        const paramCategory = await this.props.match.params.category;
        await this.props.requestNews(paramCategory)
    }
    handleRouterCategory = async categoryName => {
        const category = categoryName;
        await this.props.history.repleace("/news-category/"+category);
        await this.RequestNewCategory();
    }
    componentDidMount = async() => {
        // console.warn("cek props component did mount", this.props);
        
        await this.props.RequestDataNews()
    }
    handleInputChange = async event => {
        await this.props.handleInputChangeSearch(event)
        const value = this.props.search
        this.props.searchNews(value);
    }

    render(){
        // console.warn("cek props", this.props);
        
        const { listNews, isloading} = this.props;
        const topHeadlines = listNews.filter(item => {
            if (item.content !== null && item.image !== null){
                return item;
            }
            return false;
        });

        const headlineNews = topHeadlines.map((item) => {
            return(
                <Berita
                author={item.author}
                img={item.urlToImage}
                title={item.title}
                description={item.description}
                publish={item.publishedAt}
                url={item.url}
                />
            );
        });
        if(this.props.is_login===false){
            return <Redirect to ={{ pathname: '/signin' }}/>
        }
        return (
            <div>
                <div>{this.props.test}</div>
                <Header
                doSearch={event => this.handleInputChange(event)}
                everything = {event => this.handleRouterCategory(event)}
                placeholder="ketik sesuatu"
                {...this.props}
                />
                <div class="container-fluid">
                    <div class="row berita">
                        <div class="col-md-1"></div>
                        <BeritaTerkini/>
                        <div className="col-md-7 habis">
                        {isloading ? <div style={{ textAlign:"center"}}>looding...</div> : headlineNews}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    "test, listNews, isloading, search",
    actions
  )(withRouter(News));