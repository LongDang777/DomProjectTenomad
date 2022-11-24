const paginate = (ArrayUser) => {
  const itemOfPage = 10;
  const numberOfPages = 100 / itemOfPage; //Math.ceil
  
  const newUserS = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemOfPage;
    return ArrayUser.slice(start, start + itemOfPage)
  })
  return newUserS
};

export default paginate;
