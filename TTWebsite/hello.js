const logo2 ={
    src:'logo2.jpg',
    alt: 'logo2',
    style:'width:55px;'   
};

const contactbutton = <form action="http://google.com">
            <input type="link" value="contact us"/>
            </form>;

const helpbutton = <form action="http://google.com">
            <input type="link" value="help"/> 
            </form>;


class Header extends React.Component {
    render() {
        return (
            <div> header
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

