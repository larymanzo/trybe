// resoluções pegas do gabarito da trybe para estudo e entendimento

const order = {
    //
    name: 'Rafael Andrade',
    //
    phoneNumber: '11-98763-1416',
    //
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    //
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      //
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      //
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    //
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
        const deliveryPerson = order.order.delivery.deliveryPerson;
        const customerName = order.name;
        const customerPhone = order.phoneNumber;
        const street = order.address.street;
        const number = order.address.number;
        const apartment = order.address.apartment;
      
        console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
      }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const customerName = order.name = 'Luiz Silva';
    const street = order.payment.total = 50;
    
    console.log(`Olá ${customerName}, o total do seu pedido de de muzzarella, calabresa e Coca-Cola Zero é de ${street}`);
  
  }
  
  orderModifier(order);