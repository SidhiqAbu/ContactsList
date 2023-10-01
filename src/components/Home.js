
// importing of required files....
import Aside from './Side'
import Contacts from './Contacts';
import { useEffect, useState } from 'react';
import Taggle from './Taggle';

function Home(){
    // use of useState hook................
    const [data,setData] = useState([]);
    const [user,setUser] = useState({});
    const [flag,setFlag] = useState('false');

    
    // Fetching of data using given url.........use of useEffects hooks...........
    const url='https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        fetch(url)
          .then((r) => r.json())
          .then((r) => {
            setData(r);
          }).catch(err=>{
            if(err) window.alert(('Error in fetching data. Please check your Internet connection onces'));
          });
          if(flag){
            document.body.classList.remove('body1');
          }else{
            document.body.classList.add('body1');
          };
      }, [url,flag]);

      const handleTagle=()=>{
          setFlag(!flag);
          console.log(flag,'clicke handleTagle btn.!');
      }

    
    //   hadle of Click on Save btn..........
    const handleSave=(e)=>{
      e.preventDefault();
      setData([...data,user]);
      setUser({});
    }

    //   handle of Click on Edite btn.........
      const handleEdit=(user)=>{
        if(data.length >= 2){
          let modifiedData = data.filter(item=>item.name !== user.name);
          setData(modifiedData);
          setUser(user);
        }
      }

    //   handle of Click on delete btn............
      const handleDelete =(user)=>{
        if(data.length >= 2){
          let modifiedData = data.filter(item=>item.name !== user.name);
          setData(modifiedData);
        }
      }

      //  hadleUpdate on change.......
      const handleUpdate=(e)=>{
        setUser({
          ...user,
          [e.target.name]:e.target.value
        })
      }

    

    //   check for data is empty.........
    if(data.length === 0) {
        return (<div className='errorHandler'>Lodding.........!</div>);
    }   

    // return of components when data is found......
    return(
      <>
        <Taggle handleTagle={handleTagle}/>
        <div className='homeBox'>
        <Aside handleSave={handleSave} handleUpdate={handleUpdate} len={data.length} user={user}  />
        <Contacts data={data} handleEdit={handleEdit} handleDelete={handleDelete}/>
        </div>
      </>
      
    );
    
}


// exporting of function...........
export default Home;