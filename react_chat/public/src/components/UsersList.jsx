/**@jsx React.DOM */

'use strict';

var UsersList = React.createClass({
    render: function(){
        var users= this.props.users.map(function(user){
            return <div className='chat-user'>{user}</div>
        })
        return(
        <div className='userslist col-xs-3 col-md-4 col-lg-4'>
            <p className = "OnlineUsers">Online users:</p>
            {users}
        </div>
        )
    }
}
)