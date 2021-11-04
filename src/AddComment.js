import React, { Component } from 'react'
import './addtweet.css'
// import React, { Component } from 'react'

export default class AddTweet extends Component {
    render() {
        return (
            <div className="container asd">
                <div className="row container">

                    <div className="col-lg-4">
                        <h1>Username</h1>
                    </div>
                    <div className="col-lg-8">
                        <form>
                            <div class="form-group">
                                <label for="addComment">Comment on this tweet</label>
                                <input type="text" class="form-control" id="tweet" placeholder="What's Happening" />
                            </div>
                            <div className="text-left">
                            <button  type="submit" class="btn btn-primary ">Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}
