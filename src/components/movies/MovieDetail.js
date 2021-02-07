import React from "react";
import ReactDOM from "react-dom";
import "../scss/MovieDetail.scss";

import history from "../../history";

const MovieDetail = (props) => {
  return ReactDOM.createPortal(
    // <div onClick={props.onDismiss} className="ui dimmer modals visible active">
    //   <div
    //     onClick={(e) => e.stopPropagation()}
    //     className="ui standard modal visible active"
    //   >
    //     <div className="header">{props.title}</div>
    //     <div className="content">{props.content}</div>
    //     <div className="actions">{props.actions}</div>
    //   </div>
    // </div>

    <div className="positioned">
      <div onClick={() => history.goBack()} className="modal">
        <div onClick={(e) => e.stopPropagation()} className="modal-body">
          <h1>I am a modal</h1>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default MovieDetail;
