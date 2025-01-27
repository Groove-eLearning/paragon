---
title: 'Pagination'
type: 'component'
components:
- Pagination
categories:
- Navigation
status: 'Needs Work'
designStatus: 'Done'
devStatus: 'To Do'
notes: |
  TODO: shim from react-bootstrap
  Breaks if given 5000 pages.
  Overly complex implementation.
  Remove baked in english strings
---

Navigation between multiple pages of some set of results. Controls are provided to navigate through multiple pages of related data.

### Basic usage

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  onPageSelect={() => console.log('page selected')}
/>
```

### With initial page selected

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  currentPage={15}
  onPageSelect={() => console.log('page selected')}
/>
```

### With max pages displayed

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  onPageSelect={() => console.log('page selected')}
  maxPagesDisplayed={9}
/>
```

### With custom string labels

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  onPageSelect={() => console.log('page selected')}
  buttonLabels={{
    previous: 'Anterior',
    next: 'Siguiente',
    page: 'Página',
    currentPage: 'Página actual',
    pageOfCount: 'de',
  }}
/>
```

### With custom element labels

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  onPageSelect={() => console.log('page selected')}
  buttonLabels={{
    previous: <span>Anterior</span>,
    next: <span>Siguiente</span>,
    page: <span>Página</span>,
    currentPage: <span>Página actual</span>,
    pageOfCount: <span>de</span>,
  }}
/>
```

### With custom right and left icons

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  onPageSelect={() => console.log('page selected')}
  icons={{ // replacing with svg
    leftIcon: <svg viewBox="0 0 32 32" style={{width: '15px'}} aria-hidden="true" className="mr-2"><path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></svg>,
    rightIcon: <svg viewBox="0 0 32 32" style={{width: '15px'}} aria-hidden="true" className="ml-2"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
  }}
/>
```
