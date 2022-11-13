    //Logic Replacing Standart styled "select" blocks to custom styled blocks

    const select = document.querySelectorAll('select');
    select.forEach(select => {
    let optValues=[];

    select.querySelectorAll("option").forEach(element => {
        optValues.push(element.innerHTML)
    });

    let listItems="";

    for(i=0; i<optValues.length; i++){
        if(i==0){
               listItems+=`<li hidden><span class="category-name">${optValues[i]}</span></li>`;
            
        }else{
            listItems+=`<li><span class="category-name">${optValues[i]}</span></li>`;
        }
    }

    const customSelect = `<div class="dropdown">
                            <div class="select">
                                <span class="selected selected__default">${optValues[0]}</span>
                            </div>
                            <ul class="menu">
                                ${listItems}
                            </ul>
                        </div>`;
    
    select.insertAdjacentHTML("afterend", customSelect);
    select.hidden = true;
    })

    //Operating logic of custom "select" blocks
    
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li span');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select__clicked');

        menu.classList.toggle('menu-open');
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            select.classList.remove('select__clicked');

            menu.classList.remove('menu-open');

            selected.classList.remove('default-style');

            options.forEach(option => {
                option.classList.remove('active');
            })
            option.classList.add('active');
        })
    })

    document.addEventListener('click', function(e){
        console.log(e.target);
        if(e.target !== selected && e.target !== select){
            menu.classList.remove('menu-open');
            select.classList.remove('select__clicked');
        }
    })
})

