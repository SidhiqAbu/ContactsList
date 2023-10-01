

function Info(props){
    const {name,phone,email}=props.user;
    const{handleDelete,handleEdit}=props;
    return(
        <div  className="innerBox1">
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p className="p1" itemID={name} onClick={()=>{handleEdit(props.user)}} >Edit</p>
            <p className="p1" itemID={name} onClick={()=>{handleDelete(props.user)}}>Delete</p>
        </div>
    );
}


export default Info;