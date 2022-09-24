import Notiflix from 'notiflix';

const form = document.querySelector('.form');
 const delayIn = document.querySelector('[name="delay"]')
 const stepIn =  document.querySelector('[name="step"]')
const amountIn = document.querySelector('[name="amount"]')
form.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });

      } else {
        reject({ position, delay });
      }
    }, delay);
  })
 
}
function onSubmitForm(event) {
  event.preventDefault();

  let delay = Number(delayIn.value);
  let step = Number(stepIn.value);
  let amount = Number(amountIn.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay + i * step)
     .then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
   
  }
}





