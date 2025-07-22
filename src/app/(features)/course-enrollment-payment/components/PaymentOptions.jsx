import React, { useState } from 'react';
import Icon from './AppIcon';


const PaymentOptions = ({ selectedOption, onOptionChange, course }) => {
  const [selectedEMI, setSelectedEMI] = useState('6');

  const paymentMethods = [
    {
      id: 'full',
      title: 'Full Payment',
      description: 'Pay the complete amount now',
      icon: 'CreditCard',
      amount: course.finalPrice,
      savings: course.originalPrice - course.finalPrice
    },
    {
      id: 'emi',
      title: 'EMI Options',
      description: 'Pay in easy monthly installments',
      icon: 'Calendar',
      popular: true
    },
    {
      id: 'wallet',
      title: 'Wallet & UPI',
      description: 'Pay using digital wallets or UPI',
      icon: 'Smartphone',
      amount: course.finalPrice,
      cashback: 50
    }
  ];

  const emiPlans = [
    { tenure: '3', monthly: Math.ceil(course.finalPrice / 3), interest: '0%', total: course.finalPrice },
    { tenure: '6', monthly: Math.ceil(course.finalPrice / 6 * 1.05), interest: '5%', total: Math.ceil(course.finalPrice * 1.05) },
    { tenure: '12', monthly: Math.ceil(course.finalPrice / 12 * 1.12), interest: '12%', total: Math.ceil(course.finalPrice * 1.12) }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
          Choose Payment Method
        </h3>
        
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div key={method.id} className="relative">
              <label className="flex items-start space-x-4 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors duration-200">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedOption === method.id}
                  onChange={(e) => onOptionChange(e.target.value)}
                  className="mt-1 w-4 h-4 text-primary border-border focus:ring-primary"
                />
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={method.icon} size={20} className="text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-body font-medium text-foreground">
                          {method.title}
                        </h4>
                        {method.popular && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {method.description}
                      </p>
                    </div>
                    
                    {method.amount && (
                      <div className="text-right">
                        <div className="font-heading font-semibold text-foreground">
                          ₹{method.amount.toLocaleString('en-IN')}
                        </div>
                        {method.savings && (
                          <div className="text-xs text-success">
                            Save ₹{method.savings.toLocaleString('en-IN')}
                          </div>
                        )}
                        {method.cashback && (
                          <div className="text-xs text-success">
                            ₹{method.cashback} cashback
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </label>
              
              {/* EMI Plans Expansion */}
              {method.id === 'emi' && selectedOption === 'emi' && (
                <div className="mt-3 ml-8 p-4 bg-muted/30 rounded-lg border border-border">
                  <h5 className="font-body font-medium text-foreground mb-3">
                    Select EMI Plan
                  </h5>
                  
                  <div className="grid gap-3">
                    {emiPlans.map((plan) => (
                      <label key={plan.tenure} className="flex items-center justify-between p-3 border border-border rounded-lg cursor-pointer hover:bg-card transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="emiPlan"
                            value={plan.tenure}
                            checked={selectedEMI === plan.tenure}
                            onChange={(e) => setSelectedEMI(e.target.value)}
                            className="w-4 h-4 text-primary border-border focus:ring-primary"
                          />
                          <div>
                            <div className="font-body font-medium text-foreground">
                              {plan.tenure} months
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {plan.interest} interest
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-heading font-semibold text-foreground">
                            ₹{plan.monthly.toLocaleString('en-IN')}/month
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Total: ₹{plan.total.toLocaleString('en-IN')}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Trust Signals */}
      <div className="bg-success/5 border border-success/20 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Shield" size={16} className="text-success" />
          <span className="font-body font-medium text-success">Secure Payment</span>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={12} className="text-success" />
            <span>256-bit SSL encryption</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={12} className="text-success" />
            <span>30-day money-back guarantee</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={12} className="text-success" />
            <span>Instant course access after payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;