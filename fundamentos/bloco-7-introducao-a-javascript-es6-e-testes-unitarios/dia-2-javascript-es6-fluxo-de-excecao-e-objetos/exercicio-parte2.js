const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
    //   Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  }
  
  console.log(customerInfo(order));
  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.order.delivery.deliveryPerson = 'Luiz Silva';
    order.payment.total = 50;
    const pizza = Object.keys(order.order.pizza);
    const bebidas = Object.values(order.order.drinks.coke);
    return `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${pizza} e ${bebidas[0]} é R$ ${order.payment.total},00.`;
  }
  
  console.log(orderModifier(order));