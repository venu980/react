import UserProfile from './Components/UserProfile/index'

const UserDetails = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'Praneetha',
  designation: 'Software Engineer',
}

const App = () => <UserProfile userDetails={UserDetails} />

export default App
