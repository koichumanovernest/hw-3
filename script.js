const cardStyle = {
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	margin: "10px",
	width: "600px",
	backgroundColor: "#f9f9f9",
	fontFamily: "Arial, sans-serif",
	// marginTop: "100px",
};

const imageStyle = {
	cursor: "pointer",
	maxWidth: "100%",
	height: "auto",
	borderRadius: "5px",
};

const button = {
	color: "rgb(219, 89, 29)",
	padding: "8px 15px",
	borderRadius: "3px",
	cursor: "pointer",
	marginTop: "10px",
	border: "2px solid rgb(219, 89, 29)",
};

const inputStyle = {
	padding: "5px",
	width: "96%",
	// marginTop: "100px",
};

const card = React.createElement(
	"div",
	{ style: cardStyle },
	React.createElement("img", {
		src: "https://a.d-cd.net/LkAAAgIZUeA-1920.jpg",
		alt: "Изображение",
		style: imageStyle,
	}),
	React.createElement(
		"h2",
		null,
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ullam ducimus! Iste, quae quis quaerat, possimus fugit inventore temporibus modi recusandae veritatis minus eum atque laboriosam tempora officia illo. Voluptates!"
	),
	React.createElement("p", null, "Описание товара"),
	React.createElement(
		"button",
		{ style: button, onClick: () => alert("Товар добавлен в корзину") },
		"BUTTON"
	),
	React.createElement(
		"p",
		null,
		"Enter your name:",
		React.createElement("input", { style: inputStyle })
	),
	React.createElement(
		"p",
		null,
		"Enter your email:",
		React.createElement("input", { style: inputStyle })
	),
	React.createElement("button", null, "Subscribe!")
);

ReactDOM.render(card, document.getElementById("root"));
