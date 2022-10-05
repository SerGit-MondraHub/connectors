const button=document.querySelector('button');
const button2=document.getElementById('b2');

const array=
      [
        'because',
        'because of',
        'as a result of',
        'due to',
        'so (that)',
        'in order to',
        'so as not to',
        'although',
        'even though',
        'in spite of',
        'despite',
        'instead of'
      ]

const array2=
      [
        'unless',
        'still',
        'already',
        'wether',
        'wether to',
        'just',
        'since'
      ]

function display()
{
  let result=array[Math.floor(Math.random()*array.length)]
  document.querySelector('h1').innerHTML=result;
}

button.onclick=display;

function display2()
{
  let result2=array2[Math.floor(Math.random()*array2.length)]
  document.getElementById('r2').innerHTML=result2;
}

button2.onclick=display2;
