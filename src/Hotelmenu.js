import {hotels} from './hotels'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {HiOutlineArrowNarrowRight,HiOutlineArrowNarrowLeft} from 'react-icons/hi';

export default function Hotelmenu() {
  const loading= useSelector(state=>state.loading)
  const searchValu = useSelector(state=>state.searchValu)
  const searching = useSelector(state=>state.searching)
  const currentPage = useSelector(state=>state.currentPage)
  const dispatch = useDispatch();
  const pageSize = 8;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedResults = searching == '' ? hotels.slice(startIndex, endIndex) : searching.slice(startIndex, endIndex);
  

const filtering = () =>{
    dispatch({type:'FOR__LOADING'});
    const filtered = hotels.filter(item => item.name.toLocaleLowerCase().includes(searchValu.toLowerCase()));
    setTimeout(() => {
      
      {
        dispatch({type:'SEARCHING', payload:filtered},{type:'CHANGE__CURRENT__PAGE', payload:1})
              
      }    
    
    }, 2900);
}

  useEffect(() => {
        let loader = document.querySelector('.loader');
        loader.style = 'opacity :1; visibility:visible'
        setTimeout(() => {
          loader.style = 'opacity : 0; visibility:hidden'
        }, 2900);
  },[loading]);

  return (
    <div className='hotels__container'>
      <div className="loader">
        <div className="loading"></div>
      </div>
      <label>
        <input type="search" placeholder='search' value={searchValu} onChange={(e) =>{
          dispatch({type:'SEARCHING__VAL', payload:e.target.value})
          
        } } />
        <button onClick={() => {
           filtering()
           dispatch({type:'CHANGE__CURRENT__PAGE', payload:1})
        }}>Search</button>
      </label>
        {
            paginatedResults.map((hotel,index)=> {
                return <div className='hotels__item' kay={hotel.id}>
                  <img src={hotel.picture} />
                  <h2>{hotel.name}</h2>
                  <a href="#">{hotel.distance}</a>
                  <p>{hotel.info}</p>
                  <span>1 days is ${hotel.price}</span>
                 <Link to='/moreinformationforhotel'> 
                 <button onClick={()=>{
                    dispatch({type:'GET__INDEX',payload:index});
                    dispatch({type : 'CHANGE__INDEX', payload : false})              
                  }}>View Details</button>
                  </Link>
                </div>
            })
        }
        
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => {
              dispatch({type:'FOR__LOADING'});
              setTimeout(() => {
                { dispatch({type:'CHANGE__CURRENT__PAGE', payload:currentPage-1})}
               
              }, 2900);
            }}
            style={{ opacity: currentPage === 1 ? 0.4 : 1 }}
          >
            <HiOutlineArrowNarrowLeft />
          </button>
          <span>Page {currentPage}</span>
          <button
            disabled={searching == '' ? endIndex >= hotels.length : endIndex >= searching.length}
              onClick={() => {
              dispatch({type:'FOR__LOADING'});
              setTimeout(() => {
               { dispatch({type:'CHANGE__CURRENT__PAGE', payload:currentPage+1})}
              }, 3000);
            }}
            style={{ opacity: searching == '' ? (endIndex >= hotels.length ? 0.4 : 1) : (endIndex >= searching.length ? 0.4 : 1 )}}
          >
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
    </div>
  )
}







