var items = document.querySelectorAll(".carousell .carousell-item");

items.forEach((e)=>{
    const slide = 2;
    let next = e.nextElementSibling;
    // next.style.background = 'none';
    for (var i = 0 ; i<slide ;i++)
    {
        if(!next)
        {
            next = items[0];
        }

        let clonechild = next.cloneNode(true);
        e.appendChild(clonechild.children[0]);

        next = next.nextElementSibling;
    }
})