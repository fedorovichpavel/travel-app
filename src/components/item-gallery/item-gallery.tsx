import React, {useContext} from "react";
import { useSelector } from "react-redux";
import {Context} from '../context/context';
import { State } from "../../redux/stateInterface";

import "./../../Normalize.css";
import "./item-gallery.scss";

function ItemGallery(props: any) {

  const lang:string = useSelector((state: State) => state.lang.lang);
  let listItems = props.list;

  listItems = listItems.map((item: any, i: any) => {

    function showModal(e: any) {
      let target = e.target;
      if(target.tagName !== 'BUTTON') {
        while(target.tagName !== 'LI') {
          target = target.parentElement;
        }
        target.classList.toggle('show');
        document.body.classList.toggle('visible');
      }

    }

    function showPrev(e: any) {
      let target = e.target;
      let item = target.parentElement.parentElement;
      item.classList.remove('show');

      let itemPrev = item.previousElementSibling;
      if(itemPrev) {
        itemPrev.classList.add('show');
      } else {
        itemPrev = item.parentElement.lastElementChild;
        itemPrev.classList.add('show');
      }
    }

    function showNext(e: any) {
      let target = e.target;
      let item = target.parentElement.parentElement;
      item.classList.remove('show');

      let itemNext = item.nextElementSibling;
      if(itemNext) {
        itemNext.classList.add('show');
      } else {
        itemNext = item.parentElement.children[0];
        itemNext.classList.add('show');
      }
    }

    return (
      <li
        key={i.toString()}
        className={`item-${item.id} item`}
        data-country={item.id}
        onClick = {showModal}
      >
        <div className="wrap-show">
          <button className="prev" onClick = {showPrev}>prev</button>
          <button className="next" onClick = {showNext}>next</button>
          <div className="wrap-item">
            <img src={item.src} alt="" />
            <div className="item-content">
              <h4>{item.title}</h4>
            </div>
          </div>
          <div className="item-preview">
            <p>{item.preview}</p>
          </div>
        </div>
      </li>
  )}
);

  return <ul className="item-gallery">{listItems}</ul>;
}

export default ItemGallery;
