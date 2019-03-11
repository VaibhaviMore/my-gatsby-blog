const getContactHref = (name, contact) => {
  let href;

  switch (name) {
    
    case 'github':
      href = `https://github.com/vaibhavimore`;
      break;
    case 'email':
      href = `mailto:vaibmore26@gmail.com`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
