
function rnd(x,y){

    return x+(y-x+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0
}


/* FALLING DOWN  */

for(let i = 0; i<24; i++){
    
    var animations_array = ['falling-down--short', 'falling-down--medium', 'falling-down--long']

    //create random styles for item
    var _left = rnd(25,500)
    var _right = rnd(25,500)
    var _top = rnd(-250,100)
    var style_position = ``

    if(i % 2 == 0)
        style_position = `left:${_left}px; top:${_top}px;`
    else
        style_position = `right:${_right}px; top:${_top}px;`
    

    var _delay = rnd(100, 3500)
    var _name = animations_array[rnd(0,2)];
    var _duration = rnd(4,7);
    var style_animation = `animation-delay:${_delay}ms; animation-name:${_name}; animation-duration:${_duration}s;`
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */

    //apply style to item
    var animate_item = 
        `<div class="line_rotate--180deg" style="${style_position}">
            <div class="line" style="${style_animation}">
                <div class="line__head"></div>
                <div class="line__body"></div>
            </div>
        </div>`
    
    //add item to DOM
    if(i % 2 == 0)
        document.querySelector('.falling_down_animation__left_side').innerHTML += animate_item
    else
        document.querySelector('.falling_down_animation__right_side').innerHTML += animate_item

}




/* FALLING DIAGONALLY TO RIGHT-TOP */

for(let i = 0; i<15; i++){
    
    var animations_array = ['falling-down--short', 'falling-down--medium', 'falling-down--long']

    //create random styles for item
    var _left = rnd(0,250)
    var _top = rnd(0,400)
    var style_position = `left:${_left}px; top:${_top}px;`

    var _delay = rnd(0, 3500)
    var _name = animations_array[rnd(0,2)];
    var _duration = rnd(4,7);
    var style_animation = `animation-delay:${_delay}ms; animation-name:${_name}; animation-duration:${_duration}s;`


    //apply style to item
    var animate_item = 
    `<div class="line_rotate--60deg" style="${style_position}">
        <div class="line" style="${style_animation}">
            <div class="line__head"></div>
            <div class="line__body"></div>
        </div>
    </div>`

    //add item to DOM
    document.querySelector('.falling_diagonally_right-top_animation_container').innerHTML += animate_item

}



/* FALLING DIAGONALLY TO LEFT-BOTTOM */

for(let i = 0; i<15; i++){
    
    var animations_array = ['falling-down--short', 'falling-down--medium', 'falling-down--long']

    //create random styles for item
    var _right = rnd(0,200)
    var _top = rnd(0,400)
    var style_position = `right:${_right}px; top:${_top}px;`
 
    var _delay = rnd(0, 3500)
    var _name = animations_array[rnd(0,2)];
    var _duration = rnd(4,7);
    var style_animation = `animation-delay:${_delay}ms; animation-name:${_name}; animation-duration:${_duration}s;`

   
    //apply style to item
    var animate_item = 
    `<div class="line_rotate--240deg" style="${style_position}">
        <div class="line" style="${style_animation}">
            <div class="line__head"></div>
            <div class="line__body"></div>
        </div>
    </div>`
    
    //add item to DOM
    document.querySelector('.falling_diagonally_left-bottom_animation_container').innerHTML += animate_item

}