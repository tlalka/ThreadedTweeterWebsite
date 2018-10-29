


class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
            className="square"
            onClick={() => this.setState({value: 'X'})}
    >
        {this.state.value}
</button>
);
}
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
    {this.renderSquare(1)}
{this.renderSquare(2)}
</div>
<div className="board-row">
    {this.renderSquare(3)}
{this.renderSquare(4)}
{this.renderSquare(5)}
</div>
<div className="board-row">
    {this.renderSquare(6)}
{this.renderSquare(7)}
{this.renderSquare(8)}
</div>
</div>
);
}
}

class Page extends React.Component {
    render() {
        return (
            <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
            
            
            
            
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);





/*
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
                <div class = "h-2"></div>
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
                    <form>
                        <div>
                            username
                        </div>
                        <div>
                            username
                        </div>       

                        
                    <div class = "h-5">  
                        submit 
                                                
</div>
                        </form>
                </div>
            </div>       
        </div>


        <div class = "main-body">
            <div class = "sub-body">
                <div class = "sub-body1">
                    <div class="b-1">
                        Auto splitting: off
                    </div>
                    <div class="b-2">
                        <button type="button" class="notbutton" data-toggle="modal" data-target="#exampleModal">
                            Splitting options
                        </button>
                    </div>
                </div>
                <form>
                    <textarea type="text2" id="tweet" name="tweet">
                    </textarea>

                    <div class = "sub-body2">
                        <div class="b-4">
                            Add picture
                        </div>

                        <button class = "circlebutton">
                            +
                        </button>                

                        <div class="b-5">
                            0/280 characters used
                        </div>
                        </div>


                    <div class="b-3">
                        <input type="submit2" value="submit">
                    </div>
                </form>

            </div>
        </div>





        <!-- Modal -->
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
                            <div class="b-7" data-dismiss="modal"><input type="submit2" value="cancel"></div>

                            <div class="b-6">
                                <input type="submit2" value="submit">
                            </div>
                        </form> 

                    </div>
                </div>
            </div>
        </div>


        <div class = "main-footer">
            <div class = "h-1">
                <form action="http://google.com">
                    <input type="link" value="help"> 
                </form>   
            </div>

            <div class = "h-2"><img src="logo2.jpg" alt="Logo" style="width:55px;"></div>

            <div class = "h-5">  
                <form action="http://google.com">
                    <input type="link" value="contact us"> 
                </form>
            </div>
        </div>
        */