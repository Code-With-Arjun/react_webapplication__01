import React, { useState } from 'react'
import Menu from './Menu'
export default function Courses() {
// const [items, setitems] = useState(Menu);
const [items, setItems] = useState(Menu);

const filterItems=(catregory)=>{
const newItems=Menu.filter((elem)=>{
 if(elem.catregory==catregory){
  return elem.catregory;
 };
})
setItems(newItems);
}
  return (
    <>

{/* --------courses-menu------------- */}
<ul class="nav nav-pills nav-fill navbar-dark bg-light shadow-sm my-2">
  <li class="nav-item">
    <a class="nav-link" href="#" onClick={()=>setItems(Menu)}>All</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#" onClick={()=>filterItems('web-design')}>Web-design</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"  onClick={()=>filterItems('Graphic-design')}>Graphic-design</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"  onClick={()=>filterItems('development')}>Development</a>
  </li>

</ul>

    {/* ----------------------courses.html------------------- */}
<section className="courses my-3">
  <div className="container">
    <div className="row my-3">
{
items.map((element)=>{
const {id,level,title,about,image}=element;
return (

  <div className="col-md-4 col-sm-6 col-xxl-4 my-2 ">
  <div className="card shadow h-100" >
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <div className="row">
        <div className="col-9">
          <a href="#" className="beginer">{level}</a>
        </div>
        <div className="col-3 text-end heart-icon"><ion-icon name="heart" /></div>
      </div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{about}</p>
      <div className="row">
        <div className="col">
          <div className="star">
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star-outline" />
          </div>
        </div>
        <div className="col">4.0/5.0</div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <span>
            <ion-icon name="time" />
          </span>
          18h 56m</div>
        <div className="col">
          <span>
            <ion-icon name="calculator" />
          </span>
          99 lectures</div>
      </div>
    </div>
  </div>
</div>

)
})

}

    </div>
  </div>
</section>
    
    
    
    
    
    </>
  )
}
