const phoneBook = document.querySelector('.PhoneBook')

const variedades = [
	{
		title: "Pacoti Variedades",
		link: "https://api.whatsapp.com/send?phone=5585992310902"
	},
	{
		title: "Moto Peças Pacoti",
		link: "https://api.whatsapp.com/send?phone=5585989438944"
	},
	{
		title: "Agromace",
		link: "https://api.whatsapp.com/send?phone=5585987214607"
	},
	{
		title: "Armazém Serrano",
		link: "https://api.whatsapp.com/send?phone=5585989370455"
	},
	{
		title: "Casa Peixoto",
		link: "https://api.whatsapp.com/send?phone=5585988440083"
	},
	{
		title: "MB Acessórios",
		link: "https://api.whatsapp.com/send?phone=5585992754568"
	},
	{
		title: "Paty Variedades",
		link: "https://api.whatsapp.com/send?phone=5585986841897"
	},
	{
		title: "Andrade Tintas",
		link: "https://api.whatsapp.com/send?phone=5585988015709"
	},
	{
		title: "Deposito Netinho",
		link: "https://api.whatsapp.com/send?phone=5585988001929"
	},
	{
		title: "BS KIDS",
		link: "https://api.whatsapp.com/send?phone=5585996364197"
	},
	{
		title: "Casa Uchôa",
		link: "https://api.whatsapp.com/send?phone=5585989157788"
	},
	{
		title: "Raimundinha Variedades",
		link: "https://api.whatsapp.com/send?phone=5585988550044"
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

phoneBook.innerHTML += variedades.map((user) => {
    return contact(user)
    }
).join('')