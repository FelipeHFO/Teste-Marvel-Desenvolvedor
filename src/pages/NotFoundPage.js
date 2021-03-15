import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import StylesPages from './StylesPages.module.css'

function NotFoundPage() {
  return (
    <DefaultLayout>
      <h1 className={StylesPages.erro}>404 - Page not found...</h1>
    </DefaultLayout>
  )
}

export default NotFoundPage;
