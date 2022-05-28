import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L4PyGAAZ306apf82Q4UbUQI5ULpbXAiVtV4nZoJKTlT17ARDkpPpWwzwOzBSs6tYMktt7I7voMqtGdhJ16MJIJR00V17vjrdY');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/payOrder/${id}`;
    const { data: order, isLoading } = useQuery(['payOrder', id], () => fetch(url).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div class="card max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-xl text-success">Hello, {order.client}</p>
                    <h2 class="card-title">Your Selected Product is {order.name}</h2>
                    <p className='mb-8'>Please Pay: ${order.price}</p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;