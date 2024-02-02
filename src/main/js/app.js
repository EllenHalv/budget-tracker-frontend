const React = require('react');
const ReactDOM = require('react-dom');
import client from './client';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {patterns: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/patterns'}).done(response => {
            this.setState({patterns: response.entity._embedded.patterns});
        });
    }

    render() {
        return (
            <PatternList patterns={this.state.patterns}/>
        )
    }
}

class PatternList extends React.Component{
    render() {
        const patterns = this.props.patterns.map(pattern =>
            <Pattern key={pattern._links.self.href} pattern={pattern}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Rows</th>
                </tr>
                {patterns}
                </tbody>
            </table>
        )
    }
}

class Pattern extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.pattern.name}</td>
                <td>{this.props.pattern.description}</td>
                <td>{this.props.pattern.rows}</td>
            </tr>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)