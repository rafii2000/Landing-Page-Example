var blobs_colors = [
    'radial-gradient(49.96% 49.96% at 50.07% 49.96%, #EA8100 56.42%, #E67F00 62.97%, #DC7900 68.77%, #CA6F00 74.3%, #B06100 79.65%, #8F4F00 84.87%, #673900 90.01%, #371F00 95%, #010100 99.89%, #000000 100%);',
    'radial-gradient(50% 50% at 50.01% 49.9%, #F50000 56.42%, #F10000 62.84%, #E70000 68.52%, #D50000 73.93%, #BB0000 79.17%, #9A0000 84.29%, #720000 89.33%, #420000 94.28%, #0C0000 99.06%, #000000 100%);',
    'radial-gradient(50% 50% at 49.96% 49.91%, #7000B2 56.42%, #6E00AE 63.83%, #6700A4 70.4%, #5C0092 76.64%, #4C0078 82.69%, #370057 88.6%, #1E002F 94.32%, #000001 99.94%, #000000 100%);',
    'radial-gradient(50% 50% at 49.99% 50.04%, #7000B2 56.42%, #6E00AE 63.83%, #6700A4 70.4%, #5C0092 76.64%, #4C0078 82.69%, #370057 88.6%, #1E002F 94.32%, #000001 99.94%, #000000 100%);',
    'radial-gradient(49.99% 49.99% at 50% 50%, #DE0000 56.42%, #DA0000 63.13%, #D00000 69.07%, #BE0000 74.73%, #A40000 80.21%, #830000 85.56%, #5B0000 90.82%, #2C0000 95.9%, #000000 100%);'
]

var blobs_animations = ['blob_pulse--bright', 'blob_pulse--brighter', 'blob_pulse--brightest']

function rnd(x,y){

    return x+(y-x+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0
}


for(let i = 0; i<15; i++){
    
    //create random styles for item
    var _size = rnd(10,40)
    var _left = rnd(50, 1870)     //screen width (px)
    var _top = rnd(0,600)         //div height
    var _background = blobs_colors[rnd(0,4)]
    var blob_appearance = `left:${_left}%; top:${_top}px; width:${_size}px; height:${_size}px; background:${_background}` 
    var blob_appearance = `left:${_left}px; top:${_top}px; width:${_size}px; height:${_size}px; background:${_background}` 

    var _delay = rnd(100, 6000)
    var _name = blobs_animations[rnd(0,1)];
    var _duration = rnd(3,4);
    var blob_animation = `animation-delay:${_delay}ms; animation-name:${_name}; animation-duration:${_duration};`
       
    //apply style to item
    var blob = ` <div class="blob" style="${blob_appearance + ' ' + blob_animation} "></div>`;
    
    //add item to DOM
    document.querySelector('.pulse_blobs_container_animation').innerHTML += blob

}
