import React from 'react'

class AddContact extends React.Component{

    state ={
        name:"",
        email:"",
        number:""
    }

    addHandler = (e) => {

        e.preventDefault()
        if(this.state.name === "" || this.state.email === ""){
            alert("Please fill the details")
        }
        else{ 
        this.props.addcontactHandler(this.state);
        this.setState({name:"",email:"",number:""})
    }
    
    }

    render(){
        return(
            <div className="addContact">
                <h1 className="heading_add">Add Contacts</h1>
                <form>
                <div>
                 <label>Name</label><br/>
                 <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={e => this.setState({name:e.target.value})}/><br/>
                </div><br/>

                <div>
                 <label>Email</label><br/>
                 <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={e => this.setState({email:e.target.value})}/><br/>
                </div><br/>

                <div>
                 <label>Phone</label><br/>
                 <input name="number" type="number" placeholder="Number" value={this.state.number} onChange={e => this.setState({number:e.target.value})}/>
                </div>
                </form>
                <button className="addbtn" onClick={this.addHandler}>Add</button>
            </div>
        );
    }
}

export default AddContact