import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Item({ data }) {
    if (!data || data.error) {
        return null; 
    }
    
    if (data.results.length === 0) {
        return <div>Nenhum item encontrado.</div>; 
    }
    
    return (
        <div>
        {data.results.map((item, index) => (
            <Accordion key={index}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
            >
                {renderAccordionTitle(item)} 
            </AccordionSummary>
            <AccordionDetails>
                {renderAccordionDetails(item)}
            </AccordionDetails>
            </Accordion>
        ))}
        </div>
    );
}

const renderAccordionTitle = (item) => {
  return item.name; 
};

const renderAccordionDetails = (item) => {
  let details = '';

  if (item.birth_year) { 
    details = (
        <div>
            <p>Height: {item.height}</p>
            <p>Mass: {item.mass}</p>
            <p>Hair Color: {item.hair_color}</p>
            <p>Skin Color: {item.skin_color}</p>
            <p>Eye Color: {item.eye_color}</p>
            <p>Gender: {item.gender}</p>
        </div>
    );
  } else if (item.climate) { 
    details = (
        <div>
            <p>Rotation Period: {item.rotation_period}</p>
            <p>Orbital Period: {item.orbital_period}</p>
            <p>Diameter: {item.diameter}</p>
            <p>Climate: {item.climate}</p>
            <p>Gravity: {item.gravity}</p>
            <p>Terrain: {item.terrain}</p>
            <p>Surface Water: {item.surface_water}</p>
            <p>Population: {item.population}</p>
        </div>
    );
  } else if (item.model) { 
    details = (
        <div>
            <p>Model: {item.model}</p>
            <p>Length: {item.length}</p>
            <p>Passengers: {item.passengers}</p>
            <p>Starship Class: {item.starship_class}</p>
            <p>Manufacturer: {item.manufacturer}</p>
            <p>Cargo Capacity: {item.cargo_capacity}</p>
            <p>Cost in Credits: {item.cost_in_credits}</p>
        </div>
    );
  } else {
    details = 'Detalhes desconhecidos';
  }

  return <div>{details}</div>;
};

export default Item;
