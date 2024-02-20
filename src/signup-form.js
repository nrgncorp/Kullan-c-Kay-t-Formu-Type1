import React from "react";

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            mail: ""
        }
    }

    checkForm = () => {
        this.setState({name: document.getElementById("name").value}, () => {
            if(this.state.name === ""){
                document.getElementById("name").classList.add("error");
                document.getElementById("name").placeholder="Ad Girmediniz.";
            }else{
                document.getElementById("name").classList.remove("error");
                document.getElementById("name").placeholder="Ad";
            }
        });
        this.setState({surname: document.getElementById("surname").value}, () => {
            if(this.state.surname === ""){
                document.getElementById("surname").classList.add("error");
                document.getElementById("surname").placeholder="Soyad Girmediniz.";
            }else{
                document.getElementById("surname").classList.remove("error");
                document.getElementById("surname").placeholder="Soyad";
            }
        });
        this.setState({mail: document.getElementById("mail").value}, () => {
            if(this.state.mail === ""){
                document.getElementById("mail").classList.add("error");
                document.getElementById("mail").placeholder="E-Posta Girmediniz.";
            }else{
                document.getElementById("mail").classList.remove("error");
                document.getElementById("mail").placeholder="E-Posta";
            }
            this.checkSuccess();
        });
    }
    checkSuccess= () => {
        if(this.state.name !="" && this.state.surname !="" && this.state.mail !=""){
            alert("Kayıt Başarılı");
        }else{
            alert("Kayıt Başarısız");
        }
    }

    render(){
        return(
            <form>
                <h3>Kayıt Formu</h3>
                <input id="name" type="text" placeholder="Ad"></input>
                <input id="surname" type="text" placeholder="Soyad"></input>
                <input id="mail" type="e-mail" placeholder="E-Posta"></input>
                <input id="button" type="button" value="Kayıt Ol" onClick={this.checkForm}></input>
            </form>
        )
    }
}

export default Signup