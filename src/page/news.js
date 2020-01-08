import React, {Component} from "react";
import Header from "../component/header";
import axios from "axios";
import BeritaTerkini from "../component/berita_terkini";
import Berita from "../component/berita"
import "../style/css-final.css";
import "../style/bootstrap.min.css";

const apiKey = "02d1c2c457c14f739ed709c4bca05f3c"
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl+"top-headlines?country=id&apikey="+apiKey;

class News extends Component{

    state = {
        listNews : [],
        isloading : true
    }
    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadline)
            .then(function(response){
                self.setState({ listNews: response.data.articles, isloading: false});
            })
            .catch(function(error){
                self.setState({ isloading:false})
            })
    }
    render(){
        const { listNews, isloading} = this.state;
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
        
        return (
            <div>
                <Header/>
                <div class="container">
                    <div class="row berita">
                        <div class="col-md-1"></div>
                            <BeritaTerkini/>
                            {isloading ? <div style={{ textAlign:"center"}}>looding...</div> : headlineNews}
                    </div>
                </div>
            </div>
        );
    }
}

export default News;