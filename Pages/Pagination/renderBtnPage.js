const btnData = [1,2,3,4,5,6,7,8,9,10]


const rederBtn = (container, index) => {
  
  let btns = btnData.map(( btn, pageIndex) => {
    // console.log(index);
    return (
      `<button class="page-btn 
      ${index === (++pageIndex )? "active-btn" : "null "}" data-index="${pageIndex}">
      ${btn}
      </button>`
      )
    });

  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">prev</button>`);
  container.innerHTML = btns.join("");
};

export default rederBtn;
