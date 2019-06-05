class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'initial entry' }
    }
    getArtist(){
        fetch('http://ws....'+'Ceca'+'....');



        this.componentDidMount();{
            this.getArtist();
        }
    }

    render() {
        return (
            <div>
                <div>Hello, React works</div>
                <img src={this.state.artist.image}/>
                <div>{this.state.name}</div>

            </div>
        )
    }
}
ReactDOM.render(
    <Hello />,
    document.getElementById('main-container')
    
    
)