import React from 'react';
import AddTweet from '../TweetsComponnet/AddTweet';
import { Link } from 'react-router-dom';
import DisplayTweet from '../TweetsComponnet/show tweets';
import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';
import axios from 'axios';


export default class HomePage extends React.Component{


        constructor(props) {
            super(props);
            this.state = {
                
              tweets: [],
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
            <AddTweet changehappen={this.changehappen}/>
            {/* {console.log(a)} */}
            {/* {this.state.tweets.forEach((t)=>{
                '<h1>efvwe</h1>'
                //  <DisplayTweet tweet={t}/>
            })      }      
             */}
             {this.state.tweets.map(t=>(
                 <DisplayTweet tweet={t}/>
             ))}
            <Link to='/Registration'>Go to Aboutpage</Link>
            </React.Fragment>
        )
        
    }

}