//listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e){
    //hide results
    document.getElementById('results').style.display = 'none'
    
    //show loader
    document.getElementById('loading').style.display = 'block'
    setTimeout(calculateResults, 2000);

    e.preventDefault()
});

//calculate resutls
function calculateResults(){
    console.log('calculating..')
    //ui variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const montlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //compute montly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const montly = (principal * x * calculatedInterest) / (x-1)

    if(isFinite(montly)){
        montlyPayment.value = montly.toFixed(2);
        totalPayment.value = (montly * calculatedPayments).toFixed(2)
        totalInterest.value = ((montly * calculatedPayments) - principal).toFixed(2);
        
        //show results
        document.getElementById('results').style.display = 'block'

        //hide loader
        document.getElementById('loading').style.display = 'none'

    }else{
        // console.log('Please check your numbers')
        showError('Please Check Your Numbers')
    }

    // e.preventDefault();
}

//show error
function showError(error){
    //hide results
    document.getElementById('results').style.display = 'none'

    //hide loader
    document.getElementById('loading').style.display = 'none'


    //create a div
    const errorDiv = document.createElement('div');

    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')

    //add class
    errorDiv.className = 'alert alert-danger';
 
    //create text node and append to div;
    errorDiv.appendChild(document.createTextNode(error));

    //insert error above heading
    card.insertBefore(errorDiv, heading)

    //clear error after 3 seconds
    setTimeout(clearError, 3000)
}

//clear error
function clearError(){
    document.querySelector('.alert').remove()
}