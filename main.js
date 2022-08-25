const button=document.getElementById('a').children[0];
const button2=document.getElementById('b').children[0];

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
  let result=array[Math.round(Math.random()*array.length)]
  document.getElementById('a').children[1].innerHTML=result;
}

button.onclick=display;

function display2()
{
  let result2=array2[Math.round(Math.random()*(array2.length)]
  document.getElementById('b').children[1].innerHTML=result2;
}

button2.onclick=display2;


