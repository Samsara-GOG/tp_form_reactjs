// Exo - Les fondamentaux

// Consignes: Reproduire ce formulaire en HTML/CSS + ReactJS

// A la soumission du formulaire, ajouter les données entrantes dans un tableau "comments" situé dans l'objet state.
// Ex: 
// comments: [  
// { name: "JB", message: "Youhou la famille!"},
// { name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
//  ]

// a rendre: lien git https://classroom.google.com/u/0/c/MTg2OTY1MDMwNDc0/a/MjE0NjI4ODA5NDQx/details

class App extends React.Component {

    state = {
        name: "",
        comment: "",
        object: {},
        comments: []
    }

    handleName = (event) => {
        // console.log(event.target.value);

        this.setState({
            name: event.target.value
        })
    }

    handleComment = (event) => {
        // console.log(event.target.value);

        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // const tmp1
        // const tmp2
        // const tmp3        

        const tmp1 = this.state.comments.concat(`name: ${this.state.name}`, `message: ${this.state.comment}`);        

        this.setState({
            comments: tmp1
        })

    }

    render() {
        return(
            <div className="root">
                <p className="title">Say something</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"  name="name" 
                        value={this.state.name}
                        onChange={this.handleName}
                        placeholder="Your Name"></input>
                    </div>
                    <div>
                        <textarea name="comment" cols="" rows="" 
                        value={this.state.comment} 
                        onChange={this.handleComment}
                        placeholder="Your Comment"></textarea>
                    </div>
                    <div>
                        <input className="btn" type="submit" value="Comment >"></input>
                    </div>
                </form>
            </div>
    )   
}
}

ReactDOM.render(<App/>, document.getElementById('app'));
