
const rederBtn = (container, index) => {
  
  let btns = Array(10).fill(1).map(( _, pageIndex) => {
    // console.log(index);
    return (
      `<button class="page-btn 
      ${index === (++pageIndex )? "active-btn" : "null "}" data-index="${pageIndex}">
      ${pageIndex}
      </button>`
      )
    });

  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">prev</button>`);
  container.innerHTML = btns.join("");
};

export default rederBtn;
