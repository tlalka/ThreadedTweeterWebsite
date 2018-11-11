import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

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

const tweet =
    <div>
            <textarea type="text2" id="tweet" name="tweet">
                    </textarea>
                    <div className = "sub-body2">
                        <div className="b-4">
                            Add picture
                        </div>
            {charactersused} 
                    </div>
            </div>
;

class LoginButton extends React.Component {
    constructor () {
        super()
        this.state = {
            loginUrl: '',
            resourceOwnerKeyCookie: '',
            resourceOwnerSecretCookie: ''
        }

        axios.get('https://api.threadedtweeter.com/login').then(
            response => this.setState({loginUrl: response.data.url,
                                        resourceOwnerKeyCookie: response.data.cookie_1,
                                        resourceOwnerSecretCookie: response.data.cookie_2})
        )
    }

    render() {
        return (
            <div className="login_button">
                <a className="button" href={this.state.loginUrl}>Login with Twitter</a>
            </div>
        )
    }
}

const contactbutton = <form action="http://google.com">
    <input type="link" value="contact us"/>
        </form>;

const helpbutton = <form action="http://google.com">
    <input type="link" value="help"/> 
        </form>;

const splittingoptions = <div className="b-2">
                        <button type="button" className="notbutton" data-toggle="modal" data-target="#exampleModal">
                            Splitting options
                        </button>
                    </div>;

const sendtweet = <div className="b-3">
                        <input type="submit2" value="submit"/></div>;
                        
const charactersused = <div className="b-5">
                            0/280 characters used
                        </div>;
const autosplitting = <div className="b-1">
                        Auto splitting: off
                    </div>;

const modal =         
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title" id="exampleModalLabel">
                            Tweet splitting allows us to formate your thread for you.
                        </div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div className="modal-body">
                        ...
                    </div>

                    <div className="modal-footer">

                        <form>
                            <div className="b-7" data-dismiss="modal"><input type="submit2" value="cancel"/></div>

                            <div className="b-6">
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
            <div className = "main-header">
            <div className = "sub-header1">
                <div className = "h-1">
                    <div>
                        Tweet 
                    </div>
                    <div>
                        Together
                    </div>
                </div>
                <div className = "h-2">
            <img 
            src={logo1.src}
            alt={logo1.alt}
            style={logo1.width} />            
            </div>
                <div className = "h-3">Threaded Tweeter</div>
            </div>
            <div className = "sub-header2">
                <div className = "h-4">    
                     <LoginButton />
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
        const boxnum = {index: 1, content:tweet};
        const boxes = [];
        boxes.push({boxnum});
        this.state = {boxes};
        
        
    }
    handleaddbox(){
        const newBoxes = this.state.boxes;
        newBoxes.push({index: newBoxes.length, content:tweet});
        this.setState({boxes : newBoxes});
        console.log("handleaddbox " + this.state.boxes.length);
    }
    handleremovebox(){
        const newBoxes = this.state.boxes;
        newBoxes.splice((newBoxes.length-1),1);
        this.setState({boxes : newBoxes});
        console.log("handleremovebox " + this.state.boxes.length);
    }
    render() {
        const boxes = this.state.boxes;
        const boxnum = boxes.length;
        let button;
        if(boxnum === 1){
            button = <div className = "centeronebutton">
            <button className = "circlebutton" onClick = {this.handleaddbox}>
                            +
                        </button>
            </div>
        } else{
            button = <div className = "centeronebutton">
             <button className = "circlebutton" onClick = {this.handleremovebox}>
                            -
                        </button>
            <button className = "circlebutton" onClick = {this.handleaddbox}>
                            +
                        </button>
            </div>
        }
        return (
            <div className = "main-body">
            <div className = "sub-body">
                <div className = "sub-body1">
                    {autosplitting}
                    {splittingoptions}
                </div>
<Tweets boxes={boxes}/>             
            {button}
                    {sendtweet}

            </div>
        </div>
        );
    }
}

const Tweets = ({boxes}) => (
<div>
    {
        boxes.map( box =>(
        <div key = {box.index}>
    <textarea type="text2" id="tweet" name="tweet">
                    </textarea>
                    <div className = "sub-body2">
                        <div className="b-4">
                            Add picture
                        </div>
            {charactersused} 
                    </div>
    </div>
        ))
    }
    </div>
) 

class Footer extends React.Component {
    render() {
        return (

            <div className = "main-footer">
            <div className = "h-1">
            {helpbutton}
            </div>
            <div className = "h-2">
            <img 
            src={logo2.src}
            alt={logo2.alt}
            style={logo2.width} />
            </div>
            <div className = "h-5">  
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
                    <div className = "sub-body2">
                        <div className="b-4">
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

