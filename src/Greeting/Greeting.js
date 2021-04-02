	function UserGreetings(props) {
	return (
		<h1>Welcome, back!</h1>
	)
}

function GuestGreeting(props) {
	return (
		<h1>Please sign up</h1>
	)
}

function Greeting(props) {
	return props.isLoggedIn ? <UserGreetings/> : <GuestGreeting/>; 
}

export default Greeting;