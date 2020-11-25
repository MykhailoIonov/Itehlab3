const workers = [];

let countDay = 0;
let countDayI = 1;
let workAverage = 0;

const calcAverage = event => {
    event.preventDefault();
    const nameValue = event.target['name'].value;
    const dateNowValue = event.target['dateNow'].value;
    const dateEnterValue = event.target['dateEnter'].value;

    const date1 = new Date(dateNowValue);
    const date2 = new Date(dateEnterValue);
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.abs((date1.getTime() - date2.getTime()) / (oneDay));

    if (nameValue.trim() && dateNowValue.trim() && dateEnterValue.trim()) {
        workers.push(diffDays);

        for (let i = 0; i < workers.length; i++) {
            countDay += diffDays;
            countDayI += i; //because if(i=0) => infinity => infinity/number or number/infinity => infinity (1)
            workAverage = (countDay / countDayI).toFixed(3);
            document.querySelector('.spanNumber').innerHTML = i + 1; // => (1)
            
            if (workAverage === 0) {
                alert('Sorry, but average work experience = 0. Check all')
                return;
            }
        }
    } else {
        alert('Enter all data');
    }
    document.querySelector('.spanAverage').innerHTML = workAverage;
}

console.log(workers);