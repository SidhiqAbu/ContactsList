import Info from "./Info";


function Contacts(props){

     const{data,handleDelete,handleEdit}=props;

    return(        
        <div className="contacts">     
           <div style={{overflowY:'s'}}>
                <ul>
                   {data.map(user=>
                    <Info key={user.id} user={user} handleDelete={handleDelete} handleEdit={handleEdit}  />
                    )}
                </ul>
           </div>
        </div>
    );
}


export default Contacts;