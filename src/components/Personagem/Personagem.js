import React, { useEffect, useState } from 'react';
import { getPersonagemDetails } from '../../services/personagens';
import StylesPages from '../../pages/StylesPages.module.css';

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

  useEffect( () => {
    getPersonagemDetails(id, 'comics')
    .then(({data}) => setComics(data));
    setVisible({comics: true, events: false, series: false, stories: false});
  }, [])
  
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
    
    if(comics.errors && comics.errors.msg)
      return <h1>{comics.errors.msg}</h1>;

    return comics.items.map(item => <li key={id+item.name}>{item.name}</li>);
  }

  const RenderEvents = () => {
    const isVisible = events !== '' && visible.events === true;

    if(!isVisible)
      return null;

    if(events.errors &&events.errors.msg)
      return <h1>{events.errors.msg}</h1>;

    return events.items.map(item => <li key={id+item.name}>{item.name}</li>);
  }

  const RenderSeries = () => {
    const isVisible = series !== '' && visible.series === true;

    if(!isVisible)
      return null;
    
    if(series.errors && series.errors.msg)
      return <h1>{series.errors.msg}</h1>;

    return series.items.map(item => <li key={id+item.name}>{item.name}</li>);
  }

  const RenderStories = () => {
    const isVisible = stories !== '' && visible.stories === true;

    if(!isVisible)
      return null;

    if(stories.errors && stories.errors.msg)
      return <h1>{stories.errors.msg}</h1>;

    return stories.items.map(item => <li key={id+item.name}>{item.name}</li>);
  }

  return (
    <div className={StylesPages.containerHero}>
      <div>
        <h1 className={StylesPages.nameHero} data-testid='nome-personagem'>{name}</h1>
        <h3 className={StylesPages.descriptionHero}>{description}</h3>
      </div>
      <nav className={StylesPages.containerBtns}>
        <button onClick={() => handle('comics') } className={visible.comics === true ? `${StylesPages.heroesBtns} ${StylesPages.isSelected}` : `${StylesPages.heroesBtns}`}>Quadrinhos</button>
        <button onClick={() => handle('events')} className={visible.events === true ? `${StylesPages.heroesBtns} ${StylesPages.isSelected}` : `${StylesPages.heroesBtns}`}>Eventos</button>
        <button onClick={() => handle('series')} className={visible.series === true ? `${StylesPages.heroesBtns} ${StylesPages.isSelected}` : `${StylesPages.heroesBtns}`}>Séries</button>
        <button onClick={() => handle('stories')} className={visible.stories === true ? `${StylesPages.heroesBtns} ${StylesPages.isSelected}` : `${StylesPages.heroesBtns}`}>Histórias</button>
      </nav>
      <main>
        <ul className={StylesPages.detailsList}>
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
