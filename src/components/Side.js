

const Aside=(props)=>{
    const{handleSave,handleUpdate,len,user}=props;
    console.log(user,'AsidePage');
    return(
        <div  className="outerBox">
            <h3>Add Contact</h3>
            <form  className="innerBox" onSubmit={(e)=>{handleSave(e)}}>
                    <label  className="label1">Full name : </label>
                    <input  type="text" name="name" className="input1" onChange={(e)=>handleUpdate(e)}  value={user.name || ""} /><br/>
                    <label  className="label2">Email address : </label>
                    <input type="email"  name="email"  className="input1" onChange={(e)=>handleUpdate(e)} value={user.email || ""}  /><br/>
                    <label  className="label3">Mobile number : </label>
                    <input  type="text" name="phone"  className="input1" onChange={(e)=>handleUpdate(e)} value={user.phone || ""} /><br/>
                    <button  className="button1">Save</button>
            </form>
            <div  className="innerBox">
                <p>Total Contacts :{len} </p>
            </div>
        </div> 
    );
}


export default Aside;