const phoneBook = document.querySelector('.PhoneBook')

const moda = [
	{
		title: "Gn Modas",
		link: "https://api.whatsapp.com/send?phone=5585996026888"
	},
	{
		title: "Belíssima",
		link: "https://api.whatsapp.com/send?phone=5585986437549"
	},
	{
		title: "Ateliê da Moda",
		link: "https://api.whatsapp.com/send?phone=5585989403478"
	},
	{
		title: "Galerie",
		link: "https://api.whatsapp.com/send?phone=5585989045858"
	},
	{
		title: "Maciço Imports",
		link: "https://api.whatsapp.com/send?phone=5585997491480"
	},
	{
		title: "Bebê Cheiroso",
		link: "https://api.whatsapp.com/send?phone=5585988197186"
	},
	{
		title: "Bem Calçado",
		link: "https://api.whatsapp.com/send?phone=5585986950009"
	},
	{
		title: "Boutique Serrana",
		link: "https://api.whatsapp.com/send?phone=5585988523434"
	},
	{
		title: "Estilo Mulher",
		link: "https://api.whatsapp.com/send?phone=5585985367274"
	},
	{
		title: "Fafá Modas",
		link: "https://api.whatsapp.com/send?phone=5585988645818"
	},
	{
		title: "Criança Feliz",
		link: "https://api.whatsapp.com/send?phone=5585988686585"
	},
]

phoneBook.innerHTML += moda.map((user) => {
    return contact(user)
    }
).join('')