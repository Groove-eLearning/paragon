---
title: 'IconButton'
type: 'component'
components:
- IconButton
categories:
- Buttonlike
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

### Basic Usage with Paragon Icon

```jsx live
() => {
  return (
    <div className="d-flex">
      <IconButton src={Close} iconAs={Icon} alt='Close' onClick={() => {}} variant="primary" />
    </div>
  );
}
```

### Basic Usage with FontAwesome Icon

```jsx live
() => {
  const icon = FontAwesome.faTimes;

  return (
    <div className="d-flex">
      <IconButton icon={icon} alt='Close' onClick={() => {}} variant="primary" />
      <IconButton icon={icon} alt='Close' onClick={() => {}} variant="secondary" />
      <IconButton icon={icon} alt='Close' onClick={() => {}} variant="success" />
      <IconButton icon={icon} alt='Close' onClick={() => {}} variant="warning" />
      <IconButton icon={icon} alt='Close' onClick={() => {}} variant="danger" />
      <IconButton icon={icon} alt='Close' onClick={() => {}} variant="light" />
      <IconButton icon={icon} alt='Close' onClick={() => {}} variant="dark" />
    </div>
  );
}
```

### Inverted Colors

```jsx live
() => {
  const variants = ["primary", "secondary", "success", "warning", "danger", "light", "dark"]

  return (
    <div className="d-flex">
      {variants.map((variant) => {
        return (
          <div class={`bg-${variant} p-2 m-2`}>
            <IconButton
              key={variant}
              icon={FontAwesome.faBars}
              alt='Menu'
              onClick={() => console.log("You clicked the menu button")}
              variant={variant}
              invertColors={true}
            />
          </div>
        );
      })}
    </div>
  );
}
```