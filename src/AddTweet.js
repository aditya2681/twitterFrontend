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
                                <label for="exampleInputEmail1">Tell us about something</label>
                                <input type="text" class="form-control" id="tweet" placeholder="What's Happening" />
                                <small id="emailHelp" class="form-text text-muted">Tweeeeet!!</small>
                            </div>
                            <div className="text-left">
                            <button  type="submit" class="btn btn-primary ">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}
