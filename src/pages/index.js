const IndexPage = () => {
  const windowGlobal = typeof window !== 'undefined' && window;

  if (windowGlobal) {
    windowGlobal.location = '/0/';
  }

  return null;
}

export default IndexPage