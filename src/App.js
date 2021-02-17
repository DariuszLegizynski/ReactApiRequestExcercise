import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState();
	const address = "https://randomuser.me/api";

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(address).catch((err) =>
				alert(err.message)
			);
			const fetchedData = await response
				.json()
				.catch((err) => alert(err.message));
			setData(fetchedData.results);
		};
		getData();
	}, []);
	let name = "";
	if (data) {
		name = data.map((el) => el.name.first);
	}

	return <div className="App">Hello {name}</div>;
}

export default App;
