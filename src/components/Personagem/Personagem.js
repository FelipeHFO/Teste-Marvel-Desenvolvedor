import React, { useState } from 'react';
import { getPersonagemDetails } from '../../services/personagens';

function Personagem({id, name, description}) {
  const [visible, setVisible] = useState({
    comics: false, 
    events: false, 
    series: false, 
    stories: false
  });

  const [comics, setComics] = useState('');
  const [events, setEvents] = useState('');
  const [series, setSeries] = useState('');
  const [stories, setStories] = useState('');
  
  async function handle(params) {
    const { data } = await getPersonagemDetails(id, params);
    
    if(params === 'comics'){
      setComics(data);
      setVisible({comics: true, events: false, series: false, stories: false});
    }
    if(params === 'events'){
      setEvents(data);
      setVisible({comics: false, events: true, series: false, stories: false});
    }
    if(params === 'series'){
      setSeries(data);
      setVisible({comics: false, events: false, series: true, stories: false});
    }
    if(params === 'stories'){
      setStories(data);
      setVisible({comics: false, events: false, series: false, stories: true});
    }
  }

  const RenderComics = () => {
    const isVisible = comics !== '' && visible.comics === true;

    if(!isVisible)
      return null;

    return comics.items.map(item => <li key={id+item.name}>{item.name}</li>)
  }

  const RenderEvents = () => {
    const isVisible = events !== '' && visible.events === true;

    if(!isVisible)
      return null;

    return events.items.map(item => <li key={id+item.name}>{item.name}</li>)
  }

  const RenderSeries = () => {
    const isVisible = series !== '' && visible.series === true;

    if(!isVisible)
      return null;

    return series.items.map(item => <li key={id+item.name}>{item.name}</li>)
  }

  const RenderStories = () => {
    const isVisible = stories !== '' && visible.stories === true;

    if(!isVisible)
      return null;

    return stories.items.map(item => <li key={id+item.name}>{item.name}</li>)
  }

  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <menu>
        <button onClick={() => handle('comics') }>Comics</button>
        <button onClick={() => handle('events')}>Events</button>
        <button onClick={() => handle('series')}>Series</button>
        <button onClick={() => handle('stories')}>Stories</button>
      </menu>
      <main>
        <ul>
          <RenderComics />
          <RenderEvents />
          <RenderSeries />
          <RenderStories />
        </ul>
      </main>
    </div>
  )
}

export default Personagem;