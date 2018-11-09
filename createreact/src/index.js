import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



//import react from "react"
//https://github.com/facebook/create-react-app

const logo1 ={
    src:'src/logo.jpg',
    alt: 'logo',
    style:'width:70px;'   
};

const logo2 ={
    src:'src/logo2.jpg',
    alt: 'logo2',
    style:'width:55px;'   
};

const login = <form>
                        <div>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div>
                            <input type="text" id="password" name="password" />
                        </div>       

                        
                    <div class = "h-5">  
                        <input type="submit" value="Login with Twitter"/> 
        </div>
                        </form>;

const contactbutton = <form action="http://google.com">
    <input type="link" value="contact us"/>
        </form>;

const helpbutton = <form action="http://google.com">
    <input type="link" value="help"/> 
        </form>;

const splittingoptions = <div class="b-2">
                        <button type="button" class="notbutton" data-toggle="modal" data-target="#exampleModal">
                            Splitting options
                        </button>
                    </div>;

const sendtweet = <div class="b-3">
                        <input type="submit2" value="submit"/></div>;
                        
const charactersused = <div class="b-5">
                            0/280 characters used
                        </div>;
const autosplitting = <div class="b-1">
                        Auto splitting: off
                    </div>;

const modal =         
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-title" id="exampleModalLabel">
                            Tweet splitting allows us to formate your thread for you.
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div class="modal-body">
                        ...
                    </div>

                    <div class="modal-footer">

                        <form>
                            <div class="b-7" data-dismiss="modal"><input type="submit2" value="cancel"/></div>

                            <div class="b-6">
                                <input type="submit2" value="submit"/>
                            </div>
                        </form> 

                    </div>
                </div>
            </div>
        </div>;

class Header extends React.Component {
    render() {
        return (
            <div class = "main-header">
            <div class = "sub-header1">
                <div class = "h-1">
                    <div>
                        Tweet 
                    </div>
                    <div>
                        Together
                    </div>
                </div>
                <div class = "h-2">
            <img 
            src={logo1.src}
            alt={logo1.alt}
            style={logo1.width} />            
            </div>
                <div class = "h-3">Threaded Tweeter</div>
            </div>
            <div class = "sub-header2">
                <div class = "h-4">
                    <div>
                        Username
                    </div>
                    <div>
                        Password
                    </div>
                </div>
                <div class = "h-4">    
            {login}
                </div>
            </div>       
        </div>
        );
    }
}

class Body extends React.Component {
    constructor(props){
        super(props);
        this.handleaddbox = this.handleaddbox.bind(this);
        this.handleremovebox = this.handleremovebox.bind(this);
        this.state = {boxnum: 1};
    }
    handleaddbox(){
        this.setState({boxnum : this.state.boxnum + 1});
    }
    handleremovebox(){
        this.setState({boxnum : this.state.boxnum - 1});
    }
    render() {
        const boxnum = this.state.boxnum;
        let button;
        if(boxnum === 1){
            button = <div class = "centeronebutton">
            <button class = "circlebutton" onClick = {this.handleaddbox}>
                            +
                        </button>
            </div>
        } else{
            button = <div class = "centeronebutton">
             <button class = "circlebutton" onClick = {this.handleremovebox}>
                            -
                        </button> <button class = "circlebutton" onClick = {this.handleaddbutton}>
                            +
                        </button>
            </div>
        }    
        return (
            <div class = "main-body">
            <div class = "sub-body">
                <div class = "sub-body1">
                    {autosplitting}
                    {splittingoptions}
                </div>
                <form>
            <Tweet />
            {button}
                    {sendtweet}
                </form>
            </div>
        </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (

            <div class = "main-footer">
            <div class = "h-1">
            {helpbutton}
            </div>
            <div class = "h-2">
            <img 
            src={logo2.src}
            alt={logo2.alt}
            style={logo2.width} />
            </div>
            <div class = "h-5">  
            {contactbutton}
            </div>
            </div> 
        );
    }
}

class Tweet extends React.Component{
    render(){
        return(
            <div>
            <textarea type="text2" id="tweet" name="tweet">
                    </textarea>
                    <div class = "sub-body2">
                        <div class="b-4">
                            Add picture
                        </div>
            {charactersused} 
                    </div>
            </div>
        )
    }
}

class Page extends React.Component {
    render() {
        return (
            <div>
            <Header />
            <Body />
            <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);

