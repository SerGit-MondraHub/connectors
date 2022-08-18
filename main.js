let button=document.querySelector('button');

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
        'instead of',
        'unless',
        'wether',
        'wether to',
        'since'
      ]

function display()
{
  let result=array[Math.round(Math.random()*array.length)]
  document.querySelector('h1').innerHTML=result;
}

button.onclick=display;
