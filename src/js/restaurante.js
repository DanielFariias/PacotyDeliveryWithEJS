const phoneBook = document.querySelector('.PhoneBook')

const restaurante = [
	{
		title: "Divino Sabor",
		link: "https://api.whatsapp.com/send?phone=5585988679493"
	},
	{
		title: "Soumi Casa de Sushi",
		link: "https://api.whatsapp.com/send?phone=5585991790222"
	},
	{
		title: "Salgadinhos da Osana",
		link: "https://api.whatsapp.com/send?phone=5585989915303"
	},
	{
		title: "Tempero Portugês",
		link: "https://api.whatsapp.com/send?phone=5585996585872"
	},
	{
		title: "Família Doce",
		link: "https://api.whatsapp.com/send?phone=5585989913610"
	},
	{
		title: "Praça Gourmet",
		link: "https://api.whatsapp.com/send?phone=5585987595577"
	},
	{
		title: "Panificadora Pacoti",
		link: "https://api.whatsapp.com/send?phone=5585988378914"
	},
	{
		title: "Lourenço Gourmet",
		link: "https://api.whatsapp.com/send?phone=5585996814003"
	},
	{
		title: "Space Burguer",
		link: "https://api.whatsapp.com/send?phone=5585985020327"
	},
	{
		title: "Mineiro Casa de Amigos",
		link: "https://api.whatsapp.com/send?phone=5585988188003"
	},
	{
		title: "Baião Gostoso",
		link: "https://api.whatsapp.com/send?phone=5585988545767"
	},
	{
		title: "Delivery da Gil",
		link: "https://api.whatsapp.com/send?phone=5585988598735"
	},
	{
		title: "Doces e Sabores",
		link: "https://api.whatsapp.com/send?phone=5585984185796"
	},
	{
		title: "Nobre Lanches",
		link: "https://api.whatsapp.com/send?phone=5585988368988"
	},
]

const contact = function(user) {
    return (
        `
            <div class="contact">
                <p>${user.title}</p>
                <button>
                    <a href="${user.link}">
                        <img src="../../public/Whatsapp.svg" alt="Whatsapp">
                    </a>
                </button>
            </div>
        `
    )
}

phoneBook.innerHTML += restaurante.map((user) => {
    return contact(user)
    }
).join('')