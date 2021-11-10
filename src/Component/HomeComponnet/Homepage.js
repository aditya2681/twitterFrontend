import React from 'react';
import AddTweet from '../TweetsComponnet/AddTweet';
import { Link } from 'react-router-dom';
import DisplayTweet from '../TweetsComponnet/show tweets';
import axios from 'axios';


export default class HomePage extends React.Component{


        constructor(props) {
            super(props);
            this.state = {
                
              tweets: [],
              users:[],
              change: true
            };
            this.changehappen = this.changehappen.bind(this)
          }

componentDidMount(){    
    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
    axios.get("http://localhost:8090/getAllTweets").then((res)=>{
        this.setState({tweets:res.data})
        // console.log(tweets)
    })
    axios.get("http://localhost:8090/getAllUsers").then((respoonse)=>{
            console.log(respoonse.data)
        this.setState({users:respoonse.data})
        console.log(this.state.users)
        })
}
// componentDidUpdate(){    
//     // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
//     axios.get("http://localhost:8090/getAllTweets").then((res)=>{
//         this.setState({tweets:res.data})
//         // console.log(tweets)
//     })
// }
componentDidUpdate(){    
    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
    console.log("Updated")
        console.log(this.state.tweets)
    }

 changehappen(tweet){
    console.log(tweet)
    console.log("qwert")
    this.setState({tweets:tweet})
    console.log(this.state.tweets)
}


render(){
    

        return (
            <React.Fragment>
            <AddTweet changehappen={this.changehappen} users={this.state.users}/>
             {this.state.tweets.length===0 && 
        <div className=" container notweetes leftChange">
                No Tweets to Display
             </div>}
             {this.state.tweets.map(t=>(
                 <DisplayTweet tweet={t} changehappen={this.changehappen}/>
             ))}
            <Link to='/Registration'>Go to Aboutpage</Link>
            </React.Fragment>
        )
        
    }

}