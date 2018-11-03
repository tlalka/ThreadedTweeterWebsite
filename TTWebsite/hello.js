
//import react from "react"
//https://github.com/facebook/create-react-app

const logo1 ={
    src:'logo.jpgX',
    alt: 'logo',
    style:'width:70px;'   
};

const logo2 ={
    src:'logo2.jpgX',
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
    render() {
        return (
            <div> body
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

