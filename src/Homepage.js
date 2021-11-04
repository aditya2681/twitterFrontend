import React from 'react';
import AddTweet from './AddTweet';
import { Link } from 'react-router-dom';
import DisplayTweet from './show tweets';
import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';
class Homepage extends React.Component {
    render() { 
        const a = [{
            "username": "Aditya",
            "tweet": [
                {
                    "tweet": "Updated tweet",
                    "likes": 8,
                    "replies": []
                },
                {
                    "tweet": "Updated tweet",
                    "likes": 0,
                    "replies": []
                }
            ]
        },
        {
            "username": "Santhosh",
            "tweet": [
                {
                    "tweet": "Santhosh tweet",
                    "likes": 5,
                    "replies": null
                },
                {
                    "tweet": "Updated tweet",
                    "likes": 0,
                    "replies": []
                }
            ]
        }
    
    ]
    

        return (
            <React.Fragment>
            <AddTweet />
            {console.log(a)}
            {a.map(({user})=>{
                return <DisplayTweet kk={user}/>
            })      }      
            <Link to='/Registration'>Go to Aboutpage</Link>
            </React.Fragment>
        )
        
    }
}
 
export default Homepage;