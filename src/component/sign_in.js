import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import Header from "./header";

class SignIn extends Component {
  state = { namaPengguna: "", kataKunci: "" };

  changeInput = e => {
    console.warn("cek event target", e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };

  postLogin = () => {
    const { namaPengguna, kataKunci } = this.props;
    const data = {
      username: namaPengguna,
      password: kataKunci
    };
    store.setState({
      'namaPengguna': data.username,
      'kataKunci': data.password
    });
    const self = this;
    axios
      .post("https://gading.free.beeceptor.com/login", data)
      .then(function (response) {
        console.warn("cek respon data login ", response.data.first_name);
        if (response.data.first_name){
        localStorage.setItem("is_login", true);
        localStorage.setItem("first_name", response.data.first_name);
        localStorage.setItem("last_name", response.data.last_name);
        localStorage.setItem("full_name", response.data.full_name);
        localStorage.setItem("email", response.data.email);
        store.setState({
          'is_login': true,
          'first_name': response.data.first_name,
          'last_name': response.data.last_name,
          'full_name': response.data.full_name,
          'email': response.data.email
        });
        self.props.history.push("/profile");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    console.log("state", this.state);
    return (
      <React.Fragment>
        <Header {...this.props} />
        <section>
          <form onSubmit={e => e.preventDefault()}>
            <div class="wrapper fadeInDown yuks">
                <div id="formContent">
                <h4 className="wahana">Sign In</h4>
                    <form>
                        <input 
                        type="text"
                        id="login"
                        class="fadeIn second"
                        name="namaPengguna" 
                        placeholder="login"
                        onChange={e => this.changeInput(e)}
                        required
                        />

                        <input
                        type="text"
                        id="password"
                        class="fadeIn third"
                        name="kataKunci"
                        placeholder="password"
                        onChange={e => this.changeInput(e)}
                        required
                        />

                        <input
                        type="submit"
                        class="fadeIn fourth"
                        value="Log In"
                        onClick={() => this.postLogin()}
                        />
                    </form>
                </div>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(
  "namaPengguna, kataKunci, last_name, full_name, email, is_login",
  actions
)(withRouter(SignIn));