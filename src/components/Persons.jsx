import React from 'react';
import { useState } from 'react';
import { Person } from './Person'; // Assuming Person component is located in './Person'

export const Persons = () => {
  const [persons] = useState([
    {
      id: 1,
      name: 'Ninna Arroye',
      role: 'Diseñadora UX/UI',
      img: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    },
    {
      id: 2,
      name: 'Alejandro Degli Sposti',
      role: 'Arquitecto de Software',
      img: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id: 3,
      name: 'Jeremy Mendez',
      role: 'Ingeniero de DevOps',
      img: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
  ]);

  return (
    <div>
      <h2>IT Team</h2>
        <div className='container d-flex justify-content-center'>
          <div className="d-flex flex-row">
            {persons.map(person => {
              return (
                <div>
                  <Person
                    id={person.id}
                    name={person.name}
                    role={person.role}
                    img={person.img}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};
