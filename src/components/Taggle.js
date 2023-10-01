

function Taggle(props){
    const{handleTagle}=props;
    return(
        <div className="outerTagle">
            <h4 className="tagleHeader">Dark mode : </h4>
              <input type ='checkbox' className="innerTagle"  onClick={()=>{handleTagle()}}/>
          </div>
    );
}

export default Taggle;