import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class Berita extends Component{
    render(){
        return(
            <div className="col-md-12 kotak">
                <div className="col-md-12 gambar">
                    <img src={this.props.img} alt=""/>
                </div>
                <div className="col-md-12">
                    <div className="col-md-12 judul">
                        <a href={this.props.url} alt="">{this.props.title}</a>
                    </div>
                    <div className="col-md-12 pendek">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="col-md-12 waktu">
                        <p className="waktu">{this.props.publish}</p>
                    </div>
                    <div className="col-md-12 bawah">
                        <div className="col-md-4 apapun">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                        <div className="col-md-4 apapun">
                            <i class="fa fa-share-alt" aria-hidden="true"></i>
                        </div>
                        <div className="col-md-4 apapun">
                        <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Berita;