import React from "react";
import { Link } from "react-router-dom";


const NextEvent = ({ title, description, eventDate,  }) => {
  function conectar(idEvent) {
    // dá pra usar a prop idEvent? testar
    alert(`Chamar o recurso para conectar: ${idEvent}`);
  }
  return (
    <article className="event-card">
      <h2 className="event-card__title">{title}</h2>

      <p
        className="event-card__description"
        
        data-tooltip-id={idEvent}
        data-tooltip-content={description}
        data-tooltip-place="top"
      >
        <Tooltip id={idEvent} className="tooltip" />
        {description.substr(0, 15)} ...
      </p>

      <p className="event-card__description">
        {/* aplicar a função pra converter a data */}
        {dateFormatDbToView(eventDate)}
      </p>


       <Link to={buttonLink} className="event-card__description" />

      <a
        onClick={() => {
          visualizar(idEvent);
        }}
        className="event-card__connect-link"
      >
        visualizar
      </a>
    </article>
  );
};

export default NextEvent;