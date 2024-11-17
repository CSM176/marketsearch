import PageHeader from "./components/pageheader"
import laptop from "./assets/laptop.jpg"
import Listing from "./components/itemcard";
function App() {
  const listings = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Laptop HP Envy 13',
      location: 'Melbourne, VIC',
      status: 'Waiting on response...',
      oldPrice: '$300',
      newPrice: 'A$275',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Apple MacBook Pro',
      location: 'Sydney, NSW',
      status: 'Pending confirmation...',
      oldPrice: '$1200',
      newPrice: 'A$1100',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Samsung Galaxy S21',
      location: 'Brisbane, QLD',
      status: 'In negotiation...',
      oldPrice: '$800',
      newPrice: 'A$750',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Sony WH-1000XM4 Headphones',
      location: 'Perth, WA',
      status: 'Offer accepted',
      oldPrice: '$350',
      newPrice: 'A$300',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Fitbit Charge 5',
      location: 'Adelaide, SA',
      status: 'On hold',
      oldPrice: '$150',
      newPrice: 'A$130',
    },
  ];

  return (
    <>
      <PageHeader />
      <div className="flex flex-wrap gap-4 p-4 w-full justify-center"> 
        {listings.map((listing, index) => ( <Listing key={index} /> ))} 
      </div>
    </>
  )
}

export default App
